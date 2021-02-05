import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import img2 from '../../photos/gmail/p-2.png';
import img3 from '../../photos/gmail/p-3.png';

export class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <h3> At Login </h3>

        <div className='d-flex '>
          <div>
            <img src={img2} alt='' />
            <img src={img3} alt='' />
          </div>
          <div className='login d-inline display-5 px-3'>
            STEP 2: This type of form will be in your screen.Fill the form with
            respective details . A sample is shown on the picture below. It is
            expected to create a strong password of length greater than or equal
            to 8 characters.
            <div className='py-5'>If done click on next</div>
          </div>
        </div>

        <Link to='/gmail/verify' className='btn btn-primary btn-lg'>
          Next
        </Link>
        <Link to='/' className='btn mx-4 btn-primary btn-lg'>
          GO BACK
        </Link>
      </React.Fragment>
    );
  }
}

export default Login;
