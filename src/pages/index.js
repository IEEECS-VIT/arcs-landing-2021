import * as React from "react"
import Navbar from './../components/Navbar/navbar'
import Box from './../images/arcsBox.png'
import ArcsHome from './../images/arcsHome.png'
import Circle from './../images/circle.png'
const IndexPage = () => {
  return (
    <div>
    <Navbar
    arcs={false}
    />
    <img src={Box} alt="box" className="z-20 absolute mt-6 w-72 ml-64  h-64"/>
    <img src={ArcsHome} alt="box" className="z-30 absolute mt-14 ml-80 h-44"/>
    <img src={Circle} className="z-10 absolute mt-64  ml-72 -mb-10 "/>
    <p className="font line font-semibold  inline-block mr-72 mt-4  float-right text-5xl  text-justify">Your next <br/>Interactive <br/>Experience</p>
    <p className="font float-right mt-44 text-2xl -mr-44 text-orange" >VIT VELLORE, <br/> MARCH 19-21</p>
    <button className="relative mt-64 float-right -mr-36 rounded-md bg-button px-5 py-2">Register now</button>
    <div className="m-5 flex flex-row mt-96"> 
    <div className="p-3 m-2 h-auto w-2/4 y border-2 border-red-500"><p>Hackbattle</p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </div>
    <div className="p-3 m-2 h-auto w-7/12 border-2 border-red-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </div>
    <div className="p-3 m-2 h-auto w-2/4 border-2 border-red-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </div>
    </div>
    </div>
  )
}

export default IndexPage
