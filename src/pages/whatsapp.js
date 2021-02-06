import React from 'react';
import './whatsapp.css';
import { Slide } from 'react-slideshow-image';
import img1 from "./images/whatsapp/s2.png";
import img2 from "./images/whatsapp/s3.png";
import img3 from "./images/whatsapp/s4.png";
import img4 from "./images/whatsapp/s5.png";
import img5 from "./images/whatsapp/s6.png";
import img6 from "./images/whatsapp/s7.png";
import img8 from "./images/whatsapp/s10.png";
import img9 from "./images/whatsapp/s11.png";
import img7 from "./images/whatsapp/s12.png";
import img10 from "./images/telegram/congo.jpg";


const Whatsapp = () => {
    return (
      <div className="content">
        <Slide easing="ease" autoplay={false}>
          <div className="each-slide">
            <img className="image"src={img1} alt="error"/>
            <div className="step">
            <h2>Installing and using Whatsapp is very easy. Here’s a simple step-by-step guide:</h2>
            <h3>Step 1: Download Whatsapp App</h3>
            <ul>  
            <li className="bullet"><h3>Open google playstore in your android phone.</h3></li>  
            <li className="bullet"><h3>Write "Whatsapp" in search box.</h3></li> 
            <li className="bullet"><h3>click on install against this whatsapp icon.</h3></li> 
           
            </ul>
    <h3>Yipee! you have succesfully installed Whatsapp on your device</h3>
            </div>
            
          </div>
          <div className="each-slide">
            <img className="image"src={img2} alt="error"/>
            <div className="step">
       
            <h2>Step 2 :Accept Terms and conditions</h2>
            <h3>You have to accept the terms and conditions in order to seamlessly use whatsapp on your android phone</h3>
            <h2>For this you have to :</h2>
            <ul>  
            <li className="bullet"><h3>Click on Accept and Continue option visible on screen</h3></li>  
           
            </ul>

            <h3>YAY! you are on right way. keep going ahead.</h3>
            
            </div>
            
          </div>
          <div className="each-slide">
            <img className="image"src={img3} alt="error"/>
            <div className="step">
            <h3>Step 3 :Verify Your Phone Number</h3>
            <ul>  
            <li className="bullet"><h3>Input your mobile number </h3></li>  
            <li className="bullet"><h3>Tap ‘Next’</h3></li> 
            <li className="bullet"><h3>Tap on Verify and continue</h3></li> 
            <li className="bullet"><h3>You will recieve a 6-digit code via sms on your Number.</h3></li> 
            <li className="bullet"><h3>Whatsapp will directly verify it. If failed simply type the code.</h3></li> 
           
            </ul>
    <h3>Great! you have succesfully registered your phone number</h3>
            
            </div>
            
          </div>
          <div className="each-slide">
            <img className="image"src={img4} alt="error"/>
            <div className="step">
            <h3>Step 4 : Adding Your Name and Profile picture </h3>
            <ul>  
            <li className="bullet"><h3> Type in the name you would like to use on your whatsapp profile</h3></li>  
            <li className="bullet"><h3>You can also add a photo if you want by tapping on the icon of a camera.</h3></li> 
            <li className="bullet"><h3>after tapping,just select your desired image from your device.</h3></li> 
           
            </ul>
            <h3>Great! You have succesfully registered yourself on whatsapp.</h3>
            
            </div>
            
          </div>
          <div className="each-slide">
            <img className="image"src={img5} alt="error"/>
            <div className="step">
            <h2>Step 5 :Initiate First Whatsapp Chat</h2>
            <h3>There are three tabs on top where recent whatsapp chat,status and whatsapp call logs are displayed.</h3>
            <ul>  
             
            <li className="bullet"><h3>For using whatsapp chat..</h3></li> 
            <li className="bullet"><h3>Tap on the message icon on bottom-right corner </h3></li> 
            <li className="bullet"><h3>From List of Contacts displayed, select the person whom you want to chat with.</h3></li> 
    
           
            </ul>
            
            <h3>Cool! Great going...</h3>
            
            </div>
            
          </div>
          <div className="each-slide">
            <img className="image"src={img6} alt="error"/>
            <div className="step">
            <h3>Step 6 :Sending Your First Message</h3>
            <h4>Grab Your Seat Belt we are about to send first message.</h4>
            <ul>  
            
            <li className="bullet"><h3>Tap on Type a message in bottom-left corner</h3></li>
            <li className="bullet"><h3>Device Keyboard will open up</h3></li>
            <li className="bullet"><h3>Type your message </h3></li>
            <li className="bullet"><h3>Click on send button </h3></li>
            </ul>
            <h3>Cheers!You have sent your first message on Whatsapp</h3>
            </div>
        
          </div>
          <div className="each-slide">
            <img className="image"src={img9} alt="error"/>
            <div className="step">
            <h3>Step 7:Send images, live location, documents, payements</h3>
            <ul>  
            <li className="bullet"><h3>Click on the attachement icon (like a pin)</h3></li>  
            <li className="bullet"><h3>select the icon you want to send like image icon in order to send images..</h3></li> 
            <li className="bullet"><h3>Toggle through your device to send required stuff and then click send button</h3></li> 
           
            </ul>
            </div>
            </div>
            <div className="each-slide">
            <img className="image"src={img7} alt="error"/>
            <div className="step">
            <h3>Step 8:Send emoji,stickers,gifs</h3>
            <ul>  
            <li className="bullet"><h3>Click on the smiling face icon</h3></li>  
            <li className="bullet"><h3>By default emoji section gets open up.</h3></li> 
            <li className="bullet"><h3>if you want to send emoji select through the list of emojis and press send button</h3></li>
            <li className="bullet"><h3>To send stickers and gif,select the icons present at the bottom-center.</h3></li>
            <li className="bullet"><h3>search through the list and press send button.</h3></li>  
           
            </ul>
   
            
            </div>
            
          </div>
          <div className="each-slide">
            <img className="image"src={img8} alt="error"/>
            <div className="step">
            <h3>Step 9 : Initiate your first Whatsapp call</h3>
            <ul>  
            <li className="bullet"><h3>Open the Whatsapp Chat for the person whom you want a call with.</h3></li> 
            <li className="bullet"><h3>Click on the video camera icon for video call or Call icon for normal call over internet</h3></li>  
            <li className="bullet"><h3>After Tappingon the respective icon a whatsapp Call will be initiated. ENJOY!!!</h3></li> 
             
           
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

export default Whatsapp;