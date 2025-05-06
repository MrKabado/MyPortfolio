import React from 'react';
import Header from '../components/Header';
import Headroom from 'react-headroom';

//icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import { Mail, Phone} from 'lucide-react';

export default function Contact() {
  return (
    <div>
      <Headroom>
        <Header />
      </Headroom>

      <div className='flex flex-row justify-evenly font-poppins mx-[10%] my-[5%] p-5 text-[#1E293B] border-solid border-l-[5px] border-blue-600 border-t-0 border-r-0 border-b-0 rounded-[20px]'>
        <div className='description w-[40%] border-2 border-solid border-black'>
        <h1>Contact Me</h1>
        <p>Feel free to reach out for collaborations, questions, or just to say hello!</p>
        <br />
        <p><Mail /> jersonjaybonghanoy@gmail.com</p>
        <p><Phone /> +639915337918</p>

        <FontAwesomeIcon icon={faFacebook} className='color-black-600'/>
        <FontAwesomeIcon icon={faGithub} className='color-black-600'/>
        <FontAwesomeIcon icon={faInstagram} className='color-black-600'/>
        {/* icon */}
        </div>

        <div className='fillup-holder w-[50%] border-2 border-solid border-black'>
          <form action="">
            <input type="text" placeholder='Your Name' /><br />
            <input type="email" placeholder='Your Email'/><br />

            <textarea
            placeholder='Your Message'
            className='w-full h-40 p-2 border border-solid border-gray-600 rounded-[10px]'
            />

          </form>
        </div>
      </div>

    </div>
  )
}
