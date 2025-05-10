import React, { useState } from 'react';

//images
import Profile from '../assets/profile-no-bg.png';
import LightbulbRegular from '../assets/lightbulb-regular.svg';
import LightbulbSolid from '../assets/lightbulb-solid.svg';

//icon
import { PhoneArrowDownLeftIcon } from '@heroicons/react/24/outline';
import { HandRaisedIcon } from '@heroicons/react/24/outline';


import Header from '../components/Header';
import { Link, href } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Homepage() {
    const [isFirstImage, setisFirstimage] = useState(true);

    const handleClick = () => {
      setisFirstimage(prev => {
        console.log(!prev);
        return !prev;
      });
    }

  return (
    <div>
    <Header />

    
    {/* global holder */}
    <div className='font-poppins global-holder flex justify-between mx-[10%] pt-[5%] text-[#1E293B]'>

      {/* description holder */}
      <div className='description-holder w-[40%] flex flex-col justify-between'>
        <p className='text-[50px] font-[500] leading-tight'>
          Hi there! <HandRaisedIcon className='w-[50px] h-[50px] inline-flex'/> <br /> I am 
          <span className='text-[#1E293B] font-[700]'> Jerson Jay </span><br /> 
          an Aspiring <br /> <span className='text-[#1E293B] font-[700]'> Web Developer </span>
        </p>

        <Link to="/Contact">
          <button className='btn-1 px-[3%] py-[1%] border-[2px] border-solid border-transparent rounded-[5px] bg-[#1E293B] text-white text-[20px] font-medium w-fit duration-300 transition-all ease-in-out hover:border-2 hover:border-solid hover:border-[#1E293B] hover:bg-transparent hover:text-[#1E293B] hover:scale-[1.03]'>
          Contact Me Now! <PhoneArrowDownLeftIcon className="w-6 h-6 inline-flex" /> 
          </button>
        </Link>
        <div className='flex justify-start w-fi text-red-600'>
            <img 
            src={isFirstImage ? LightbulbRegular : LightbulbSolid} 
            alt="lightbulb" 
            className='w-8 transition hover:cursor-pointer hover:scale-110'
            onClick={handleClick}
            />      
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
