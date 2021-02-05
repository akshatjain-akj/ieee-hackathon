import React, { Component } from 'react';
import img8 from '../../photos/gmail/p-8.png';
import img9 from '../../photos/gmail/p-9.png';
import img10 from '../../photos/gmail/p-10.png';
import { Link } from 'react-router-dom';
import './style.css';

export class details extends Component {
  render() {
    return (
      <React.Fragment>
        <h3> At Details </h3>
        <div className='d-flex flex-column  sm-6'>
          <div className='d-flex  display-5 '>
            <img src={img8} alt='' className='multipleImg sm-3   ' />
            <div className='sm-3'>
              STEP 4: After registering the phone number now you have to fill
              specific details of yourself . A sample picture is given on the
              picture.After this next step to click on 'Yes, Im in ' button and
              proceed further
            </div>
          </div>
          <div className='login d-flex  '>
            <img src={img9} alt='' className='multipleImg sm-3   ' />
            <img src={img10} alt='' className='multipleImg sm-3   ' />
          </div>
        </div>

        <Link to='/gmail/privacyandfinish' className='btn btn-primary btn-lg'>
          Next
        </Link>
        <Link to='/gmail/verify' className='btn mx-4 btn-primary btn-lg'>
          GO BACK
        </Link>
      </React.Fragment>
    );
  }
}

export default details;
