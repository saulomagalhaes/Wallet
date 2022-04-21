import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import GlobalStyle from './styles/global';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" render={ (props) => <Login { ...props } /> } />
        <Route path="/carteira" render={ (props) => <Wallet { ...props } /> } />
      </Switch>
      <GlobalStyle />
      <ToastContainer />
    </>
  );
}

export default App;
