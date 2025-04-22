import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className='m-[5%] flex flex-col items-center justify-center'>
      <h1>Not Found Page</h1>
      <p>xxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
      <XMarkIcon className='w-[100px] text-red-500'/>
      <Link className='mt-[5%] px-5 border-2 border-solid border-black rounded-[5px] duration-300 transition-all ease-in-out hover:bg-black hover:text-white' to={"/"}>
        <button>Go back home</button>
      </Link>
    </div>
  );
};

export default NotFoundPage
