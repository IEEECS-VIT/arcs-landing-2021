import React from "react"

import "../../Modal.scss";

const Modal = ({show,caption,handleClose}) => {
   
  const main = show ? " modal display-block" : "modal display-none";

  return (
    <div className={main}>
      <div className="modal-main ">
      <div className="text-sm">{caption}
      </div>
        <button className="closebtn w-10 h-10 text-sm "onClick={handleClose} >
          Close
        </button>
      </div>
    </div>
  );
};
export default Modal;