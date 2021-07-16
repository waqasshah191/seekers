import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import OrderTable from './components/orders/OrderTable';

import Profile from './components/profile/Profile';


const App = () => {
  
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home/>            
          </Route>
          <Route path='/orders'>
            <OrderTable/>
          </Route>

          <Route path='/profile'>
            <Profile />
          </Route>

        </Switch>
      </Router>
    </>
  );
};

export default App;