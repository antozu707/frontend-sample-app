import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PracticasApp from '../pages/home'
import Practicas from '../pages/practicas'
import Ofertas from '../pages/ofertas'
import di_icon_unofficial from '../assets/di.png'

import NavBar from '../components/nav_bar'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <div className='header'>
          <img src={di_icon_unofficial} alt='di_unofficial' className='diImg'/>
          <h1 className='layout__title'>Sistema de Prácticas</h1>
        </div>
        <div className='container'>
          <NavBar />
          <div className='layout__page'>
            <Routes>
              <Route path='/' element={<PracticasApp />} />
              <Route path='/practicas' element={<Practicas />} />
              <Route path='/ofertas' element={<Ofertas />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout
