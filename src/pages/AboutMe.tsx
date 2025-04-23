import React from 'react';
import Header from '../components/Header';
import './AboutMe.css';
import { Link } from 'react-router-dom';

export default function AboutMe() {
  return (
    <div className='global-holder'>
    <Header />
      <div className='font-segoe about-holder border-2 border-solid border-l-[5px] border-blue-600 border-t-0 border-r-0 border-b-0 rounded-[20px] mx-[10%] mt-[5%] p-5 text-[#1E293B]'>
        <div className='des-holder p-5 flex flex-col'>
          <h1 className='text-[30px] text-[#2563eb] font-bold'>
            About Me
          </h1>
          <br />
          <p className='shadow-[0px_0px_5px_0px_gray] rounded-[5px] p-2 text-[17px]'>
            Hi , I'm Jerson Jay, a dedicated and aspiring Information Technology student currently in my first year at Cordova Public College. I have a passion for technology and a knack for problem-solving, aiming to create innovative solutions that meet and exceed expectations.
          </p>
          <br />

          <h1 className='text-[#2563eb] text-[25px] font-bold'>Background</h1>
          <br />
          <p className='shadow-[0px_0px_5px_0px_gray] rounded-[5px] p-2 text-[17px]'>
          Hi again! My journey into tech began with a fascination for how things work behind the scenes—how websites load, how apps respond, and how technology continues to shape the world around us. That curiosity led me to pursue a degree in Information Technology at Cordova Public College. <br />
          <br />
          Now in my third year as an irregular student, the journey hasn’t always been straightforward. Shifting between different sections and adapting to new classmates and teaching styles each semester has been a challenge. But it’s also been a valuable experience that has taught me to stay resilient, adaptable, and focused on continuous learning. <br />
          <br />
          Over time, I’ve built a strong foundation in coding, logical thinking, and digital creativity. I enjoy solving problems—whether it’s debugging code or finding better ways to improve a system’s efficiency. <br />
          <br />
          Outside of my studies, I’m passionate about cycling and personal development. I believe that discipline and consistency—both in life and in code—are key to achieving long-term success. My goal is to use technology not only to grow personally and professionally, but also to support my family and contribute to the world in meaningful ways. <br />
          </p>
          <br />

          <h1 className="text-[#2563eb] text-[25px] font-bold drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] hover:text-[#3b82f6] transition-all duration-300">What I Can Do!</h1>
          <p className='shadow-[0px_0px_2px_0px_gray] rounded-[5px] bg-[#F0F4FF] mt-5 p-2 text-[17px]'>I’m constantly honing my craft, solving problems, and crafting creative solutions. With a passion for design, development, and everything in between, I focus on building digital experiences that are both functional and engaging.</p>
          <br />
          <div className='skillset-holder flex flex-col justify-evenly gap-5'>
              
              <div className='shadow-[0px_0px_2px_0px_gray] rounded-[5px] bg-[#F0F4FF]  p-2 w-[100%]'>
                <h1 className='text-[25px] text-[#2563eb] font-bold'>My Skills</h1>

                <br />

                <div className='card-holder-1 flex flex-row justify-evenly'>
                  <div className='w-[30%] card-1 border-2 border-solid border-transparent rounded-[10px] p-3 shadow-[0px_0px_5px_0px_gray] transition-all duration-300 ease-in-out hover:border-[#d946ef] hover:scale-105'>
                    <p><span className='text-[#d946ef] font-bold border-2 border-solid border-transparent transition-all duration-300 ease-in-out hover:border-b-[#d946ef] hover:cursor-default'>Front-End Development</span>
                   – HTML, CSS, JavaScript, ReactJS, Tailwind CSS</p>
                  </div>
                  <div className='w-[30%] card-2 border-2 border-solid border-transparent rounded-[10px] p-3 shadow-[0px_0px_5px_0px_gray] transition-all duration-300 ease-in-out hover:border-[#22d3ee] hover:scale-105'>
                    <p><span className='text-[#22d3ee] font-bold border-2 border-solid border-transparent transition-all duration-300 ease-in-out hover:border-b-[#22d3ee] hover:cursor-default'>Responsive Web Design</span>
                   – Creating mobile-friendly and user-focused layouts</p>
                  </div>
                  <div className='w-[30%] card-3 border-2 border-solid border-transparent rounded-[10px] p-3 shadow-[0px_0px_5px_0px_gray] transition-all duration-300 ease-in-out hover:border-[#fb923c] hover:scale-105'>
                    <p><span className='text-[#fb923c] font-bold border-2 border-solid border-transparent transition-all duration-300 ease-in-out hover:border-b-[#fb923c] hover:cursor-default'>Basic UI/UX Design</span>
                    – Designing clean, simple, and intuitive interfaces</p>
                  </div>
                </div>
                <br />
                <div className='card-holder-2 flex justify-evenly'>
                  <div className='w-[30%] card-1 border-2 border-solid border-transparent rounded-[10px] p-3 shadow-[0px_0px_5px_0px_gray] transition-all duration-300 ease-in-out hover:border-[#4ade80] hover:scale-105'>
                    <p><span className='text-[#4ade80] font-bold border-2 border-solid border-transparent transition-all duration-300 ease-in-out hover:border-b-[#4ade80] hover:cursor-default'>Version Control</span>
                   – Basic knowledge of Git and GitHub for tracking and collaborating</p>
                  </div>
                  <div className='w-[30%] card-2 border-2 border-solid border-transparent rounded-[10px] p-3 shadow-[0px_0px_5px_0px_gray] transition-all duration-300 ease-in-out hover:border-[#a855f7] hover:scale-105'>
                    <p><span className='text-[#a855f7] font-bold border-2 border-solid border-transparent transition-all duration-300 ease-in-out hover:border-b-[#a855f7] hover:cursor-default'>Continuous Learning</span>
                   – Always exploring new tools and improving current skills</p>
                  </div>
                </div>
                <br />

                
              </div>

              <div className='shadow-[0px_0px_2px_0px_gray] rounded-[5px] bg-[#F0F4FF] p-2 w-[100%]'>
                <h1 className='text-[25px] text-[#2563eb] font-bold'> Ready to bring ideas to life?</h1>
                <p className='text-[17px]'>I offer creative, reliable, and efficient solutions that go beyond just code. Tap in and explore what I can do for you — because your next big project deserves nothing less.</p>
              </div>
              </div>
              <br />              
              <div className=''>
              <p>Let’s Build Something Awesome Together!</p>
                <Link to="/contact">
                  <button>Reach Out!</button>
                </Link>
              </div>
          </div>
        
        </div>
      </div>
  )
}
