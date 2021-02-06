import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import img1 from '../../images/Class/c1.png';
import img3 from '../../images/Class/c3.png';
import img4 from '../../images/Class/c4.png';
import img5 from '../../images/Class/c5.png';
import img6 from '../../images/Class/c6.png';
import img7 from '../../images/Class/c7.png';
import './style.css';

function Classroom1() {
  return (
    <div>
      <h3>Classroom 1</h3>
      <div className='d-flex  container flex-wrap '>
        <div className='col-sm-6 '>
          <img src={img1} className='img' alt='' />
        </div>
        <div className='col-sm-6 fs-2'>
          STEP 1: Select the appropriate google account
        </div>
      </div>
      <div className='d-flex justify-content-center mt-3'>
        <Link to='/' className='btn btn-primary btn-lg mx-3'>
          Lets go back
        </Link>
        <Link to='/classroom2' className='btn btn-primary btn-lg'>
          Lets go to classroom 2
        </Link>
      </div>
    </div>
  );
}

function Classroom2() {
  return (
    <div>
      <h3>Classroom 2</h3>
      <div className='d-flex  container flex-wrap '>
        <div className='col-sm-6 '>
          <img src={img3} className='img' alt='' />
        </div>
        <div className='col-sm-6 fs-2'>
          STEP 2: Select the option to create/ join a new class as shown in
          image
        </div>
      </div>
      <div className='d-flex justify-content-center mt-3'>
        <Link to='/classroom' className='btn btn-primary btn-lg'>
          Lets go to classroom 1
        </Link>
        <Link to='/classroom3' className='btn btn-primary btn-lg mx-3'>
          Lets go to classroom 3
        </Link>
      </div>
    </div>
  );
}

function Classroom3() {
  return (
    <div>
      <h3>Classroom 3</h3>
      <div className='d-flex  container flex-wrap '>
        <div className='col-sm-6 '>
          <img src={img4} className='img' alt='' />
        </div>
        <div className='col-sm-6 fs-2 '>
          STEP 3: Click on continue and proceed further
        </div>
      </div>
      <div className='d-flex justify-content-center mt-3'>
        <Link to='/classroom2' className='btn btn-primary btn-lg'>
          Lets go to classroom 2
        </Link>
        <Link to='/classroom4' className='btn btn-primary btn-lg mx-3'>
          Lets go to classroom 4
        </Link>
      </div>
    </div>
  );
}

function Classroom4() {
  return (
    <div>
      <h3>Classroom 4</h3>
      <div className='d-flex  container flex-wrap '>
        <div className='col-sm-6 '>
          <img src={img5} className='img' alt='' />
        </div>
        <div className='col-sm-6 fs-2 '>
          <div>
            STEP 4: A details page will display on your screen , fill in te
            required details as per your need and click on Create.
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-center mt-3'>
        <Link to='/classroom3' className='btn btn-primary btn-lg'>
          Lets go to classroom 3
        </Link>
        <Link to='/classroom5' className='btn btn-primary btn-lg mx-3'>
          Lets go to classroom 5
        </Link>
      </div>
    </div>
  );
}

function Classroom5() {
  return (
    <div>
      <h3>Classroom 5</h3>
      <div className='d-flex  container flex-wrap '>
        <div className='col-sm-6 '>
          <img src={img6} className='img' alt='' />
        </div>
        <div className='col-sm-6 fs-2'>
          <div>
            STEP 5: The classroom has been created and now you are ready to post
            assignments / tutorials on this classroom . <br /> NOTE: You are
            currently in the <strong>Stream </strong> section of the your
            classroom .
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-center mt-3'>
        <Link to='/classroom4' className='btn btn-primary btn-lg'>
          Lets go to classroom 4
        </Link>
        <Link to='/classroom6' className='btn btn-primary btn-lg mx-3'>
          Lets go to classroom 6
        </Link>
      </div>
    </div>
  );
}

function Classroom6() {
  return (
    <div>
      <h3>Classroom 6</h3>
      <div className='d-flex  container flex-wrap '>
        <div className='col-sm-6 '>
          <img src={img7} className='img' alt='' />
        </div>
        <div className='col-sm-6 fs-2'>
          <div>
            STEP 6: In order to add assignments / tutorials you can move to the
            <strong> Classwork</strong> section of the classroom .
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-center mt-3'>
        <Link to='/classroom5' className='btn btn-primary btn-lg'>
          Lets go to classroom 5
        </Link>
        <Link to='/classroom' className='btn btn-primary btn-lg mx-3'>
          Lets go to classroom 1
        </Link>
      </div>
    </div>
  );
}

function ClassRoom() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path='/classroom' exact component={Classroom1} />
        <Route path='/classroom2' exact component={Classroom2} />
        <Route path='/classroom3' exact component={Classroom3} />
        <Route path='/classroom4' exact component={Classroom4} />
        <Route path='/classroom5' exact component={Classroom5} />
        <Route path='/classroom6' exact component={Classroom6} />
        {/* <Route path='/classroom3' exact component={Classroom7} /> */}
      </BrowserRouter>
    </React.Fragment>
  );
}

export default ClassRoom;
