import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Homepage from './pages/Homepage';
import AboutMe from './pages/AboutMe';
import ServicesAndProjects from './pages/ServicesAndProjects';
import Contact from './pages/Contact';

import NotFoundPage from './pages/NotFoundPage';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/homepage", element: <Homepage />},
  {path: "/about", element: <AboutMe />},
  {path: "*", element: <NotFoundPage />},
  {path: "/services-and-projects", element: <ServicesAndProjects />},
  {path: "/contact", element: <Contact />},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
