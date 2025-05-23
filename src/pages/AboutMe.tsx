import React, { useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

//icons
import { CodeBracketSquareIcon } from '@heroicons/react/24/outline';
import { DevicePhoneMobileIcon } from '@heroicons/react/24/outline';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import { ArrowsRightLeftIcon } from '@heroicons/react/24/outline';
import { LightBulbIcon } from '@heroicons/react/24/outline';
import { UserIcon } from '@heroicons/react/24/outline';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';

import Headroom from 'react-headroom';

export default function AboutMe() {
  const [showBackground, setBackground] = useState(false);

  const revealBG = () => {
    setBackground(!showBackground);
  };

  return (
    <div className='global-holder'>
      <Headroom>
        <Header />
      </Headroom>

      <div className='font-poppins about-holder border-solid border-l-[5px] border-[#1E293B] border-t-0 border-r-0 border-b-0 rounded-[20px] mx-[10%] my-[5%] p-10 text-[#1E293B] bg-[#F8FAFC]'>
        <div className='des-holder flex flex-col'>
          <h1 className='text-[30px] text-[#1E293B] font-extrabold'>
            <UserIcon className='w-[50px] inline-block align-middle m-2' /> Who Am I?
          </h1>
          <br />
          <p className='text-justify shadow-[0_0_5px_0_rgba(30,41,59,0.3)] rounded-[5px] p-2 text-[17px] bg-[#1E293B] text-[#F8FAFC]'>
            Hi, I’m Jerson Jay — a dedicated Information Technology student passionate about turning ideas into digital solutions. I have a passion for technology and a knack for problem-solving, aiming to create innovative solutions that meet and exceed expectations.
          </p>
          <br />

          <h1 className='text-[#1E293B] text-[25px] font-bold'>Background</h1>
          <br />
          {showBackground && (
            <p className='text-justify shadow-[0_0_5px_0_rgba(30,41,59,0.3)] rounded-[5px] p-2 text-[17px] bg-white text-[#1E293B] transition-all duration-200 ease-in-out'>
              Hi again! My journey into tech began with a fascination for how things work behind the scenes—how websites load, how apps respond, and how technology continues to shape the world around us. That curiosity led me to pursue a degree in Information Technology at Cordova Public College.
              <br />
              <br />
              As an irregular student in Information Technology, my academic journey has been unique. Shifting between different sections and adapting to new classmates and teaching styles each semester has taught me the value of flexibility, perseverance, and the ability to thrive in dynamic environments. But it’s also been a valuable experience that has taught me to stay resilient, adaptable, and focused on continuous learning.
              <br />
              <br />
              Over time, I’ve built a strong foundation in coding, logical thinking, and digital creativity. I enjoy solving problems—whether it’s debugging code or finding better ways to improve a system’s efficiency.
              <br />
              <br />
              Outside of my studies, I’m passionate about cycling and personal development. I believe that discipline and consistency—both in life and in code—are key to achieving long-term success. My goal is to use technology not only to grow personally and professionally, but also to support my family and contribute to the world in meaningful ways.
            </p>
          )}
          <button
            id='btn-background'
            onClick={revealBG}
            className='w-fit text-[#1E293B] border border-solid border-[#1E293B] text-sm px-2 py-1 rounded hover:bg-[#1E293B] hover:text-white transition-all ease-in-out'
          >
            {showBackground ? 'Hide My Background' : 'Show My Background'}
          </button>
          <br />

          <h1 className='text-[#1E293B] text-[25px] font-bold transition-all duration-300'>
            What I Can Do!
          </h1>
          <p className='shadow-[0_0_5px_0_rgba(30,41,59,0.3)] rounded-[5px] mt-5 p-2 text-[17px] bg-white text-[#1E293B]] '>
            I’m constantly honing my craft, solving problems, and crafting creative solutions. With a passion for design, development, and everything in between, I focus on building digital experiences that are both functional and engaging.
          </p>
          <br />

          {/* Skills Section - No Changes */}
          <div className='skillset-holder flex flex-col justify-evenly gap-5'>
            <div className='rounded-[5px]  p-2 w-[100%]'>
              <h1 className='text-[25px] text-[#1E293B] font-bold'>My Skills</h1>
              <br />
              <div className='grid gap-6 grid-cols-3 card-holder-1'>
                <div className='group w-auto card-1 border-4 border-solid border-transparent rounded-[10px] p-3 shadow-[0px_0px_5px_0px_gray] transition-all duration-300 ease-in-out hover:border-[#d946ef] hover:scale-105 bg-[#1E293B] text-white'>
                  <CodeBracketSquareIcon className='w-[40px] inline-block text-[#d946ef]' />
                  <p><span className='text-[#d946ef] text-justify font-bold border-2 border-solid border-transparent transition-all duration-300 ease-in-out group-hover:border-b-[#d946ef] group-hover:cursor-default'>Front-End Development</span><br />
                    HTML, CSS, JavaScript, ReactJS, Tailwind CSS</p>
                </div>

                <div className='group w-auto card-2 border-4 border-solid border-transparent rounded-[10px] p-3 shadow-[0px_0px_5px_0px_gray] transition-all duration-300 ease-in-out hover:border-[#22d3ee] hover:scale-105 bg-[#1E293B] text-white'>
                  <DevicePhoneMobileIcon className='w-[40px] inline-block text-[#30cae2]' />
                  <p><span className='text-[#30cae2] text-justify font-bold border-2 border-solid border-transparent transition-all duration-300 ease-in-out group-hover:border-b-[#22d3ee] group-hover:cursor-default'>Responsive Web Design</span><br />
                    Creating mobile-friendly and user-focused layouts</p>
                </div>

                <div className='group w-auto card-3 border-4 border-solid border-transparent rounded-[10px] p-3 shadow-[0px_0px_5px_0px_gray] transition-all duration-300 ease-in-out hover:border-[#fb923c] hover:scale-105 bg-[#1E293B] text-white'>
                  <AdjustmentsHorizontalIcon className='w-[40px] inline-block text-[#fb923c]' />
                  <p><span className='text-[#fb923c] text-justify font-bold border-2 border-solid border-transparent transition-all duration-300 ease-in-out group-hover:border-b-[#fb923c] group-hover:cursor-default'>Basic UI/UX Design</span><br />
                    Designing clean, simple, and intuitive interfaces</p>
                </div>

                <div className='group w-auto card-1 border-4 border-solid border-transparent rounded-[10px] p-3 shadow-[0px_0px_5px_0px_gray] transition-all duration-300 ease-in-out hover:border-[#40c370] hover:scale-105 bg-[#1E293B] text-white'>
                  <ArrowsRightLeftIcon className='w-[40px] inline-block text-[#40c370]' />
                  <p><span className='text-[#40c370] text-justify font-bold border-2 border-solid border-transparent transition-all duration-300 ease-in-out group-hover:border-b-[#40c370] group-hover:cursor-default'>Version Control</span><br />
                    Basic knowledge of Git and GitHub for tracking and collaborating</p>
                </div>

                <div className='group w-auto card-2 border-4 border-solid border-transparent rounded-[10px] p-3 shadow-[0px_0px_5px_0px_gray] transition-all duration-300 ease-in-out hover:border-[#a855f7] hover:scale-105 bg-[#1E293B] text-white'>
                  <LightBulbIcon className='w-[40px] inline-block text-[#a855f7]' />
                  <p><span className='text-[#a855f7] text-justify font-bold border-2 border-solid border-transparent transition-all duration-300 ease-in-out group-hover:border-b-[#a855f7] group-hover:cursor-default'>Continuous Learning</span><br />
                    Always exploring new tools and improving current skills</p>
                </div>

                <div className='group w-auto card-2 border-4 border-solid border-transparent rounded-[10px] p-3 shadow-[0px_0px_5px_0px_gray] transition-all duration-300 ease-in-out hover:border-red-500 hover:scale-105 bg-[#1E293B] text-white'>
                  <Cog6ToothIcon className='w-[40px] inline-block text-red-500' />
                  <p><span className='text-red-500 text-justify font-bold border-2 border-solid border-transparent transition-all duration-300 ease-in-out group-hover:border-b-red-500 group-hover:cursor-default'>Code Optimization</span><br />
                    Focused on improving software performance through efficient coding and debugging.</p>
                </div>
              </div>
            </div>

            <div className='shadow-[0_0_2px_0_rgba(30,41,59,0.3)] rounded-[5px] bg-[#E2E8F0] p-2 w-[100%]'>
              <h1 className='text-[25px] text-[#1E293B] font-bold'> Ready to bring ideas to life?</h1>
              <p className='text-[17px] text-[#1E293B]'>
                I offer creative, reliable, and efficient solutions that go beyond just code. Tap in and explore what I can do for you — because your next big project deserves nothing less.
                <Link to="/contact">
                  <button className='text-[17px] rounded px-2 text-[#3B82F6] hover:underline'>
                    Reach Out!
                  </button>
                </Link>
              </p>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
