import React from "react";
import Navbar from "./../components/navbar";

const timeline = () => {
  return (
    <div className="w-full h-screen  bg-auto overflow-hidden">
      <Navbar arcs={true} />
      <h1 className="font font-semibold text-center  block text-6xl pt-12  italic">
        Timeline
      </h1>
    </div>
  );
};

export default timeline;
