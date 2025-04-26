import React from 'react';
import Header from '../components/Header';

export default function ServicesAndProjects() {
  return (
    //global holder
    <div>
    <Header />
    
    <div className='font-sogoe about-holder border border-solid border-black mx-[10%] my-[5%] p-10 text-[#1E293B]'>
        <h1 className=''>What I Create for You</h1>

        <div className='border border-solid border-black p-2 my-5'>
          <div className='border border-black border-solid my-5'>
            <h1>Website Development</h1>
            <p>I build responsive and modern websites using HTML, CSS, JavaScript, and ReactJS. Whether you need a personal blog, a landing page, a small business website, or a portfolio, I can create a site that looks great and functions smoothly. Each project is made with clean code and a strong focus on user experience.</p>
          </div>

          <div className='border border-black border-solid my-5'>
            <h1>Front-End Web Development</h1>
            <p>For responsive web design, I ensure that your website looks and performs well on all devices, from smartphones to desktops. I create layouts that automatically adjust to different screen sizes, giving users a seamless experience. A mobile-friendly design isn’t just a feature anymore — it’s a necessity, and I make sure your site is ready.</p>
          </div>

          <div className='border border-black border-solid my-5'>
            <h1>Responsive Design Services</h1>
            <p>When it comes to UI/UX design, I help improve websites by making them clean, simple, and intuitive. I can redesign interfaces to make them easier to navigate and more visually appealing. A good user experience keeps visitors engaged and encourages them to stay longer.</p>
          </div>

          <div className='border border-black border-solid my-5'>
            <h1>UI/UX Design Improvements</h1>
            <p>For UI/UX Design Improvements, I provide basic recommendations to improve the usability and overall look of your website. I can redesign your pages to create a cleaner, simpler, and more intuitive experience for your users, helping you keep visitors engaged.</p>
          </div>

          <div className='border border-black border-solid my-5'>
            <h1>Git and GitHub Support</h1>
            <p>In Git and GitHub Support, I help manage your Git/GitHub repositories to keep your projects organized and properly versioned. I can assist individuals or small teams in setting up GitHub projects, tracking changes, and collaborating smoothly.</p>
          </div>

          <div className='border border-black border-solid my-5'>
            <h1>Web Maintenance and Updates</h1>
            <p>I also offer Web Maintenance and Updates, where I regularly update and maintain websites by fixing bugs, updating content, and improving designs. I can also optimize your front-end performance to make your website faster and more reliable.</p>
          </div>

          <div className='border border-black border-solid my-5'>
            <h1>Learning Support / Tutorials</h1>
            <p>Lastly, through Learning Support and Tutorials, I teach beginners how to get started with front-end development. I also guide others in setting up GitHub profiles, understanding basic Git commands, and managing their code effectively.</p>
          </div>
          
        </div>

        <div className='border border-black border-solid p-2 my-5 '>
          <p>contains projects (small or big)</p>
        </div>

    </div>
    </div>
  )
}
