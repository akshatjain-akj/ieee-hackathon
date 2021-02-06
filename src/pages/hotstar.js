import React from 'react';
import './hotstar.css';
import { Slide } from 'react-slideshow-image';
import img1 from "./images/hotstar/s1.png";
import img2 from "./images/hotstar/s2.png";
import img3 from "./images/hotstar/s6.png";
import img4 from "./images/hotstar/s7.png";
import img5 from "./images/hotstar/s3.png";
import img6 from "./images/hotstar/s4.png";
import img7 from "./images/hotstar/s5.png";
import img10 from "./images/telegram/congo.jpg";


const Hotstar = () => {
    return (
      <div className="content">
        <Slide easing="ease" autoplay={false}>
          <div className="each-slide">
            <img className="image"src={img1} alt="error"/>
            <div className="step">
            <h2>Installing and using Hotstar is very easy. Here’s a simple step-by-step guide:</h2>
            <h3>Step 1: Download Hotstar App</h3>
            <ul>  
            <li className="bullet"><h3>Open google playstore in your android phone.</h3></li>  
            <li className="bullet"><h3>Write "Hotstar" in search box.</h3></li> 
            <li className="bullet"><h3>click on install against this hotstar icon.</h3></li> 
           
            </ul>
    <h3>Yipee! you have succesfully installed Hotstar on your device</h3>
            </div>
            
          </div>
          <div className="each-slide">
            <img className="image"src={img2} alt="error"/>
            <div className="step">
       
            <h2>Step 2: Open Hotstar</h2>
            <ul>  
            <li className="bullet"><h3>Choose Your Language</h3></li>  
            <li className="bullet"><h3>You can choose multiple language</h3></li> 
            <li className="bullet"><h3>Click Continue after you made the language selection </h3></li> 
            <li className="bullet"><h3> Tap on Continue</h3></li>
           
           
            </ul>

            
            <h3>Great! you have succesfully logged into the application</h3>
            </div>
            
          </div>
          <div className="each-slide">
            <img className="image"src={img3} alt="error"/>
            <div className="step">
            <h2>Step 3 : Log in with your account</h2>
         
            <ul>  
            <li className="bullet"><h3>Click on the three dots icon on top left corner</h3></li>  
            <li className="bullet"><h3>A navigation bar gets open.</h3></li> 
            <li className="bullet"><h3>Now Click on Login at top of the navigation bar</h3></li> 
            
           
            </ul>

            <h3>Great! You are about to login the app and just few steps before to enjoy online stuffs..</h3>
            </div>
            
          </div>
          <div className="each-slide">
            <img className="image"src={img4} alt="error"/>
            <div className="step">
            <h3>Step 4 : Enter your Login Credentials</h3>
            <h3>Note:If you have already purchased any premium account on hotstar use those credentials.</h3> 
            <ul>  
            <li className="bullet"><h3>Enter your Mobile Number in the given space.</h3></li>  
            <li className="bullet"><h3>Click on Continue..</h3></li> 
            <li className="bullet"><h3>A 6-digit otp will be sent via sms to registered mobile number </h3></li> 
            <li className="bullet"><h3>Once verification is done,it will redirect you to main page.</h3></li>
  
           
            </ul>
           
            
            </div>
            
          </div>
          <div className="each-slide">
            <img className="image"src={img5} alt="error"/>
            <div className="step">
            <h2>Step 5 : Navigating through Online Stuff</h2>
            <ul>  
            <li className="bullet"><h3>At Bottom of the app there are different icons for different sections.</h3></li>  
            <li className="bullet"><h3>Click on the desired section icon</h3></li>  
            <li className="bullet"><h3>It will automatically redirect you to that section.</h3></li> 
            </ul>
            <h3>Cool!Now, You can surf and can watch any desired content</h3>
            
            </div>
            
          </div>
          <div className="each-slide">
            <img className="image"src={img6} alt="error"/>
            <div className="step">
            <h3>Step 6 :Playing first Video on Hotstar</h3>
            <ul>  
            <li className="bullet"><h3>First,search for desired content in the list</h3></li>  
            <li className="bullet"><h3>Then,Click on that video that you want to play .</h3></li> 
            
           
           
            </ul>
            <h3>Grab Your seat belt you are about to watch your first ott content on your device.....</h3>
            
            </div>
            
          </div>
          <div className="each-slide">
            <img className="image"src={img7} alt="error"/>
            <div className="step">
            <h3>Step 7: Play/Pause Video.</h3>
            <ul>  
            <li className="bullet"><h3>After the page gets loaded.</h3></li>  
            <li className="bullet"><h3>Simply press play button...</h3></li> 
            <li className="bullet"><h3>Enjoy!!! the heat of online content</h3></li> 
           
            </ul>
    <h3>Cheers!You have conquered Hotstar app..</h3>
            
            </div>
            
          </div>
          
          <div className="each-slide">
            <img className="image"src={img10} alt="error"/>
            <div className="step">
            <h1 className="congo">Congratulations You DID IT!!!!!</h1>
       
            </div>
            
          </div>
          
          
        </Slide>
        
        
      </div>
    )
};

export default Hotstar;