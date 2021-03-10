import { GetStaticPaths } from 'next';
import React from 'react';

import Stripe from 'stripe';

const Product: React.FC = () => {
  return (
    <div>
      <h1>Product</h1>
    </div>
  );
}

const getStaticPaths: GetStaticPaths = async () => {
  return {
    path: [],
    fallback: false
  }
}

export default Product;