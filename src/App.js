import './App.css';

import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header';
import HomePage from './pages/homepage/homepage';
import React from 'react';
import ShopPage from './pages/shop/shop';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
