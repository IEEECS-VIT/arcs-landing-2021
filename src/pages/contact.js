  
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
             <div className="contactline"></div>
             
         </center>
         <br></br>
        
            <div className="grid grid-cols-1 md:grid-cols-2 mb-4 px-40 " style={{paddingTop:"5px"}}>
                 <div className="px-20 contactbox">
                   
                     <p className="text-xl "><span className="env"><ImLocation style={{display:"inline",fontSize:"1.5rem",fill:"white"}}/></span> &nbsp; VIT Vellore</p>
                      <br></br><br></br>
                      <p className="text-xl"><span className="env"><FaEnvelope style={{display:"inline",fontSize:"1.5rem",fill:"white"}}/></span> &nbsp; arcs.register@gmail.com</p>
                      <br></br><br></br>
                      <p className="text-xl"><span className="env"><ImPhoneHangUp style={{display:"inline",fontSize:"1.5rem",fill:"white"}}/></span>&nbsp; 8160XXXXXX</p>
                    
                </div>
  <div >
          <div className="place-self-center box">
         <form> 
         <input className="bginput" type="name" placeholder="NAME"></input>
         <br>
        </br>
        
         <input className="bginput " type="email"  placeholder="EMAIL"></input>
         <br></br>
         
        <textarea  className="bginput " placeholder="MESSAGE" rows="4"></textarea>
        <br></br>
        
        <button type="button" className="submitButton" >SUBMIT</button>
         </form>
         </div>
         
        </div>
       
      
         </div>
       
     </div>
    )
  }
  
  export default ContactPage