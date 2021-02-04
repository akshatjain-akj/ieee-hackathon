import React from 'react';
import './Telegram.css';
import { Slide } from 'react-slideshow-image';
import img1 from "./images/telegram/s1.jpg";
import img2 from "./images/telegram/s2.jpg";
import img3 from "./images/telegram/s3.jpg";
import img4 from "./images/telegram/s4.jpg";
import img5 from "./images/telegram/s5.jpg";
import img6 from "./images/telegram/s6_e.jpg";
import img7 from "./images/telegram/s7_a.jpg";
import img8 from "./images/telegram/s8_a.jpg";
import img9 from "./images/telegram/s8.jpg";
import img10 from "./images/telegram/congo.jpg";


const Telegram = () => {
    return (
      <div className="content">
        <Slide easing="ease" autoplay={false}>
          <div className="each-slide">
            <img className="image"src={img1} alt="error"/>
            <div className="step">
            <h2>Installing and using Telegram is very easy. Here’s a simple step-by-step guide:</h2>
            <h3>Step 1: Download Telegram App</h3>
            <ul>  
            <li className="bullet"><h3>Open google playstore in your android phone.</h3></li>  
            <li className="bullet"><h3>Write "Telegram" in search box.</h3></li> 
            <li className="bullet"><h3>click on install against this telegram icon.</h3></li> 
           
            </ul>
    <h3>Yipee! you have succesfully installed telegram on your device</h3>
            </div>
            
          </div>
          <div className="each-slide">
            <img className="image"src={img2} alt="error"/>
            <div className="step">
       
            <h3>Step 2 : Register your phone number</h3>
            <ul>  
            <li className="bullet"><h3>Type your Phone number.</h3></li>  
            <li className="bullet"><h3>Immediately after you do this, Telegram will send your phone an SMS text message containing a code for number verification.</h3></li> 
            <li className="bullet"><h3>If you don't enter the verification code within three minutes, Telegram will call your phone.</h3></li> 
           
            </ul>

            
            
            </div>
            
          </div>
          <div className="each-slide">
            <img className="image"src={img3} alt="error"/>
            <div className="step">
            <h3>Step 3 : Enter the SMS verification code</h3>
            <ul>  
            <li className="bullet"><h3>The Telegram app will have a field into which you input the SMS verification code.</h3></li>  
            <li className="bullet"><h3>Enter the code from SMS carefully</h3></li> 
            <li className="bullet"><h3>After succesfull attempt it will automatically redirect to main UI</h3></li> 
           
            </ul>
    <h3>Great! you have succesfully registered your phone number</h3>
            
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
            <img className="image"src={img8} alt="error"/>
            <div className="step">
            <h3>Step 8 : Start a Telegram group conversation</h3>
            <h4>You can also create a new group conversation</h4>
            <ul>  
            <li className="bullet"><h3> click on New Group </h3></li>  
            <li className="bullet"><h3>select multiple contacts from your contact list..</h3></li> 
             
           
            </ul>
            <h4>Groups can contain up to 20,000 members, but they cannot be end-to-end encrypted</h4>

            
            </div>
            
          </div>
          <div className="each-slide">
            <img className="image"src={img9} alt="error"/>
            <div className="step">
            <h3>Step 9 : Start a Telegram voice or video call</h3>
            <h4>Like WhatsApp, Telegram lets you make voice and video calls.</h4>
            <ul>  
            <li className="bullet"><h4>Go to the "hamburger"  menu on the top left,tap Contacts and select someone from your contact list.</h4></li>  

            <li className="bullet"><h4>Tap that contact, then tap the three vertical dots on the top of the resulting screen and select either Call or Video Call.</h4></li> 
            <li className="bullet"><h4>Tap allow to give permission for camera and microphone</h4></li> 
            </ul>
       
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

export default Telegram;