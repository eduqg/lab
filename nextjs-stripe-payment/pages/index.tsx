import React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Stripe from 'stripe';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import Router from 'next/router';

import stripeConfig from '../config/stripe'
import CheckoutButton from '../components/CheckoutButton';

interface HomeProps {
  skus: Stripe.Sku[]
}

export const getStaticProps: GetStaticProps = async () => {
  const stripe = new Stripe(stripeConfig.secretKey, {
    apiVersion: '2020-08-27'
  });

  const skus = await stripe.skus.list();

  return {
    props: {
      skus: skus.data
    }
  }
}

const Home: React.FC<HomeProps> = ({ skus }) => {
  return (
    <div>
      <h1>Simple Stripe Storage</h1>

      <hr />

      {skus.map(sku => (
        <div key={sku.id}>
          <h1>Product {sku.attributes.name}</h1>


          {sku.image && (
            <img src={sku.image}
              style={{ width: '100px' }} />
          )}


          <h2>{Number(sku.price / 100).toFixed(2)} {sku.currency.toUpperCase()}</h2>

          <CheckoutButton skuId={sku.id} itemName={sku.attributes.name} />

          <br />

          <Link href={"/" + sku.id}>Show product</Link>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Home;