import './header.scss';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import React from 'react';

const Header = () => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>
        {/* <Link className="option"></Link> */}
      </div>
    </div>
  );
};

export default Header;