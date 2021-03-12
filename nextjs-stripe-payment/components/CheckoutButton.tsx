import React, { useCallback } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('public_key_here');

interface CheckoutButtonProps {
  skuId: string;
  itemName: string;
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ skuId, itemName }) => {
  const handleClick = useCallback(async () => {
 
    
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{
        price: 'price_1IUEkgCRNZDbPdj35f8yPAWV',
        quantity: 1,
      }],
      // items: [
      //   { sku: skuId, quantity: 1 }
      // ],
      mode: 'payment',
      successUrl: `http://localhost:3000/success?itemName=${itemName}`,
      cancelUrl: 'http://localhost:3000/cancel',
    });

    if (error) {
      console.log(error);
    }
  }, [])

  return (
    <button role="link" onClick={handleClick}>
      Purchase
    </button>
  );
}

export default CheckoutButton;