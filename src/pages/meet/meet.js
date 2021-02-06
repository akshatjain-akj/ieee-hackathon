import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import img1 from '../images/meet/m1.png';
import img2 from '../images/meet/m2.png';
import img3 from '../images/meet/m3.png';
import img4 from '../images/meet/m4.png';
import img5 from '../images/meet/m5.png';
import img6 from '../images/meet/m6.png';
import img7 from '../images/meet/m7.png';
import img8 from '../images/meet/m8.png';
import img9 from '../images/meet/m9.png';
import img10 from '../images/meet/m10.png';
import congo from '../images/meet/congo.jpg';
// import './style.css';

function Meet1() {
  return (
    <div>
      <h3>Meet 1</h3>
      <div className='d-flex  container flex-wrap '>
        <div className='col-md-6 '>
          <img src={img1} className='img' alt='' />
        </div>
        <div className='col-md-6 fs-2'>
          STEP 1: Go to google and type the text as shown
        </div>
      </div>
      <div className='d-flex justify-content-center mt-3'>
        <Link to='/' className='btn btn-primary btn-lg mx-3'>
          Lets go back
        </Link>
        <Link to='/meet2' className='btn btn-primary btn-lg'>
          Lets go to meet 2
        </Link>
      </div>
    </div>
  );
}

function Meet2() {
  return (
    <div>
      <h3>Meet 2</h3>
      <div className='d-flex  container flex-wrap '>
        <div className='col-md-6 '>
          <img src={img2} className='img' alt='' />
        </div>
        <div className='col-md-6 fs-3'>
          STEP 2: Select the option to create/ join a new class as shown in
          image
          <ul>
            <li> you can check which account are you currently using </li>
            <li> you can now either create a meeting / join one </li>
            <li>
              for creating a meeting you have to click to
              <strong> New meeting </strong>
            </li>
            <li>
              for join a meeting you have to enter the meet code in the
              <strong> Enter a code/link </strong> input
            </li>
          </ul>
        </div>
      </div>
      <div className='d-flex justify-content-center mt-3'>
        <Link to='/meet' className='btn btn-primary btn-lg'>
          Lets go to meet 1
        </Link>
        <Link to='/meet21' className='btn btn-primary btn-lg mx-3'>
          Lets go to next meet
        </Link>
      </div>
    </div>
  );
}

function Meet21() {
  return (
    <div>
      <h3>Meet 2</h3>
      <div className='d-flex  container flex-wrap '>
        <div className='col-md-6 '>
          <img src={img3} className='img' alt='' />
        </div>
        <div className='col-md-6 fs-3'>
          STEP 2.1: Select the option as per your need
          <ul>
            <li> you can do either of three as shown in the image </li>
          </ul>
        </div>
      </div>
      <div className='d-flex justify-content-center mt-3'>
        <Link to='/meet2' className='btn btn-primary btn-lg'>
          Lets go to meet 2
        </Link>
        <Link to='/meet3' className='btn btn-primary btn-lg mx-3'>
          Lets go to meet 3
        </Link>
      </div>
    </div>
  );
}

function Meet3() {
  return (
    <div>
      <h3>Meet 3</h3>
      <div className='d-flex  container flex-wrap '>
        <div className='col-md-6 '>
          <img src={img4} className='img' alt='' />
        </div>
        <div className='col-md-6 fs-2 '>
          STEP 3: On clicking the{' '}
          <strong>
            Start an instant meeting you will be directed to this page{' '}
          </strong>
          <ul>
            <li>
              Now you can send the meet link to the attendees via email /
              whatsapp or other platforms
            </li>
            <li>
              You can add people by clicking on the <strong>Add</strong> button
            </li>
          </ul>
        </div>
      </div>
      <div className='d-flex justify-content-center mt-3'>
        <Link to='/meet2' className='btn btn-primary btn-lg'>
          Lets go to meet 2
        </Link>
        <Link to='/meet4' className='btn btn-primary btn-lg mx-3'>
          Lets go to meet 4
        </Link>
      </div>
    </div>
  );
}

function Meet4() {
  return (
    <div>
      <h3>Meet 4</h3>
      <div className='d-flex  container flex-wrap '>
        <div className='col-md-6 '>
          <img src={img5} className='img' alt='' />
        </div>
        <div className='col-md-6 fs-2 '>
          <div>
            STEP 4: On clicking the <strong> Add </strong> button, you can add /
            invite people by writing their email onto the input area
            <ul></ul>
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-center mt-3'>
        <Link to='/meet3' className='btn btn-primary btn-lg'>
          Lets go to meet 3
        </Link>
        <Link to='/meet41' className='btn btn-primary btn-lg mx-3'>
          Lets go to meet 5
        </Link>
      </div>
    </div>
  );
}

function Meet41() {
  return (
    <div>
      <h3>Meet 4.1</h3>
      <div className='d-flex  container flex-wrap '>
        <div className='col-md-6 '>
          <img src={img4} className='img' alt='' />
        </div>
        <div className='col-md-6 fs-2 '>
          <div>
            STEP 4.1: On clicking the <strong> icon no. 3 </strong>
            you wil be able see and write to the attendees.
            {/* <ul>

            </ul> */}
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-center mt-3'>
        <Link to='/meet4' className='btn btn-primary btn-lg'>
          Lets go to meet 3
        </Link>
        <Link to='/meet5' className='btn btn-primary btn-lg mx-3'>
          Lets go to meet 5
        </Link>
      </div>
    </div>
  );
}

