//header for our portfolio
import React from 'react';
import './Header.css';
import logo from '../public/profile.jpg';

function Header() {
    return (
        <header className="flex justify-center items-center bg-[#FFFFF] text-[#2563EB] shadow-[0px_0px_5px_0px_gray] h-[70px]">
            <nav className="flex justify-between items-center w-full px-[8%] py-[10px]">
                <h1 className="text-center font-[500] text-[30px]">Portfolio</h1>
                <div>
                    <ul className="flex gap-4 items-center justify-center text-md text-black px-[5px]">
                        <li><a className="nav-link inline-block w-[50px] text-center font-semibold" id="home" href="#">Home</a></li>
                        <li><a className="nav-link inline-block w-[80px] text-center font-semibold" id="aboutme" href="#">About Me</a></li>
                        <li><a className="nav-link inline-block w-[190px] text-center font-semibold" id="servproj" href="#">Services and My Projects</a></li>
                        <li><a className="nav-link inline-block w-[50px] text-center font-semibold" id="contact" href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
