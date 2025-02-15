import React from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, Routes, RouterProvider } from 'react-router-dom';
import RootLayout from '../layout/RootLayout';
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'

function Routercom() {
 const router =  createBrowserRouter(
    createRoutesFromElements(
          <Route path='/' element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contactus' element={<Contact />} />
        </Route>
    )
  );



  return (
    <RouterProvider router={router} />
  )
}

export default Routercom;
