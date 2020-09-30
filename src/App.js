import './App.css';

import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.jsx';
import React from 'react';
import ShopPage from './pages/shop/shop.jsx';

const HatsPage = () => <div>Hatspage</div>;

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
