import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import OrderTable from './components/orders/OrderTable';
import Search from './components/search/Search';

import Profile from './components/profile/Profile';
import LoginButton from './components/login/LoginButton';
import LogoutButton from './components/logout/LogoutButton';



const App = () => {

  return (
    <>
      <Router>
        <Header />
        <LoginButton />
        
        <LogoutButton />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/search'>
            <Search />
          </Route>
          <Route path='/orders'>
            <OrderTable />
          </Route>

          <Route path='/profile'>
            <Profile />
          </Route>

        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;