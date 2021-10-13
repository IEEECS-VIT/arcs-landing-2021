import React from "react"

import "../../Modal.scss";

const Modal = ({show,caption,handleClose}) => {
   
  const main = show ? " display-block" : "display-none";

  return (
    <div className={main}>
      <div className="modal-main top-0 left-10 w-72 h-72">
      <div className="text-sm">{caption}
     <button className="closebtn w-10 h-10 text-sm "onClick={handleClose} >
          Close
        </button>
      
      </div>
        
      </div>
    </div>
  );
};
export default Modal;