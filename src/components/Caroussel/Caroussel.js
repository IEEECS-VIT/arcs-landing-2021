import React from "react";
import "./Carousel.style.scss";

function Carousel() {
  return (
    <div className='w-screen border-2 flex flex-col md:flex-row justify-center items-center'>
    <div className='flex flex-col lg:flex-row justify-center items-center'>
      <div>
        <div></div>
        <div className='p-2 m-2'>
          <div className='text-center my-4 font-bold text-xl md:text-2xl lg:text-3xl'>Speaker Name</div>
          <div className='text-center mx-4'>Some Random Description of the speaker Some Random Description of the speaker Some Random Description of the speaker Some Random Description of the speaker</div>
        </div>
      </div>
      
      <div>
        <div></div>
        <div className='p-2 m-2'>
          <div className='text-center my-4 font-bold text-xl md:text-2xl lg:text-3xl'>Speaker Name</div>
          <div className='text-center mx-4'>Some Random Description of the speaker Some Random Description of the speaker Some Random Description of the speaker Some Random Description of the speaker</div>
        </div>
      </div>
      
      <div>
        <div></div>
        <div className='p-2 m-2'>
          <div className='text-center my-4 font-bold text-xl md:text-2xl lg:text-3xl'>Speaker Name</div>
          <div className='text-center mx-4'>Some Random Description of the speaker Some Random Description of the speaker Some Random Description of the speaker Some Random Description of the speaker</div>
        </div>
      </div>
    </div></div>
  )
}

export default Carousel;