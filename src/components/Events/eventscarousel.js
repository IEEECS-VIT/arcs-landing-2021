import * as React from "react"
import cyber from '../../images/event1.png'

const Event = () => {
    return (
        <div>
            <center>
        <div className="flex mt-4 p-4">
        <div className="w-1/3 scale">
        <div className="rec">
            <center>
            <div className="innerrec">
            <h1 className="eventhead">CYBER SECURITY</h1>
                <img src={cyber} className="eventimg pt-8"></img>
                
            </div>
            </center>
             </div>
             </div>

             <div className="w-1/3">
        <div className="rec">
            <center>
            <div className="innerrecmiddle">
                <h1 className="eventhead">CYBER SECURITY</h1>
                <img src={cyber} className="eventimg"></img>
                
            </div>
            </center>
            <br></br>
            <button type="button" className="knowmore ">know more</button>
             </div>
             </div>
 
             <div className="w-1/3 scale">
        <div className="rec">
            <center>
            <div className="innerrec">
            <h1 className="eventhead">CYBER SECURITY</h1>
                <img src={cyber} className="eventimg pt-8"></img>
            </div>
            </center>
             </div>
             </div>
             
        </div>
        </center>
        </div>
    )
  }
  
  export default Event