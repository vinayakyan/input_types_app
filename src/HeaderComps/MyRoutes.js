import React from 'react'
import MyHeader from './MyHeader';
import { Route, Routes } from 'react-router-dom';
import Home from '../MyComponents/Home';
import User from '../MyComponents/User';
import Display from '../MyComponents/Display';
import Edit from '../MyComponents/Edit';
import AppError from '../MyComponents/AppError';

function MyRoutes() {
  return (
    <>
        <MyHeader/>
        <Routes>
            <Route path='' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/user' element={<User/>}/>
            <Route path='/display' element={<Display/>}/>
            <Route path='/edit/:id' element={<Edit/>}/>
            <Route path='/*' element={<AppError/>}/>
        </Routes>
    </>
  )
}

export default MyRoutes;