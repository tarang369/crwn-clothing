import './cart-dropdown.scss';

import CartItem from '../cart-item/cart-item';
import CustomButton from '../custom-button/custom-button';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { withRouter } from 'react-router-dom';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your Cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}>
        CHECKOUT
      </CustomButton>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
