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
        <div className='d-flex flex-wrap'>
          <div className='col-sm-6'>
            <img src={img1} alt='' />
          </div>

          <div className='login d-inline display-5 px-3 col-sm-6'>
            STEP 1: Go to google and type the following text as shown
            <div className='py-5'>If done click on next</div>
          </div>
        </div>
        <div className='d-flex justify-content-center mt-3'>
          <Link to='/' className='btn  btn-primary btn-lg'>
            GO BACK
          </Link>
          <Link to='/gmail/login' className='btn mx-4 btn-primary btn-lg'>
            NEXT
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default goToGoogle;
