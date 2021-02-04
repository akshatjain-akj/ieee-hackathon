import React from 'react';
import './Telegram.css';
import { Slide } from 'react-slideshow-image';
import img1 from "./images/telegram/s1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import img6 from "./images/6.jpg";
import img7 from "./images/7.jpg";
import img8 from "./images/8.jpg";

const Telegram = () => {
    return (
      <div className="content">
        <Slide easing="ease" autoplay={false}>
          <div className="each-slide">
            <img className="image"src={img1} alt="error"/>
            <div className="step">
            <h1>Installing and using Telegram is very easy. Here’s a simple step-by-step guide:</h1>
            <h3>Open google playstore in your android phone</h3>
            <h3>Write "Telegram" in search box</h3>
            <h3>click on install against this telegram icon</h3>
            <h3>Yipee! you have succesfully installed telegram on your device</h3>
            <br/>
            
            </div>
            
          </div>
          <div className="each-slide">
          <img className="image"src={img2}alt="error"/>
          </div>
          <div className="each-slide">
          <img className="image"src={img3}alt="error"/>
          </div>
          <div className="each-slide">
          <img className="image"src={img4}alt="error"/>
          </div>
          <div className="each-slide">
          <img className="image"src={img5}alt="error"/>
          </div>
          <div className="each-slide">
          <img className="image"src={img6}alt="error"/>
          </div>
          <div className="each-slide">
          <img className="image"src={img7}alt="error"/>
          </div>
          <div className="each-slide">
          <img className="image"src={img8}alt="error"/>
          </div>
          
        </Slide>
        
        
      </div>
    )
};

export default Telegram;