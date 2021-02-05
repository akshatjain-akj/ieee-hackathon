import React, { Component } from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import chrome from './goToGoogle';
import Login from './Login';
import Verify from './verify';
import './style.css';
import Details from './details';
import Finish from './privacyAndFinish';

export class gmail extends Component {
  render() {
    return (
      <div>
        <h3> Lets get started </h3>
        <BrowserRouter>
          <Route path='/gmail' exact component={chrome} />
          <Route path='/gmail/login' exact component={Login} />
          <Route path='/gmail/verify' exact component={Verify} />
          <Route path='/gmail/details' exact component={Details} />
          <Route path='/gmail/privacyandfinish' exact component={Finish} />
        </BrowserRouter>
        {/* <h1>Lets Go !</h1> */}
      </div>
    );
  }
}

export default gmail;
