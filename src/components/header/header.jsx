// import './header.scss';

import {
  HeaderConatiner,
  LogoContainer,
  OptionLink,
  OptionsConatiner
} from './header.styles';

import CartDropdown from '../cart-dropdown/cart-dropdown';
import CartIcon from '../cart-icon/cart-icon';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import React from 'react';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderConatiner>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsConatiner>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/contact'>CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as='div' onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to='/signin'>SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsConatiner>
      {hidden ? null : <CartDropdown />}
    </HeaderConatiner>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});
export default connect(mapStateToProps)(Header);
