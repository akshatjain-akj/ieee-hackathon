import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import img11 from '../../photos/gmail/p-11.png';
import img12 from '../../photos/gmail/p-12.png';
import img13 from '../../photos/gmail/p-13.png';

export class privacyAndFinish extends Component {
  render() {
    return (
      <React.Fragment>
        <h3> At Finish </h3>
        <div className='d-flex flex-column  sm-6'>
          <div className='d-flex  display-5 '>
            <img src={img11} alt='' />
            <div className='login '>
              STEP 5: This is for accepting the privacy policies of google and
              and reasons and the flow of data in brief.
            </div>
          </div>
          <div>
            <img src={img12} alt='' className='multipleImg sm-3   ' />
            <img src={img13} alt='' className='multipleImg sm-3   ' />
          </div>
        </div>

        <Link to='/' className='btn btn-primary btn-lg'>
          Go to Home
        </Link>

        <Link to='/gmail/details' className=' mx-4 btn btn-primary btn-lg'>
          GO BACK
        </Link>
      </React.Fragment>
    );
  }
}

export default privacyAndFinish;