function Meet5() {
  return (
    <div>
      <h3>Meet 5</h3>
      <div className='d-flex  container flex-wrap '>
        <div className='col-md-6 '>
          <img src={img6} className='img' alt='' />
        </div>
        <div className='col-md-6 fs-2'>
          <div>
            STEP 5: On clicking the icon now you can write / make an
            announcement to all the member in the chat section
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-center mt-3'>
        <Link to='/meet41' className='btn btn-primary btn-lg'>
          Lets go to meet 4
        </Link>
        <Link to='/meet6' className='btn btn-primary btn-lg mx-3'>
          Lets go to meet 6
        </Link>
      </div>
    </div>
  );
}

function Meet6() {
  return (
    <div>
      <h3>Meet 6</h3>
      <div className='d-flex  container flex-wrap '>
        <div className='col-md-6 '>
          <img src={img7} className='img' alt='' />
        </div>
        <div className='col-md-6 fs-2'>
          <div>
            STEP 6: In the <strong>People</strong> section you can see the list
            of members those who are attending the meeting.
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-center mt-3'>
        <Link to='/meet5' className='btn btn-primary btn-lg'>
          Lets go to meet 5
        </Link>
        <Link to='/meet7' className='btn btn-primary btn-lg mx-3'>
          Lets go to meet 7
        </Link>
      </div>
    </div>
  );
}

function Meet7() {
  return (
    <div>
      <h3>Meet 7</h3>
      <div className='d-flex  container flex-wrap '>
        <div className='col-md-6 '>
          <img src={img8} className='img' alt='' />
        </div>
        <div className='col-md-6 fs-2'>
          <div>
            STEP 7: With the help of the mute button you can mute and unmute
            yourself inorder to communicate with the attendees.
          </div>
          <ul>
            <li>
              Similarly the camera icon will let you show and hide the object
              you are displaying from your camera to the attendees .
            </li>
          </ul>
        </div>
      </div>
      <div className='d-flex justify-content-center mt-3'>
        <Link to='/meet6' className='btn btn-primary btn-lg'>
          Lets go to meet 6
        </Link>
        <Link to='/meet8' className='btn btn-primary btn-lg mx-3'>
          Lets go to meet 8
        </Link>
      </div>
    </div>
  );
}

function Meet8() {
  return (
    <div>
      <h3>Meet 8</h3>
      <div className='d-flex  container flex-wrap '>
        <div className='col-md-6 '>
          <img src={img9} className='img' alt='' />
        </div>
        <div className='col-md-6 fs-2'>
          <div>
            STEP 8:On clicking the <strong> Share your screen </strong> button
            you will be directed to the shown page and finally to Present your
            screen you have to click the share button.
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-center mt-3'>
        <Link to='/meet7' className='btn btn-primary btn-lg'>
          Lets go to meet 7
        </Link>
        <Link to='/meet9' className='btn btn-primary btn-lg mx-3'>
          Lets go to meet 9
        </Link>
      </div>
    </div>
  );
}

function Meet9() {
  return (
    <div>
      <h3>Classroom 9</h3>
      <div className='d-flex  container flex-wrap '>
        <div className='col-md-6 '>
          <img src={img10} className='img' alt='' />
        </div>
        <div className='col-md-6 fs-2'>
          <div>
            STEP 8: The <strong> Present Now </strong> section will let your
            attendees see the laptop/device screen and the work which you want
            to show from your laptop/device.
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-center mt-3'>
        <Link to='/meet8' className='btn btn-primary btn-lg'>
          Lets go to meet 8
        </Link>
        <Link to='/meet10' className='btn btn-primary btn-lg mx-3'>
          Lets go to meet 10
        </Link>
      </div>
    </div>
  );
}

function Meet10() {
  return (
    <div>
      <h2 className='display-4'> Congratulations you did it ! </h2>
      <img src={congo} alt='' />
      <div className='d-flex justify-content-center mt-3'>
        <Link to='/meet9' className='btn btn-primary btn-lg'>
          Lets go to meet 9
        </Link>
        <Link to='/meet' className='btn btn-primary btn-lg mx-3'>
          Lets go to meet 1
        </Link>
      </div>
    </div>
  );
}

function ClassRoom() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path='/meet' exact component={Meet1} />
        <Route path='/meet2' exact component={Meet2} />
        <Route path='/meet21' exact component={Meet21} />
        <Route path='/meet3' exact component={Meet3} />
        <Route path='/meet4' exact component={Meet4} />
        <Route path='/meet41' exact component={Meet41} />
        <Route path='/meet5' exact component={Meet5} />
        <Route path='/meet6' exact component={Meet6} />
        <Route path='/meet7' exact component={Meet7} />
        <Route path='/meet8' exact component={Meet8} />
        <Route path='/meet9' exact component={Meet9} />
        <Route path='/meet10' exact component={Meet10} />

        {/* <Route path='/classroom3' exact component={Classroom7} /> */}
      </BrowserRouter>
    </React.Fragment>
  );
}

export default ClassRoom;
