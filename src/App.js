import './App.css';

import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header';
import HomePage from './pages/homepage/homepage.jsx';
import React from 'react';
import ShopPage from './pages/shop/shop.jsx';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
