// import React from 'react'
import { useState } from 'react'
import Api from '../../services/api'
import Hero from './Hero'

const Home = () => {
 const [catagory, setCatagory]= useState('');


    const getCatagory =(id)=>{
        const catagory = document.getElementById(id).value;
        setCatagory(catagory);
     }

    //  console.log(catagory)
    
  return (
    <main className='px-4 w-full xl:max-w-screen-lg 2xl:max-w-screen-xl    mx-auto space-y-12'>
        <Hero getCatagory = {getCatagory}></Hero>
        <div className='space-y-2 flex flex-row'>
        
      <Api url ={`https://openapi.programming-hero.com/api/retro-forum/posts?category=${catagory}`}></Api>
      </div>

    </main>
  )
}

export default Home