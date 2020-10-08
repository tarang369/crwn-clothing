import './cart-dropdown.scss';

import CustomButton from '../custom-button/custom-button';
import React from 'react';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        <CustomButton> CHECKOUT</CustomButton>
      </div>
    </div>
  );
};

export default CartDropdown;
