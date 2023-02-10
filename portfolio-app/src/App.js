import React from 'react';
import {useRef} from 'react';
import './App.css';

import Home from './Home.js';
import Contact from './Contact.js';
import Projects from './Projects.js';
import {createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider} from 'react-router-dom';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
        <Route path ='/contact' element={<Contact />} />
        <Route path ='/projects' element={<Projects />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

const Root = () => {
  const navBarRef = useRef();
  const burgerRef = useRef();

  const toggleNavBar = () => {
    navBarRef.current.classList.toggle("toggle-nav-bar");
  }

  // const toggleIcon = () => {
    
  // }

  return(
    <>
      <div className="nav-bar" ref={navBarRef}>
          <Link to='/'>Home</Link>
          <Link to='./Contact'>Contact</Link>
          <Link to='./Projects'>Project</Link>
      </div>
      <div className="btn" onClick={toggleNavBar}><i ref={burgerRef} className="fa-solid fa-burger"></i></div>
      <div className="main-site-content">
        <Outlet />
      </div>
    </>
  );
}

export default App;
