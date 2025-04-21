import React from 'react';
import './Header.css';
import logo from '../public/profile.jpg';
import { HomeIcon } from '@heroicons/react/24/outline';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { BriefcaseIcon } from '@heroicons/react/24/outline';
import { PhoneIcon } from '@heroicons/react/24/outline';

function Header() {
    return (
        <header className="font-segoe flex justify-center items-center bg-white text-[#2563EB] shadow-[0px_0px_5px_0px_gray] h-[70px]">
            <nav className="flex justify-between items-center w-full px-[8%] py-[10px]">
                <h1 className="text-center font-[500] text-[30px]">Portfolio</h1>
                <div>
                    <ul className="flex gap-4 items-center justify-center text-md text-black px-[5px]">
                        <li>
                            <a className="nav-link inline-flex items-center gap-1 w-[70px] justify-center font-semibold" id="home" href="#">
                                <HomeIcon className="btn-home w-16" />
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="nav-link inline-flex items-center gap-1 w-[105px] text-center font-semibold" id="aboutme" href="#">
                                <UserCircleIcon className='btn-about w-6' />
                                About Me</a>
                        </li>
                        <li>
                            <a className="nav-link inline-flex items-center gap-1 w-[190px] text-center font-semibold" id="servproj" href="#">
                                <BriefcaseIcon className='btn-services w-6' />
                                Services and Projects</a>
                        </li>
                        <li>
                            <a className="nav-link inline-flex items-center gap-1 w-[80px] text-center font-semibold" id="contact" href="#">
                                <PhoneIcon className='btn-contact w-7' />
                                Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
