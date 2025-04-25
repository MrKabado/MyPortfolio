import React from 'react';
import Header from '../components/Header';

export default function ServicesAndProjects() {
  return (
    //global holder
    <div>
    <Header />
    
    <div className='font-sogoe about-holder border-2 border-solid border-black mx-[10%] my-[5%] p-10 text-[#1E293B]'>
        <h1 className=''>What I Can Do</h1>
        <p>description</p>

        <div className='border-2 border-black border-solid p-2 my-5'>
          <p>services part</p>
        </div>

        <div className='border-2 border-black border-solid p-2 my-5 '>
          <p>contains projects (small or big)</p>
        </div>

    </div>
    </div>
  )
}
