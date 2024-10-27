import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PracticasApp from '../pages/home'

import NavBar from '../components/nav_bar'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <h1 className='layout__title'>Sistema de Prácticas</h1>
        <div className='container'>
          <NavBar />
          <div className='layout__page'>
            <Routes>
              <Route path='/' element={<PracticasApp />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout
