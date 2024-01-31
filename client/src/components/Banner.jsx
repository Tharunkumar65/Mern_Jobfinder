import React, { useState } from 'react'
import {FiSearch} from "react-icons/fi"
import { FiMapPin } from "react-icons/fi";
import { useSearchParams } from 'react-router-dom';


const Banner = ({query,handleinputchange,loc,handlelocChange}) => {
 
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14">
       <h1 className='text-5xl font-bold text-primary mb-3'>Find Your <span className='text-blue-600'> new job </span> today</h1>
       <p className='text-lg text-black/70'>Thousands of jobs in the computer,engineering and technology sectors are waiting for you.</p>

       <form>
            <div className='flex md:flex-row flex-col md:gap-1 gap-4'>
              <div className='flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-300 md:w-1/2 w-full mt-4' >
                <input type="text" name ="title" id="title" placeholder='what position are you looking for ?' onChange={handleinputchange} value={query} className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6' />
                <FiSearch className='absolute mt-2.5 ml-2 text-gray-400'/>
              </div>
              <div className='flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-300 md:w-1/3 w-full mt-4' >
                <input type="text" name ="title" id="title" placeholder='Location' onChange={handlelocChange} value={loc} className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6' />
                <FiMapPin className='absolute mt-2.5 ml-2 text-gray-400'/>
              </div>   
              <button className=" mt-3 py-2 px-8 border md:rounded-s-none rounded bg-blue-600 text-white">Search</button>  
            </div>
       </form>
    </div>
  )
}

export default Banner
