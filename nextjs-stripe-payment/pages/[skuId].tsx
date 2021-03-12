import React from 'react';
import Stripe from 'stripe';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';

import stripeConfig from '../config/stripe'

interface SkuProps {
  sku: Stripe.Sku
}

export const getStaticPaths: GetStaticPaths = async () => {
  const stripe = new Stripe(stripeConfig.secretKey, {
    apiVersion: '2020-08-27'
  });

  // sku = estoque
  const skus = await stripe.skus.list();

  const paths = skus.data.map(sku => ({
    params: {
      skuId: sku.id
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const stripe = new Stripe(stripeConfig.secretKey, {
    apiVersion: '2020-08-27'
  });

  const { skuId } = params;

  const sku = await stripe.skus.retrieve(skuId as string);

  return {
    props: {
      sku
    }
  }
}

const Product: React.FC<SkuProps> = ({ sku }) => {
  return (
    <div>
      <h1>Product {sku.attributes.name}</h1>


      {sku.image && (
        <img src={sku.image}
          style={{ width: '100px' }} />
      )}

      <h2>{Number(sku.price / 100).toFixed(2)} {sku.currency.toUpperCase()}</h2>

      <Link href="/">Go back</Link>
    </div>
  );
}

export default Product;