import React from 'react';
import Profile from '../assets/profile.jpg';
import './Homepage.css';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

function Homepage() {
  return (
    <div className="global-holder flex justify-center items-center gap-[5%] px-[5%] border2 mx-5 my-[5%] border-black border h-auto">
        <div className='des-holder mr-[10%] border border-black border-solid flex flex-col justify-between p-4 h-auto'>
            <p className='text-[40px]'>Hi there! <br /> I am <span className='text-[#2563EB]'>Jerson Jay </span> <br /> your Aspiring Web Developer</p> <br />
            <pre>

            </pre>
            <button className='btn border-[2px] border-transparent bg-[#2563EB] text-white rounded-[5px] w-fit px-4 py-1 text-xl transition-all duration-500 ease-in-out'>
              Explore 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 inline-block ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>

            </button>
        </div>
        <div className='image-holder max-w-fit border border-black border-solid'>
          <img src={Profile} alt="" className=' w-[250px] h-auto'/>
        </div>
    </div>
  )
}

export default Homepage;
