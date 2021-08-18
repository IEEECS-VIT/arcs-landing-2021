import React from "react";

const Rectangle = () => {
  return (
    <div>
      <div className="absolute top-32 lg:top-36 w-10 h-10  bg-pink"></div>
      <div className="absolute right-0 top-44 lg:top-36 w-10 h-10 bg-pink"></div>
      <div className="absolute right-5 bottom-0 w-8 h-14 bg-pink"></div>
      <div className="absolute left-5 bottom-0 w-8 h-14 bg-pink"></div>
    </div>
  );
};

export default Rectangle;
