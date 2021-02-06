import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import img4 from '../../photos/gmail/p-4.png';
import img5 from '../../photos/gmail/p-5.png';
import img6 from '../../photos/gmail/p-6.png';
import img7 from '../../photos/gmail/p-7.png';
import './style.css';

export class verify extends Component {
  render() {
    return (
      <React.Fragment>
        <h3> At Verify </h3>
        <div className='d-flex flex-column  sm-6'>
          <div className='d-flex  display-5 '>
            <img src={img5} alt='' className='multipleImg sm-3 ' />
            STEP 3:Enter your mobile number in the field provieded.You will
            receieve and OTP in you registered mobile number. The OTP should be
            similar to the image shown below
          </div>

          <div className='login'>
            <img src={img6} alt='' className='multipleImg sm-3 ' />
            <img src={img7} alt='' className='multipleImg sm-3 ' />
          </div>
        </div>

        <div className='d-flex justify-content-center mt-3'>
          <Link to='/gmail/login' className='btn btn-primary btn-lg'>
            GO BACK
          </Link>
          <Link to='/gmail/details' className='btn btn-primary btn-lg mx-4 '>
            Next
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default verify;
