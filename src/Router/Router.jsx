import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import All from '../Components/All/All';
import About from '../Components/About/About';
import Service from '../Components/Service/Service';
import Contact from '../Components/Contact/Contact';

const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/',
                element: <All />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/service',
                element: <Service />
            },
            {
                path: '/contact',
                element: <Contact />
            },
        ]
    }
])

export default myRouter;