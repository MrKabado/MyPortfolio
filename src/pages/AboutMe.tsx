import React from 'react';
import Header from '../components/Header';

export default function AboutMe() {
  return (
    <div className='global-holder'>
    <Header />
      <div className='font-segoe about-holder border-2 border-solid border-black m-[5%] p-5 text-[#1E293B]'>
        <div className='des-holder border-2 border-solid border-black p-5 flex flex-col'>
          <h1>
            About Me
          </h1>
          <br />
          <p className='bg-[#F0F4FF] p-2'>
            Hi , I'm Jerson Jay, a dedicated and aspiring Information Technology student currently in my first year at Cordova Public College. I have a passion for technology and a knack for problem-solving, aiming to create innovative solutions that meet and exceed expectations.
          </p>
          <br />

          <h1>Background</h1>
          <br />
          <p className='bg-[#F0F4FF] p-2'>
          Hi again! My journey into tech began with a fascination for how things work behind the scenes—how websites load, how apps respond, and how technology continues to shape the world around us. That curiosity led me to pursue a degree in Information Technology at Cordova Public College. <br />
          <br />
          Now in my third year as an irregular student, the journey hasn’t always been straightforward. Shifting between different sections and adapting to new classmates and teaching styles each semester has been a challenge. But it’s also been a valuable experience that has taught me to stay resilient, adaptable, and focused on continuous learning. <br />
          <br />
          Over time, I’ve built a strong foundation in coding, logical thinking, and digital creativity. I enjoy solving problems—whether it’s debugging code or finding better ways to improve a system’s efficiency. <br />
          <br />
          Outside of my studies, I’m passionate about cycling and personal development. I believe that discipline and consistency—both in life and in code—are key to achieving long-term success. My goal is to use technology not only to grow personally and professionally, but also to support my family and contribute to the world in meaningful ways. <br />
          </p>
          <br />

          <h1>My Skillset</h1>
          <p>I’m constantly honing my craft, solving problems, and crafting creative solutions. With a passion for design, development, and everything in between, I focus on building digital experiences that are both functional and engaging. Here's an overview of the key skills I bring to the table:</p>
          <br />
          <div className='skillset-holder flex flex-row justify-evenly '>
            <div className='border-2 border-solid border-black p-2 w-[23%]'></div>
            <div className='border-2 border-solid border-black p-2 w-[23%]'></div>
            <div className='border-2 border-solid border-black p-2 w-[23%]'></div>
            <div className='border-2 border-solid border-black p-2 w-[23%]'></div>
          </div>
        
        </div>
      </div>
    </div>
  )
}
