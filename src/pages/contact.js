import * as React from "react"

const ContactPage = () => {
    return (
     <div className="container mx-auto">
         <center>
             <h1 className="text-3xl" style={{fontFamily:"Poppins"}}>Contact us!</h1>
             <div class="contactline"></div>
             
         </center>
         <br></br>
        
            <div class="flex mb-4 px-40" style={{paddingTop:"5px"}}>
                 <div class="w-1/2 px-40 md:w-1/2 contactbox">
                   
                      <h1 class="text-xl">VIT Vellore</h1>
                      <br></br><br></br>
                      <h1 class="text-xl">arcs.register@gmail.com</h1>
                      <br></br><br></br>
                      <h1 class="text-xl">8160XXXXXX</h1>
                    
                </div>
  <div class="w-1/2 md:w-1/2">
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