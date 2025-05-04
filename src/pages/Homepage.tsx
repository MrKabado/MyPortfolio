import React from 'react';

import Profile from '../assets/profile-no-bg.png';
//icon
import { PhoneArrowDownLeftIcon } from '@heroicons/react/24/outline';
import { HandRaisedIcon } from '@heroicons/react/24/outline';
import { SunIcon } from '@heroicons/react/24/outline';
import { MoonIcon } from '@heroicons/react/24/outline';

import Header from '../components/Header';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div>
    <Header />

    
    {/* global holder */}
    <div className='font-poppins global-holder flex justify-between mx-[10%] pt-[5%] text-[#1E293B]'>

      {/* description holder */}
      <div className='description-holder w-[40%] flex flex-col justify-between'>
        <p className='text-[50px] font-[500] leading-tight'>
          Hi there! <HandRaisedIcon className='w-[50px] h-[50px] inline-flex'/> <br /> I am 
          <span className='text-[#2563EB] font-[700]'> Jerson Jay </span><br /> 
          an Aspiring <br /> <span className='text-[#2563EB] font-[700]'> Web Developer </span>
        </p>

        <Link to="/Contact">
          <button className='btn-1 px-[3%] py-[1%] border-[2px] border-solid border-transparent rounded-[5px] bg-[#2563EB] text-white text-[20px] font-medium w-fit duration-300 transition-all ease-in-out hover:border-2 hover:border-solid hover:border-[#2563EB] hover:bg-transparent hover:text-[#2563eb] hover:scale-[1.03]'>
          Contact Me Now! <PhoneArrowDownLeftIcon className="w-6 h-6 inline-flex" /> 
          </button>
        </Link>
        <div className='flex justify-start w-fit'>
            <SunIcon className='w-[30px] hover:scale-[1.05] hover:text-[#2563eb] hover:cursor-pointer'/><MoonIcon className='w-[30px] mx-5 hover:scale-[1.05] hover:text-[#2563eb] hover:cursor-pointer'/>
          </div>
      </div>

      {/* image-holder */}
      <div className='image-holder w-[40%]'>
        <img src={Profile} alt="Profile Picture" className='w-[400px] rounded-full border border-solid border-transparent bg-[#1E293B]'/>
      </div>

    </div>
    </div>
  )
}

export default Homepage;
