/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react';
import {
  EmptyState, Layout, Page,
} from '@shopify/polaris';
import { TitleBar, ResourcePicker } from '@shopify/app-bridge-react';
import store from 'store-js';
import axios from 'axios';
import ProductList from '../components/ProductList';

function Index() {
  const [modal, setModal] = useState({ open: false });
  const emptyState = !store.get('ids');

  async function makeApiCall(products) {
    const url = '/api/products';
    axios.post(url, products)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  }

  function deleteApiData() {
    const url = '/api/products';

    axios.delete(url);
  }

  function handleSelection(resources) {
    const ids = resources.selection.map((product) => product.id);
    setModal({ open: false });
    store.set('ids', ids);

    const selectedProducts = resources.selection;
    deleteApiData();
    selectedProducts.map((product) => makeApiCall(product));
  }

  return (
    <Page>
      <TitleBar
        primaryAction={{
          content: 'Select New Products',
          onAction: () => setModal({ open: true }),
        }}
      />
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
