import React from 'react'
import combo from '../images/sponsors/combo2.png'

export default function test() {
    return (
        <div className="w-full">
            <div className="relative" style={{margin:"auto",border:"1px solid black"}}>
                <img className="absolute "  src={combo} alt="lines"/>
                <p className=" text-8xl text-center absolute  mt-4 ml-16 mb-10">
                Sponsors</p>
            </div>
        </div>
    )
}
