import React, { Component } from 'react';
import img1 from '../../photos/gmail/p-1.png';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import Login from './Login';
import './style.css';

export class goToGoogle extends Component {
  render() {
    return (
      <React.Fragment>
        <h3> Go to Google </h3>
        <div className='d-flex '>
          <img src={img1} alt='' />
          <div className='login d-inline display-5 px-3'>
            STEP 1: Go to google and type the following text as shown
            <div className='py-5'>If done click on next</div>
          </div>
        </div>
        <div className='center'>
          <Link to='/gmail/login' className='btn btn-primary btn-lg'>
            NEXT
          </Link>
          <Link to='/' className='btn mx-4 btn-primary btn-lg'>
            GO BACK
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default goToGoogle;
