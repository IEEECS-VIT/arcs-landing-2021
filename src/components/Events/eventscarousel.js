// import React,{Component} from "react"
// import cyber from '../../images/event1.png'
// import './carousel'
//  import M from "materialize-css";
// // import 'materialize-css/dist/js/materialize.js'
//  import 'materialize-css/dist/css/materialize.css'
//  import { IoChevronBackCircleSharp} from "react-icons/io5";








// const Event = () => {
//     return (
//         <div>
//             <center>
//         <div className="flex mt-4 p-4">
//         <div className="w-1/3 scale">
//         <div className="rec">
//             <center>
//             <div className="innerrec">
//             <h1 className="eventhead">CYBER SECURITY</h1>
//                 <img src={cyber} className="eventimg pt-8"></img>
                
//             </div>
//             </center>
//              </div>
//              </div>

//              <div className="w-1/3">
//         <div className="rec">
//             <center>
//             <div className="innerrecmiddle">
//                 <h1 className="eventhead">CYBER SECURITY</h1>
//                 <img src={cyber} className="eventimg"></img>
                
//             </div>
//             </center>
//             <br></br>
//             <button type="button" className="knowmore ">know more</button>
//              </div>
//              </div>
 
//              <div className="w-1/3 scale">
//         <div className="rec">
//             <center>
//             <div className="innerrec">
//             <h1 className="eventhead">CYBER SECURITY</h1>
//                 <img src={cyber} className="eventimg pt-8"></img>
//             </div>
//             </center>
//              </div>
//              </div>
             
//         </div>
//         </center>
//         </div>
//     )
//   }
 
//   export default Event


// class Event extends Component {
//   componentDidMount() {
//     const options = {
//       duration: 300,
//       numVisible:3,
//       shift:230
//     };
//     M.Carousel.init(this.Carousel, options);
    
//     console.log(this.Carousel.childNodes[0].childNodes)
   
  
    
    
    
  
  

// }

//   render() {
  
//       function left() {
        
//         var instances = M.Carousel.init(this.Carousel);
        
//           instances.prev();
//       }
  
//     return (
//       <div
//         ref={Carousel => {
//           this.Carousel = Carousel;
//         }}
//         className="carousel" >
//           <span className="float-left p-40 pt-100 text-5xl" ><IoChevronBackCircleSharp id="x" onClick={left()}/></span>
//         <div className="carousel-item">
//           <div className="cardbox">
//           <p className="eventhead">CYBER SECURITY</p>
//                <img src={cyber} className="pt-5"></img>
//           </div>
//         </div>

//         <div className="carousel-item">
//           <div className="cardbox">
//           <p className="eventhead">CYBER SECURITY</p>
//                 <img src={cyber} className=" pt-5"></img>
//           </div>
//         </div>

//         <div className="carousel-item">
//           <div className="cardbox">
//           <p className="eventhead">CYBER SECURITY</p>              
//            <img src={cyber} className="pt-5"></img>
//           </div>
//         </div>
       
       
//       </div>
//     );
//   }
//   }

// export default Event;
