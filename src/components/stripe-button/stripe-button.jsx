import './stripe-button.scss';

import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HdewjJ6SA5tkGKvnFM1cGVKYHpu23feo3EZFHlED2wMeghf5qeFn8weqyXRmXj2pqyhRKeS7KJyU5RiAdiTkNEw00629RQNJg';
  const onToken = token => console.log(token);
  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      description={`Your Total is $${price}`}
      image='https://sendeyo.com/up/d/f3eb2117da'
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
