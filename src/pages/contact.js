  
import * as React from "react"
import {FaEnvelope} from "react-icons/fa"
import 
{ImLocation,
ImPhoneHangUp
}
from "react-icons/im"

const ContactPage = () => {
    return (
     <div className="container pt-40 mx-auto">
         <center>
             <h1 className="text-3xl" style={{fontFamily:"Poppins"}}>Contact us!</h1>
             <div class="contactline"></div>
             
         </center>
         <br></br>
        
            <div class="grid grid-cols-1 md:grid-cols-2 mb-4 px-40 " style={{paddingTop:"5px"}}>
                 <div class="px-20 contactbox">
                   
                     <p class="text-xl "><span className="env"><ImLocation style={{display:"inline",fontSize:"1.5rem",fill:"white"}}/></span> &nbsp; VIT Vellore</p>
                      <br></br><br></br>
                      <p class="text-xl"><span className="env"><FaEnvelope style={{display:"inline",fontSize:"1.5rem",fill:"white"}}/></span> &nbsp; arcs.register@gmail.com</p>
                      <br></br><br></br>
                      <p class="text-xl"><span className="env"><ImPhoneHangUp style={{display:"inline",fontSize:"1.5rem",fill:"white"}}/></span>&nbsp; 8160XXXXXX</p>
                    
                </div>
  <div >
          <div className="place-self-center">
         <form> 
         <input class="bginput" type="name" placeholder="NAME"></input>
         <br>
        </br>
        
         <input class="bginput " type="email"  placeholder="EMAIL"></input>
         <br></br>
         
        <textarea  class="bginput " placeholder="MESSAGE" rows="4"></textarea>
        <br></br>
        
        <button type="button" className="submitButton" >SUBMIT</button>
         </form>
         </div>
         
        </div>
       
         {/* <div className="grid grid-cols-2 ">
            
        <div>
        
         <h1 class="text-xl">VIT,Vellore</h1>
         <p class="text-xl">arcs.register@gmail.com</p>
         <p>8160860545</p>
        
         </div>
        
       <div className="place-self-center">
         <form> 
         <input class="bginput" type="name" placeholder="NAME"></input>
         <br>
        </br>
        
         <input class="bginput px-4" type="email"  placeholder="EMAIL"></input>
         <br></br>
         
        <textarea  class="bginput px-4" placeholder="MESSAGE" rows="3"></textarea>
        <br></br>
        
        <button type="button" className="submitButton" >SUBMIT</button>
         </form>
         </div>
         
         </div> */}
         </div>
       
     </div>
    )
  }
  
  export default ContactPage