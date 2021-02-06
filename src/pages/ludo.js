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
import img8 from "./images/ludo/s7.png";
import img9 from "./images/ludo/s8.png";

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
    <h3>Yipee! you have succesfully installed Ludo King on your device</h3>
            </div>
            
          </div>
          <div className="each-slide">
            <img className="image"src={img8} alt="error"/>
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
            <img className="image"src={img9} alt="error"/>
            <div className="step">
            <h3>Step 4 : Play Your First Game</h3>
            <ul>  
            <li className="bullet"><h3>After Search for the player is completed.</h3></li>  
            <li className="bullet"><h3>You will be redirected to the main game page where you can compete against online players.</h3></li> 
            <li className="bullet"><h3>On your Turn The Dice will blink</h3></li> 
            <li className="bullet"><h3>click on the Dice</h3></li>
            <li className="bullet"><h3>Now click on the token you want to move.</h3></li>  
           
            </ul>
            <h4>Great! you have succesfully played your first game</h4>
            
            </div>
            
          </div>
          <div className="each-slide">
            <img className="image"src={img5} alt="error"/>
            <div className="step">
            <h2>Step 5 : Steps to Play Ludo King with friends/family</h2>
            <ul>  
            <li className="bullet"><h3>Open Ludo King application on your android phone</h3></li>  
            <li className="bullet"><h3>Tap on Play with friends button</h3></li>  
            <li className="bullet"><h3> Choose the colour for your token</h3></li> 
            </ul>
            <h3>Cool! YOU are on a way to play Ludo online with your friends and families.</h3>
            
            </div>
            
          </div>
          <div className="each-slide">
            <img className="image"src={img6} alt="error"/>
            <div className="step">
            <h3>Step 5 : CreateThe Game</h3>
            <ul>  
            <li className="bullet"><h3>Click Create for creating a game.</h3></li>  
            <li className="bullet"><h3>After Selecting Create click on the type of game and then press create room.</h3></li> 
            <li className="bullet"><h3>On the top You will get a code which you can send to your friend/family</h3></li>
            <li className="bullet"><h3>After adding participants,click Play.</h3></li>  
           
            </ul>
        
            
            </div>
            
          </div>
          <div className="each-slide">
            <img className="image"src={img7} alt="error"/>
            <div className="step">
            <h3>Step 6: Join a game room.</h3>
            <ul>  
            <li className="bullet"><h3>After selecting colour for your token,click on Join Button</h3></li>  
            <li className="bullet"><h3>Type the code shared to you to join the game</h3></li> 
            <li className="bullet"><h3>Click On Join room</h3></li> 
            <li className="bullet"><h3>Enjoy!!!.</h3></li> 
           
            </ul>
    <h3>Cheers!You have Joined with your friends/family</h3>
            
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