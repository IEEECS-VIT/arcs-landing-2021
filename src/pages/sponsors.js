import React from 'react'

import image from '../images/sponsors/sponsors_ball.png'
//import combo from '../images/sponsors/combo2.png'

import devf from '../images/sponsors/devfo.png'
import gfg from '../images/sponsors/gfg.png'
import jetb from '../images/sponsors/jetb.png'
import balsa from '../images/sponsors/balsamiq.png'
import matic from '../images/sponsors/matic.png'
import portis from '../images/sponsors/portis.png'

import topleft from '../images/sponsors/topleft.png'
import topright from '../images/sponsors/topright.png'
import bottomleft from '../images/sponsors/leftbottom.png'
import bottomright1 from '../images/sponsors/rightbottom1.png'
import bottomright2 from '../images/sponsors/rightbottom2.png'

export default function sponsors() {
    return (
        <div className="mt-12">
        <div className="overflow-x-hidden object-fill">
            <div className="z-10 mt-4 sm:mt-10">
                {/* <div className="w-full flex justify-center">
                    <div className="flex">
                    <img className="object-scale-down w-44 sm:w-52 md:w-64 lg:w-80 xl:w-96 h-24" src={combo} alt="lines"/> 
                    <p className="text-center text-4xl absolute sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl ml-8 sm:ml-8 mt-4 md:ml-12 md:mt-0 lg:ml-16 xl:ml-24 mb-10">
                        Sponsors
                    </p>
                    </div>
                </div>  */}

                    <div className="z-40 w-full flex justify-center">
                    <p className=" text-center text-4xl absolute sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl">
                        Sponsors
                    </p>
                    </div>
               

                <div className="z-10  group float-left">
                    <div className="md:ml-12 md:mt-8 ml-4 sm:mt-12 sm:-translate-y-6 mt-8 transform  xs:group-hover:-translate-y-12 md:group-hover:-translate-y-8 sm:group-hover:translate-x-4 transition ease-in-out duration-700">
                        <img className="object-scale-down scale-110 w-12 h-12 sm:w-18 sm:h-18 md:w-20 md:h-20" src={image} alt=""/>
                    </div>
                    <div className="mb-4 -ml-24 -mt-12 transform group-hover:scale-110 group-hover:translate-y-2 group-hover:translate-x-2 sm:group-hover:scale-125  transition ease-in-out duration-500">
                        <img className="object-scale-down w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48" src={topleft} alt=""/>
                    </div>
                </div>


                <div className="z-10 group float-right -mt-8">
                    <div className="z-40 -translate-y-4 iphone6:translate-y-0 transform iphone6:group-hover:scale-110 xs:group-hover:-translate-y-6 md:group-hover:-translate-y-2 sm:group-hover:-translate-x-10 transition ease-in-out duration-700">
                            <img className="object-scale-down w-12 h-12 md:w-24 md:h-24 sm:w-20 sm:h-20" src={image} alt=""/>
                    </div>
                    <div className="-mt-10 mb-4 -mr-32 -translate-y-4 iphone6:translate-y-0 transform group-hover:translate-y-2 transition ease-in-out duration-500">
                        <img className="object-scale-down w-32 h-32 md:w-52 md:h-52 sm:w-44 sm:h-44 " src={topright} alt=""/>
                    </div>
                </div>
            </div>

            {/* <div className=""> */}
                <div className="z-50 iphone6:mt-44 xs:mt-20 sm:mt-32 md:mt-24  text-center place-items-center align-items-center justify-items-center xs:gap-2 gap-6 sm:gap-4 grid grid-cols-1  grid-rows-6 xs:grid-cols-2 xs:grid-rows-3 md:grid-cols-3  md:grid-rows-2 ">
                    <div className="">
                        <img className="mx-auto z-40 object-scale-down w-20 h-20 iphone6:w-20 iphone6:h-20 md:w-40 md:h-40 sm:w-28 sm:h-28" src={devf} alt=""/>
                        <p className="text-l sm:text-xl text-center">Devfolio</p>
                    </div>
                    <div className="">
                        <img className="mx-auto z-40 object-scale-down w-20 h-20 iphone6:w-20 iphone6:h-20 md:w-40 md:h-40 sm:w-28 sm:h-28" src={gfg} alt=""/>
                        <p className="text-l sm:text-xl text-center">Geek for Geeks</p>
                    </div>
                    <div className="">
                        <img className="mx-auto z-40 object-scale-down w-20 h-20 iphone6:w-20 iphone6:h-20 md:w-40 md:h-40 sm:w-28 sm:h-28" src={jetb} alt=""/>
                        <p className="text-l sm:text-xl text-center">Jet Brains</p>
                    </div>
                    <div className="">
                        <img className="mx-auto z-40 object-scale-down w-20 h-20 iphone6:w-20 iphone6:h-20 md:w-40 md:h-40 sm:w-28 sm:h-28" src={balsa} alt=""/>
                        <p className="text-l sm:text-xl text-center">Balsamiq</p>
                    </div>
                    <div className="">
                        <img className="mx-auto z-40 object-scale-down w-20 h-20 iphone6:w-20 iphone6:h-20 md:w-40 md:h-40 sm:w-28 sm:h-28" src={matic} alt=""/>
                        <p className="text-l sm:text-xl text-center">Matic</p>
                    </div>
                    <div className="">
                        <img className="mx-auto z-40 object-scale-down w-20 h-20 iphone6:w-20 iphone6:h-20 md:w-40 md:h-40 sm:w-28 sm:h-28" src={portis} alt=""/>
                        <p className="text-l sm:text-xl text-center">Portis</p>
                    </div>
                </div>
            {/* </div> */}

            <div className="z-0 fixed bottom-0 left-0 right-0">
            <div className="group float-left">
                    <div className="md:ml-12 md:mt-8 ml-4 sm:mt-12 mt-8 iphone6:mt-0 sm:translate-y-52 md:translate-y-80 iphone6:translate-y-36 xs:translate-y-40 transform group-hover:scale-110  xs:group-hover:translate-y-36 xs:group-hover:translate-x-8 sm:group-hover:translate-x-10 sm:group-hover:translate-y-40 md:group-hover:-translate-x-2 md:group-hover:translate-y-64 transition ease-in-out duration-700">
                        <img className="object-scale-down scale-110 iphone6:w-16 iphone6:h-16 w-10 h-10 sm:w-18 sm:h-18 md:w-20 md:h-20 xs:w-8 xs:h-8 " src={image} alt=""/>
                    </div>
                    <div className="ml-24 md:translate-y-72 sm:translate-y-52 sm:-translate-x-24 xs:translate-y-44 xs:-translate-x-12  bottom-0 transform group-hover:scale-125  sm:group-hover:-translate-x-20 md:group-hover:translate-x-0 md:group-hover:scale-110 transition ease-in-out duration-500">
                        <img className="object-scale-down w-32 h-32 sm:w-44 sm:h-44 md:w-48 md:h-48 xs:w-28 xs:h-28 iphone6:w-36 iphone6:h-36" src={bottomleft} alt=""/>
                    </div>
            </div>


                <div className="group float-right">
                    <div className=" md:translate-y-96 md:-translate-x-20 sm:translate-y-72 sm:-translate-x-8 xs:-translate-x-6 xs:translate-y-52 iphone6:-translate-x-6 iphone6:translate-y-52 transform md:group-hover:translate-y-96 md:group-hover:-translate-x-12 sm:group-hover:translate-y-80 sm:group-hover:translate-x-0 xs:group-hover:translate-y-48 xs:group-hover:translate-x-2 transition ease-in-out duration-700">
                            <img className="object-scale-down w-10 h-10 md:w-24 md:h-24 sm:w-20 sm:h-20 xs:w-8 xs:h-8 iphone6:w-12 iphone6:h-12" src={image} alt=""/>
                    </div>
                    <div className=" -mr-32 md:translate-y-40 md:-translate-x-4 sm:translate-y-16 sm:-translate-x-12 iphone6:translate-y-20 xs:translate-y-20 transform sm:group-hover:-translate-x-16 xs:group-hover:translate-y-10  sm:group-hover:translate-y-8 md:group-hover:translate-y-36 transition ease-in-out duration-500">
                        <img className="object-scale-down w-32 h-32 md:w-48 md:h-48 sm:w-40 sm:h-40 xs:w-28 xs:h-28 iphone6:w-32 iphone6:h-32" src={bottomright1} alt=""/>
                    </div>
                    <div className=" -mr-32 md:translate-y-36 md:-translate-x-64 sm:-translate-x-40 sm:translate-y-24 iphone6:translate-y-24 iphone6:-translate-x-24 xs:translate-y-24 xs:-translate-x-24 transform xs:group-hover:scale-125 sm:group-hover:-translate-x-36 md:group-hover:scale-125 md:group-hover:-translate-x-56 transition ease-in-out duration-500">
                        <img className="object-scale-down w-32 h-32 md:w-48 md:h-48 sm:w-40 sm:h-40 xs:w-28 xs:h-28 iphone6:w-32 iphone6:h-32" src={bottomright2} alt=""/>
                    </div>
                </div>
            </div>
        </div>
     </div>
    )
}
