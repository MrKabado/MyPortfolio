import React from 'react';
import Header from '../components/Header';
import Headroom from 'react-headroom';

//images
import Output1 from '../assets/output-1.png';
import Output2 from '../assets/output-2.png';
import FitXpert from '../assets/FitXpert.png';


//icon
import { DevicePhoneMobileIcon, CpuChipIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import { Dumbbell, GraduationCap, Laugh } from 'lucide-react';

export default function ServicesAndProjects() {

  const output1 = () => {
    window.open('https://jersonjay-portfolio.netlify.app/', '_blank');
  }

  const output2 = () => {
    window.open('https://random-fun-jokes.netlify.app/', '_blank');
  }

  const fitXpert = () => {
    window.open('https://fitxpert.netlify.app/', '_blank');
  }

  return (
    //global holder
    <div>
    <Headroom>
      <Header />
    </Headroom>
    

    {/* Start of Services part */}
    <div className='font-poppins mx-[10%] my-[5%] p-10 text-[#1E293B] shadow-[-5px_0_5px_-2px_gray] rounded-[10px]'>
        <h1 className='text-[30px] text-[#2563eb] font-bold'>
          {/* <PencilSquareIcon className=' w-[40px] inline-block align-middle m-2'/> */}
          What I Create for You</h1>

        <div className='font-montserrat flex flex-row sm:grid-cols-3 gap-4 my-5'>
          <div className='group border-2 border-transparent shadow-[0px_0px_5px_0px_gray] rounded-[5px] my-5 p-2 duration-500 transition-all ease-in-out hover:translate-y-[-10px] hover:bg-[#4070F4] hover:text-white'>
            <h1 className='text-[#2563eb] text-[23px] font-extrabold group-hover:text-white mb-2'>
              <CodeBracketIcon className='w-10' />
              Web Development</h1>
            <p className='text-justify text-[15px]'>
              I create websites tailored to your goals—whether it's to showcase a portfolio, promote a business, or connect with your audience. Each project is built to be fast, functional, and visually engaging.</p>
          </div>

          <div className='group border-2 border-transparent shadow-[0px_0px_5px_0px_gray] rounded-[5px] my-5 p-2 duration-500 transition-all ease-in-out hover:translate-y-[-10px] hover:bg-[#4070F4] hover:text-white'>
            <h1 className='text-[#2563eb] text-[23px] font-extrabold group-hover:text-white mb-2'>
              <CpuChipIcon  className='w-10'/>
              Programming Solutions</h1>
            <p className='text-justify text-[15px]'>
              I offer programming services to help you tackle various software challenges. From writing clean, efficient code to debugging and optimizing existing programs, I am equipped to handle a range of programming tasks.</p>
          </div>

          <div className='group border-2 border-transparent shadow-[0px_0px_5px_0px_gray] rounded-[5px] my-5 p-2 duration-500 transition-all ease-in-out hover:translate-y-[-10px] hover:bg-[#4070F4] hover:text-white'>
            <h1 className='text-[#2563eb] text-[23px] font-extrabold group-hover:text-white mb-2'>
              <DevicePhoneMobileIcon className='w-10' />
              App Design</h1>
            <p className='text-justify text-[15px]'>
              Creating user-friendly and visually engaging mobile applications is one of my specialties. I focus on designing intuitive interfaces and seamless user experiences for both iOS and Android platforms.</p>
          </div> 
          
        </div>
        {/* End of Services part */}

        <hr className='border-2'/>

        {/* This is Project part */}
        <div className='my-[10%]'>
        <h1 className='text-[25px] font-bold text-[#2563eb]'>
          My Small Projects</h1>
        <p className='text-[15px]'>
          These are some small projects that I've made during school and while learning new things.</p>

          {/* project images holder */}
          <div className='grid gap-10 mt-10 md:grid-cols-2'>
            <div className='bg-gray-50 rounded-xl shadow p-5 hover:shadow-md transition hover:scale-[1.03]'>
              <h1 className='text-xl font-semibold text-blue-600'>
                My Portfolio <GraduationCap className='inline-block'/></h1>
              <p className='mt-2'>
                A personal Portfolio made using basic HTML, CSS, and a bit of JavaScript.</p>

              <img 
                src={Output1} 
                alt="MyPortfolio img" 
                onClick={output1}
                className='w-full mt-4 rounded cursor-pointer hover:opacity-90 transition'
                title='go to website'
                />
            </div>

            <div className='bg-gray-50 rounded-xl shadow p-5 hover:shadow-md transition hover:scale-[1.03]'>
              <h1 className='text-xl font-semibold text-green-600'>
                Random Jokes <Laugh className='inline-block'/></h1>
              <p className='mt-2'>
                A simple school output build with HTML, CSS, and JavaScript that tells random jokes.</p>

                <img 
                  src={Output2} 
                  alt="RandomJokes img" 
                  onClick={output2}
                  className='w-full mt-4 rounded cursor-pointer hover:opacity-90-transition'
                  title='go to website'
                  />
            </div>

            <div className='bg-gray-50 rounded-xl shadow p-5 hover:shadow-md transition hover:scale-[1.03]'>
              <h1 className='text-xl font-semibold text-red-600'>
                FitXpert <Dumbbell className='inline-block'/></h1>
              <p className='mt-2'>
              A basic school project created using HTML, CSS, and JavaScript. It's a gym website that displays pricing and allows users to apply for the program, and similar features.</p>

                <img 
                  src={FitXpert} 
                  alt="RandomJokes img" 
                  onClick={fitXpert}
                  className='w-full mt-4 rounded cursor-pointer hover:opacity-90-transition'
                  title='go to website'
                  />
            </div>
          </div>


        </div>
        {/* End of Project */}

    </div>
    </div>
  )
}
