import React from 'react';
import Header from '../components/Header';
import Output1 from '../assets/output-1.png';
import Output2 from '../assets/output-2.png';
import Headroom from 'react-headroom';

//icon
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { CodeBracketIcon } from '@heroicons/react/24/outline';
import { CpuChipIcon } from '@heroicons/react/24/outline';
import { DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

export default function ServicesAndProjects() {

  const output1 = () => {
    window.open('https://jersonjay-portfolio.netlify.app/', '_blank');
  }

  const output2 = () => {
    window.open('https://random-fun-jokes.netlify.app/', '_blank');
  }

  return (
    //global holder
    <div>
    <Headroom>
      <Header />
    </Headroom>
    
    <div className='font-sogoe mx-[10%] my-[5%] p-10 text-[#1E293B] border-solid border-l-[5px] border-blue-600 border-t-0 border-r-0 border-b-0 rounded-[20px]'>
        <h1 className='text-[30px] text-[#2563eb] font-bold'>
          {/* <PencilSquareIcon className=' w-[40px] inline-block align-middle m-2'/> */}
          What I Create for You</h1>

        <div className='font-montserrat flex flex-row xl:grid-rows-2 gap-4 my-5'>
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

        <div className=''>
          <h1>My Projects</h1>
          <p>This is my little projects/outputs that I do at school or in times of learning something</p>

          <div className='projects-holder border border-solid border-black p-2 my-5'>
            <h1>Small Outputs</h1>
            <div className='flex flex-row justify-evenly mt-5'>
              <section className='border border-solid border-black w-[50%]'>
              <h1>My Portfolio</h1>
              <p>This Portfolio created just by using basic html, css, and a little bit JavaScript</p>
              </section>
              <section className='border border-solid border-black w-[50%]'>
                  <img className='cursor-pointer' id='output1' src={Output1} alt="output1-clickable" onClick={output1} />
              </section>
            </div>

            <div className='flex flex-row justify-evenly mt-5 border-2 border-solid border-black'>
              <section className='border border-solid border-black w-[50%]'>
              <h1>Random Jokes</h1>
              <p>This was created for our ouput in school, just basic html, css, and js</p>
              </section>
              <section className='border border-solid border-black w-[50%]'>
                  <img className='cursor-pointer' id='output1' src={Output2} alt="output1-clickable" onClick={output2} />
              </section>
            </div>
          </div>
        </div>

    </div>
    </div>
  )
}
