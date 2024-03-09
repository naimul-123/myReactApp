import React from 'react'
import { useState } from 'react'

const Hero = (props) => {
  const {getCatagory} = props;
// console.log(handleSearch)

  return (
    <div className="flex hero flex-col lg:flex-row bg-[url('./src/assets/images/bgbanner.png')] bg-no-repeat bg-pine-tree bg-bottom bg-cover p-4 md:p-12 lg:p-24 rounded-[2rem] gap-6"> 
    <div className=" text-center space-y-4">
      <h1 className="text-white font-black text-6xl">Welcome to the <br/> <span className="text-medium-slate-blue">IdeaVista</span> Forum</h1>
      <p className="text-white font-medium text-xl">Share your panoramic view into the world of creativity, innovation, and inspiration. </p>
      <label className="input input-bordered  rounded-full flex items-center text-rich-black gap-2">
        <input id="catagoryName" onChange={()=>{getCatagory('catagoryName')}} type="text" className="grow bg-transparent placeholder:text-rich-black-50 text-rich-black" placeholder="Search hear anything" />
        <button id="searchByCatagory" className="text-white font-bold bg-[#797DFC] px-4 py-2 rounded-3xl" onClick={()=>{getCatagory('catagoryName')}}>Search</button>
      </label>
    </div>
    <div className="text-pine-tree-80 bg-white rounded-[2rem] p-12 space-y-3 w-full lg:w-2/5">
      <div className="flex justify-between">
        <p>Registered Users</p>
        <p>01</p>
      </div>
      <div className="flex justify-between">
        <p>Forum</p>
        <p>05</p>
      </div>
      <div className="flex justify-between">
        <p>Topics</p>
        <p>01</p>
      </div>
      <div className="flex justify-between">
        <p>Replies</p>
        <p>01</p>
      </div>
    </div>
</div> 
  )
}

export default Hero