import React from 'react'
import image from '../images/sponsors_ball.png'

import devf from '../images/devfo.png'
import gfg from '../images/gfg.png'
import jetb from '../images/jetb.png'
import balsa from '../images/balsamiq.png'
import matic from '../images/matic.png'
import portis from '../images/portis.png'

import topleft from '../images/topleft.png'
import topright from '../images/topright.png'
import bottomleft from '../images/leftbottom.png'
import bottomright1 from '../images/rightbottom1.png'
import bottomright2 from '../images/rightbottom2.png'

export default function test() {
    return (
        <div class="overflow-hidden test">
            <div class=" grid grid-cols-5 grid-rows-4 gap-6 mt-24 justify-items-center">
                <div class=" -mt-16 group row-span-2">
                    <div class="z-40 -mb-24 -ml-10  transform group-hover:-translate-y-8 group-hover:translate-x-8 transition ease-in-out duration-700">
                        <img class="object-scale-down w-20 h-20  " src={image} alt="image"/>
                    </div>
                    <div class="z-10 -ml-36 mt-16 transform  group-hover:scale-125 transition ease-in-out duration-500">
                        <img class="object-scale-down w-52 h-52  " src={topleft} alt="image"/>
                    </div>
                </div>
                <div class="col-span-3">
                    <div class=" text-center text-6xl tit">
                        Sponsors
                    </div>
                </div>
                <div class=" -mt-16 group row-span-2">
                    <div class="z-40 -mb-24 -mr-10  transform group-hover:-translate-y-8 group-hover:-translate-x-8 transition ease-in-out duration-700">
                            <img class="object-scale-down w-24 h-24" src={image} alt="image"/>
                    </div>
                    <div class="z-10 -mr-36 mt-16 transform  group-hover:translate-y-4 transition ease-in-out duration-500">
                        <img class="object-scale-down w-52 h-52 " src={topright} alt="image"/>
                    </div>
                </div>
                <div class=" col-span-3 row-span-2 -mt-64 grid grid-cols-1 grid-rows-6 md:grid-cols-3  sm:grid-cols-2 -m-24 gap-2 p-0 justify-items-center">
                    
                        {/* <div class="bg-no-repeat bgrd1" style={{backgroundImage: {image}}}> */}
                        <div class="">
                            <img class="object-scale-down w-24 h-24 md:w-40 md:h-40 sm:w-32 sm:h-32" src={devf} alt="image"/>
                            <p class="text-xl text-center">Devfolio</p>
                        </div>
                        <div class="">
                            <img class="object-scale-down w-24 h-24 md:w-40 md:h-40 sm:w-32 sm:h-32" src={gfg}alt="image" />
                            <p class="text-xl text-center">Geek for Geeks</p>
                        </div>
                        <div class="">
                            <img class="object-scale-down w-24 h-24 md:w-40 md:h-40 sm:w-32 sm:h-32" src={jetb}alt="image" />
                            <p class="text-xl text-center">Jet Brais</p>
                        </div>
                        <div class="">
                            <img class="object-scale-down w-24 h-24 md:w-40 md:h-40 sm:w-32 sm:h-32" src={balsa}alt="image" />
                            <p class="text-xl text-center">Balsamiq</p>
                        </div>
                        <div class="">
                            <img class="object-scale-down w-24 h-24 md:w-40 md:h-40 sm:w-32 sm:h-32" src={matic}alt="image" />
                            <p class="text-xl text-center">Matic</p>
                        </div>
                        <div class="">
                            <img class="object-scale-down w-24 h-24 md:w-40 md:h-40 sm:w-32 sm:h-32" src={portis}alt="image" />
                            <p class="text-xl text-center">Portis</p>
                        </div>
                    
                </div>

                <div class=" group row-span-2 -mt-72">
                <div class="z-10 -mb-36 -ml-24  transform group-hover:-translate-y-24 group-hover:translate-x-10 transition ease-in-out duration-700">
                            <img class="object-scale-down w-20 h-20" src={image} alt="image"/>
                    </div>
                    <div class="z-40 -mr-36 mt-16 -ml-16 transform  group-hover:scale-110 transition ease-in-out duration-500">
                        <img class="object-scale-down w-52 h-52 " src={bottomleft} alt="image"/>
                    </div>
                </div>

                <div class="group row-span-2 -mt-72">
                    <div class="z-10 -mr-52 -mt-16 ml-8 transform  group-hover:-translate-y-8 group-hover:-translate-x-8 transition ease-in-out duration-700">
                        <img class="object-scale-down w-52 h-52 " src={bottomright1} alt="image"/>
                    </div>
                    <div class="z-40 -mt-24 -mr-16  transform group-hover:translate-y-16  group-hover:translate-x-16 transition ease-in-out duration-700">
                        <img class="object-scale-down w-20 h-20" src={image} alt="image"/>
                    </div>
                    <div class="z-20 -ml-96 -mt-4 transform  group-hover:translate-x-8 transition ease-in-out duration-700">
                        <img class="object-scale-down " src={bottomright2} alt="image"/>
                    </div>
                </div>
                <div class="group col-span-3">
                </div>

</div>
        </div>
    )
}
