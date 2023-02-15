import React from 'react';
import UI from './projects/UI/UI';
import Easybank from './projects/easybank/Easybank'

import {createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider} from 'react-router-dom';

function Projects(){
    return(
        <div className='projects'>
            {/* <h1>Projects page</h1> */}
            <UI />
        </div>
    )
}

function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
        <Route path='/' element={<Root />}>
            <Route path ='/easybank' element={<Easybank />} />
            <Route path ='/UI' element={<UI />} />
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
    
    return(
        <>
        <div>
            <Link to='/'>Home</Link>
            <Link to='./Contact'>Contact</Link>
            <Link to='./Projects'>Project</Link>
        </div>
        <div className="main-site-content">
            <Outlet />
        </div>
        </>
    );
}

export default Projects;