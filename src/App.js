import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import AboutVapa from './components/content/AboutVapa';
import Contacts from './components/content/Contacts';
import Partners from './components/partners/Partners';
import PaymentAndDelivery from './components/content/PaymentAndDelivery';
import Sign from './components/sign/Sign';

import NavBar from "./components/navigation/NavBar";
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Profile from './components/profile/Profile';


function App() {
  return (
    <>
      <NavBar/>
      {/* <Home/> */}
        <Switch>
          <Route exact path='/vapa' >
            <Home />
          </Route>
              
          <Route path='/aboutVapa' >
            <AboutVapa />
          </Route>
              
          <Route path='/contacts' >
            <Contacts />
          </Route>
              
          <Route path='/partners' >
            <Partners />
          </Route>
              
          <Route path='/paymentAndDelivery' >
            <PaymentAndDelivery />
          </Route>
      
          <Route path='/sign-in' >
            <Sign/>
          </Route>

          <Route path='/sign-up' >
            <Sign isSignUp/>
          </Route>

          <Route path='/profile' >
            <Profile/>
          </Route>
              
        </Switch>
    <Footer/>
    </>
  );
}

export default App;
