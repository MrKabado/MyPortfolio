import React from 'react';
import Header from '../components/Header';
import Headroom from 'react-headroom';

//icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

import { Mail, Phone} from 'lucide-react';

export default function Contact() {
  const facebookLink = () => {
    window.open("https://www.facebook.com/jersonjay.bonghanoy", "_blank");
  }

  const githubLink = () => {
    window.open("https://github.com/MrKabado", "_blank");
  }

  const instagramLink = () => {
    window.open("https://www.instagram.com/jerson_jay18/", "_blank");
  }

  return (
    <div>
      <Headroom>
        <Header />
      </Headroom>

      <div className='flex flex-row justify-evenly font-poppins mx-[10%] my-[5%] p-5 text-[#1E293B] border-solid border-l-[5px] border-[#1E293B] border-t-0 border-r-0 border-b-0 rounded-[20px]'>
        <div className='description w-[40%]'>
        <h1 className='text-[30px] font-bold text-[#1E293B]'>Contact Me</h1>
        <p>Feel free to reach out for collaborations, questions, or just to say hello!</p>
        <br />
        <p><Mail className='inline-block' /> jersonjaybonghanoy@gmail.com</p>
        <p><Phone className='inline-block' /> +639915337918</p>

        <div className='icon-holder mt-10'>
          <FontAwesomeIcon icon={faFacebook} size='2x' title="this is legit" onClick={facebookLink} 
          className='color-black-600 mx-2 transition hover:scale-[1.05] hover:cursor-pointer'/>
          <FontAwesomeIcon icon={faGithub} size='2x' title='go to my github' onClick={githubLink} 
          className='color-black-600 mx-2 transition hover:scale-[1.05] hover:cursor-pointer'/>
          <FontAwesomeIcon icon={faInstagramSquare} size='2x' title='go to my instagram' onClick={instagramLink} 
          className='color-black-600 mx-2 transition hover:scale-[1.05] hover:cursor-pointer'/>
        </div>
        {/* icon */}
        </div>

        <div className='fillup-holder w-[50%] border-2 border-solid border-transparent p-5'>
          <form action="" className='space-y-5'>
            <input type="text" placeholder='Your Name' 
            className='focus:outline-[#1E293B] w-full py-1 px-2 rounded-lg shadow-[0px_0px_3px_0px_gray] transition border-2 border-solid border-transparent hover:border-[#1E293B]'/><br />
            <input type="email" placeholder='Your Email'
            className='focus:outline-[#1E293B] w-full py-1 px-2 rounded-lg shadow-[0px_0px_3px_0px_gray] transition border-2 border-solid border-transparent hover:border-[#1E293B]'
            /><br />

            <textarea
            placeholder='Your Message'
            className='w-full h-40 p-2 border-2 border-solid border-gray-transparent focus:outline-[#1E293B] py-1 px-2 rounded-lg shadow-[0px_0px_3px_0px_gray] transition border-transparent hover:border-[#1E293B]'
            />

            <button 
            className='py-1 px-2 border-2 border-solid border-[#1E293B] text-white bg-[#1E293B] transition rounded-lg hover:scale-[1.03]'>
            Submit Message</button>

          </form>
        </div>
      </div>

    </div>
  )
}
