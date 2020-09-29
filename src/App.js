import './App.css';

import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage';
import React from 'react';

const HatsPage = () => <div>Hatspage</div>;

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
