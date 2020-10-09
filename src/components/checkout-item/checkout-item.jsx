import './checkout-item.scss';

import React from 'react';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => {
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img alt='item' src={imageUrl} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>{price}</span>
      <span className='remove-button' onClick={console.log('hi')}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
