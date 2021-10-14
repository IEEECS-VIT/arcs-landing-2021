import React from "react"

import "../../Modal.scss";

const Modal = ({show,title,caption,handleClose}) => {
   
  const main = show ? " modal display-block" : "modal display-none";

  return (
    <div className={main}>
   <div className="modal-outer w-80 md:w-96">
      <div className="modal-main grid grid-cols-1 divide-y divide-black-500  ">
        <div className="modal-header ">
          <p className="text-lg title">{title}</p>
        </div>
        <div className="modal-body">
      <div className="text-base text-left">{caption}
      </div>
      </div>
      <div className="modal-footer">
        <button className="closebtn text-lg" onClick={handleClose} >
          Close
        </button>
        </div>
      </div>
      </div>
    </div>
  );
};
export default Modal;