/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react';
import { EmptyState, Layout, Page } from '@shopify/polaris';
import { ResourcePicker } from '@shopify/app-bridge-react';
import store from 'store-js';
import ProductList from '../components/ProductList';

function Index() {
  const [modal, setModal] = useState({ open: false });
  const emptyState = !store.get('ids');

  function handleSelection(resources) {
    const ids = resources.selection.map((product) => product.id);
    setModal({ open: false });
    store.set('ids', ids);
    console.log('some ids ', store.get('ids'));
  }

  return (
    <Page>
      <ResourcePicker
        resourceType="Product"
        showVariants
        open={modal.open}
        onSelection={(resources) => handleSelection(resources)}
        onCancel={() => setModal({ open: false })}
      />

      {emptyState ? (
        <Layout>
          <EmptyState
            heading="Manage your inventory transfers"
            action={{
              content: 'Add transfer',
              onAction: () => setModal({ open: true }),
            }}
            secondaryAction={{
              content: 'Learn more',
              url: 'https://help.shopify.com',
            }}
            image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
          >
            <p>Select products</p>
          </EmptyState>
        </Layout>
      ) : (
        <ProductList />
      )}
    </Page>
  );
}

export default Index;
