import React from 'react'
import {Link} from 'gatsby'
import ieeecs from './../../images/ieee_logo.png'
import arcs from './../../images/arcs.png'

const navbar = () => {
    return (
        <div className="flex flex-row mt-2 ml-6 " >
            <img src={ieeecs} className="object-contain"/>
            <div className="ml-32 mt-6 bg-nav my-auto  rounded-3xl py-4 font">
            <Link className="px-5 py-4 hover:bg-nav-hover rounded-3xl" to= '/homepage'>Home</Link>
            <Link className="px-5 py-4 hover:bg-nav-hover rounded-3xl" to= '/about'>About</Link>
            <Link className="px-5 py-4 hover:bg-nav-hover rounded-3xl" to= '/speakers'>Speakers</Link>
            <Link className="px-5 py-4 hover:bg-nav-hover rounded-3xl" to= '/timeline'>Timeline</Link>
            <Link className="px-5 py-4 hover:bg-nav-hover rounded-3xl" to= '/events'>Events</Link>
            <Link className="px-5 py-4 hover:bg-nav-hover rounded-3xl" to= '/contact'>Contact Us</Link>
            </div>
            <img className="ml-44  fit-content" src={arcs}/>

        </div>
    )
}

export default navbar
