import React from 'react';
import './ludo.css';
import { Slide } from 'react-slideshow-image';
import img1 from "./images/ludo/s1_s.png";
import img2 from "./images/ludo/s1.png";
import img3 from "./images/ludo/s2.png";
import img4 from "./images/ludo/s3.png";
import img5 from "./images/ludo/s4.png";
import img6 from "./images/ludo/s5.png";
import img7 from "./images/ludo/s6.png";

import img10 from "./images/telegram/congo.jpg";


const Ludo = () => {
    return (
      <div className="content">
        <Slide easing="ease" autoplay={false}>
          <div className="each-slide">
            <img className="image"src={img1} alt="error"/>
            <div className="step">
            <h2>Installing and using Ludo King is very easy. Here’s a simple step-by-step guide:</h2>
            <h3>Step 1: Download Ludo King App</h3>
            <ul>  
            <li className="bullet"><h3>Open google playstore in your android phone.</h3></li>  
            <li className="bullet"><h3>Write "LUDO KING" in search box.</h3></li> 
            <li className="bullet"><h3>click on install against this ludo king icon.</h3></li> 
           
            </ul>
    <h3>Yipee! you have succesfully installed telegram on your device</h3>
            </div>
            
          </div>
          <div className="each-slide">
            <img className="image"src={img2} alt="error"/>
            <div className="step">
       
            <h3>Step 2: Open Ludo King</h3>
            <ul>  
            <li className="bullet"><h3>Choose Your Language</h3></li>  
            <li className="bullet"><h3>then Click play as a guest</h3></li> 
            <li className="bullet"><h3> select your country and enter your name</h3></li> 
            <li className="bullet"><h3> Select your profile picture for your game from the list</h3></li> 
            <li className="bullet"><h3> Tap on Continue</h3></li> 
           
           
            </ul>

            
            <h3>Great! you have succesfully logged into the game</h3>
            </div>
            
          </div>
          <div className="each-slide">
            <img className="image"src={img3} alt="error"/>
            <div className="step">
            <h3>Step 3 : Play your first online game</h3>
            <ul>  
            <li className="bullet"><h3>After you logged in,screen would look like this</h3></li>   
            <li className="bullet"><h3>Now tap on Play On Online option</h3></li>  
            <li className="bullet"><h3>choose the type of game you want to play</h3></li> 
            <li className="bullet"><h3>Click Next and then click Play</h3></li> 
            <li className="bullet"><h3>After search of the player is completed,you will be able to play the game</h3></li> 
           
            </ul>

            
            </div>
            
          </div>
          <div className="each-slide">
            <img className="image"src={img4} alt="error"/>
            <div className="step">
            <h3>Step 4 : Telegram may call your phone instead</h3>
            <ul>  
            <li className="bullet"><h3>On fail attempt Telegram make a call containg your verification code.</h3></li>  
            <li className="bullet"><h3>A robotic voice will read out a five-digit code, which you can then enter into the app.</h3></li> 
 
           
            </ul>
            <h3>Great! you have succesfully registered your phone number</h3>
            
            </div>
            
          </div>
          <div className="each-slide">
            <img className="image"src={img5} alt="error"/>
            <div className="step">
            <h2>Step 5 : Steps to Play Ludo King with friends/family</h2>
            <ul>  
            <li className="bullet"><h3>Open Ludo King application on your android phone</h3></li>  
            <li className="bullet"><h3>Tap on Play with friends button</h3></li>  
            <li className="bullet"><h3> Choose the colour</h3></li> 
            </ul>
            <h3>Cool! YOU are on a way to play Ludo online with your friends and families.</h3>
            
            </div>
            
          </div>
          <div className="each-slide">
            <img className="image"src={img6} alt="error"/>
            <div className="step">
            <h3>Step 5 : Enter at least your first name</h3>
            <ul>  
            <li className="bullet"><h3>Enter your first Name (Atleast)</h3></li>  
            <li className="bullet"><h3> You can also add an avatar for more personalization.</h3></li> 
    
           
            </ul>
            <h3>Other users can search for you by your username without needing to know your phone number.</h3>
    <h3>Cool! Great going...</h3>
            
            </div>
            
          </div>
          <div className="each-slide">
            <img className="image"src={img6} alt="error"/>
            <div className="step">
            <h3>Step 6 : Let Telegram access your contacts</h3>
            <h3>Unfortunately, you can't just type in a phone number and start messaging. You'll need to grant Telegram permission to access your contacts before you can message anyone..</h3>
            <ul>  
            
            <li className="bullet"><h3>Click Allow Button.</h3></li>
            </ul>
            </div>
            
          </div>
          <div className="each-slide">
            <img className="image"src={img7} alt="error"/>
            <div className="step">
            <h3>Step 7:Start a Telegram one-on-one chat</h3>
            <ul>  
            <li className="bullet"><h3>Click on the new message button (the pencil)</h3></li>  
            <li className="bullet"><h3>select a contact </h3></li> 
            <li className="bullet"><h3>start writing (send your first message "hi").</h3></li> 
           
            </ul>
    <h3>Cheers!You have sent your first message on telegram</h3>
            
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

export default Ludo;