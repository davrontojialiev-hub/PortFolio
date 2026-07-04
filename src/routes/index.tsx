import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import App from '../App';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact'; 
import '../assets/scss/main.scss';
import '../i18n/config';
import { MySkills } from '../pages/MySkills';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true, 
        element: <Navigate to="/home" replace /> 
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'projects',
        element: <Projects />
      },
      {
        path: 'skills',
        element: <MySkills />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
