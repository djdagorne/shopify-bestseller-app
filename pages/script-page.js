/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';

const CREATE_SCRIPT_TAG = gql`
  mutation scriptTagCreate($input: ScriptTagInput!) {
    scriptTagCreate(input: $input) {
      scriptTag {
        id
      }
      userErrors {
        field
        message
      }
    }
  }
`;

const QUERY_SCRIPT_TAGS = gql`
  query {
    scriptTags(first: 5) {
      edges {
        node {
          id
          src
          displayScope
        }
      }
    }
  }  
`;

const DELETE_SCRIPT_TAG = gql`
  mutation scriptTagDelete($id: ID!) {
    scriptTagDelete(id: $id) {
      deletedScriptTagId
      userErrors {
        field
        message
      }
    }
  }
`;

function ScriptPage() {
  const [createScripts] = useMutation(CREATE_SCRIPT_TAG);
  const [deleteScripts] = useMutation(DELETE_SCRIPT_TAG);
  const { loading, error, data } = useQuery(QUERY_SCRIPT_TAGS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <button
        type="submit"
        onClick={() => {
          createScripts({
            variables: {
              input: {
                src: process.env.DEV_URL,
                displayScope: 'ALL',
              },
            },
            refetchQueries: [{ query: QUERY_SCRIPT_TAGS }],
          });
        }}
      >
        create script tag
      </button>
      <h1>Here are the script tags atm: </h1>
      {data.scriptTags.edges.map((item) => (
        <div key={item.node.id}>
          <p>{item.node.id}</p>
          <button
            type="submit"
            onClick={() => {
              deleteScripts({
                variables: {
                  id: item.node.id,
                },
                refetchQueries: [{ query: QUERY_SCRIPT_TAGS }],
              });
            }}
          >
            Delete Script
          </button>
        </div>
      ))}
    </div>
  );
}

export default ScriptPage;
