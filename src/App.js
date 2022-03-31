import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <>
      <div>Hello, TrybeWallet!</div>
      <Switch>
        <Route exact path="/" render={ (props) => <Login { ...props } /> } />
        <Route path="/carteira" render={ (props) => <Wallet { ...props } /> } />
      </Switch>
    </>
  );
}

export default App;
