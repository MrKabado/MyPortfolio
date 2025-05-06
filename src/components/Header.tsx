import React from 'react';
import logo from '../public/profile.jpg';
import { HomeIcon } from '@heroicons/react/24/outline';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { BriefcaseIcon } from '@heroicons/react/24/outline';
import { PhoneIcon } from '@heroicons/react/24/outline';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';



function Header() {
    const linkClass = ({ isActive } : { isActive: boolean }) =>
        isActive ? 'text-blue-500' : 'text-gray-700';

    return (
        <header className="font-segoe flex justify-center items-center bg-white text-[#1E293B] shadow-[0px_0px_5px_0px_gray] h-[70px]">
            <nav className="flex justify-between items-center w-full px-[8%] py-[10px]">
                <h1 className="text-center font-[500] text-[30px]">Portfolio</h1>
                <div>
                    <ul className="flex gap-4 items-center justify-center text-md text-black px-[5px]">
                        <li>
                        <NavLink to="/" className={({ isActive }) =>
                                `nav-link inline-flex items-center gap-1 w-[70px] justify-center font-semibold transition-all duration-200 ease-in-out ${isActive ? 'text-[#64748B] font-[500] cursor-default' : 'hover:text-[#2563eb] hover:font-[500]'}`
                            }>
                                <HomeIcon className="btn-home w-6" />
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about-me" className={({ isActive }) =>
                                `nav-link inline-flex items-center gap-1 w-[105px] text-center font-semibold transition-all duration-200 ease-in-out ${isActive ? 'text-[#64748B] font-[500] cursor-default' : 'hover:text-[#2563eb] hover:font-[500]'}`
                             }>
                                <UserCircleIcon className='btn-about w-6' />
                                About Me</NavLink>
                        </li>
                        <li>
                            <NavLink to="/services-and-projects" className={({ isActive }) => 
                                `nav-link inline-flex items-center gap-1 w-[190px] text-center font-semibold transition-all duration-200 ease-in-out ${isActive ? 'text-[#64748B] font-[500] cursor-default' : 'hover:text-[#2563eb] hover:font-[500]' }`
                            }>
                                <BriefcaseIcon className='btn-services w-6' />
                                Services and Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({ isActive }) =>
                                 `nav-link inline-flex items-center gap-1 w-[80px] text-center font-semibold transition-all duration-200 ease-in-out ${isActive ? 'text-[#64748B] font-[500] cursor-default' : 'hover:text-[#2563eb] hover:font-[500]'}` 
                                 }>
                                <PhoneIcon className='btn-contact w-7' />
                                Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
