import React from 'react';
// import Profile from '../assets/profile.jpg';
import Profile from '../assets/profile-no-bg.png';
import './Homepage.css';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { HandRaisedIcon } from '@heroicons/react/24/outline';
import Header from '../components/Header';

function Homepage() {
  return (
    <div>
    <Header />
    
    {/* global holder */}
    <div className='font-roboto global-holder border2 border-solid border-black flex justify-evenly pt-[5%]'>

      {/* description holder */}
      <div className='description-holder border border-solid border-black w-[40%] flex flex-col justify-between'>
        <p className='text-[50px] font-[500]'>
          Hi there! <HandRaisedIcon className='w-[50px] h-[50px] inline-flex'/> <br /> I am 
          <span className='text-[#2563EB] font-[700]'> Jerson Jay </span><br /> 
          an Aspiring <br /> <span className='text-[#2563EB] font-[700]'> Web Developer </span>
        </p>

        <button className='btn-1 px-[3%] py-[1%] border-[2px] border-solid border-transparent rounded-[5px] bg-[#2563EB] text-white text-[20px] font-medium w-fit duration-300 transition-all ease-in-out'>
          Know Me  <MagnifyingGlassIcon className="w-6 h-6 inline-flex" />
        </button>
      </div>

      {/* image-holder */}
      <div className='image-holder border border-solid border-black w-[40%]'>
        <img src={Profile} alt="Profile Picture" className='w-[400px]'/>
      </div>

    </div>
    </div>
  )
}

export default Homepage;
