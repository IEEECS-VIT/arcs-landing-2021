import React from "react"

import "../../Modal.scss";

const Modal = ({show,handleClose}) => {
   
  const main = show ? " display-block" : "display-none";

  return (
    <div className={main}>
      <div className="modal-main">

        <button className="closebtn "onClick={handleClose} >
          <p>Close</p>
        </button>
      </div>
    </div>
  );
};
export default Modal;