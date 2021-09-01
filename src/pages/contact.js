  
import * as React from "react"
import {FaEnvelope} from "react-icons/fa"
import 
{ImLocation,
ImPhoneHangUp
}
from "react-icons/im"

const ContactPage = () => {
    return (
     <div className="container mt-40 mx-auto">
         <center>
             <h1 className="text-3xl" style={{fontFamily:"Poppins"}}>Contact us!</h1>
             <div className="contactline md:visible invisible"></div>
             
         </center>
         <br></br> 
        
            <div className="grid grid-cols-1 md:grid-cols-2 md:mb-4 md:px-40" style={{paddingTop:"5px"}}>
                 <div className="xl:px-20 md:px-5 md:order-first order-last pr-0 pl-10 mb-8 contactbox">
                   
                     <p className="text-xl "><span className="env "><ImLocation  style={{display:"inline",fontSize:"1.5rem",fill:"white"}}/></span> &nbsp; VIT Vellore</p>
                      <br></br><br></br> 
                      <p className="text-xl -ml-2"><span className="env "><FaEnvelope  style={{display:"inline",fontSize:"1.5rem",fill:"white"}}/></span> &nbsp; arcs.register@gmail.com</p>
                      <br></br><br></br>
                      <p className="text-xl"><span className="env"><ImPhoneHangUp  style={{display:"inline",fontSize:"1.5rem",fill:"white"}}/></span>&nbsp; 8160XXXXXX</p>
                    
                </div>
  
          <div className="place-self-center ">
         <form> 
         <input className="flex justify-center bginput bg-gray-100 rounded p-4 md:w-96 md:mx-auto md:leading-4 text-gray-400 w-80  leading-3 " type="name" placeholder="NAME"></input>
         <br>
        </br>
        
         <input className=" flex justify-center bginput bg-gray-100 rounded p-4 md:w-96 md:mx-auto md:leading-4 text-gray-400 w-80  leading-3 " type="email"  placeholder="EMAIL"></input>
         <br></br>
         
        <textarea  className=" flex justify-center bginput bg-gray-100 rounded p-4 md:w-96 md:mx-auto md:leading-4 text-gray-400 w-80  leading-3 " placeholder="MESSAGE" rows="4"></textarea>
        <br></br>
        
        <button type="button" className="submitButton relative leading-3 mx-0 my-0 h-10 md:w-96 rounded-3xl text-center w-80" >SUBMIT</button>
         </form>
         </div>
         
        </div>
       
      
         </div>
       
   
    )
  }
  
  export default ContactPage