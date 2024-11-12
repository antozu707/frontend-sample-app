import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

import PracticasApp from '../pages/home'
import Practicas from '../pages/practicas'
import Ofertas from '../pages/ofertas'
import Avance from '../pages/avance'
import Postulaciones from '../pages/postulaciones'
import di_icon_unofficial from '../assets/di.png'

import NavBar from '../components/nav_bar'
//import NavBarHorizontal from '../components/nav_barhorizontal'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <div className='header'>
        <NavLink to='/' style={{ marginBottom: '10px', marginTop: '20px', marginLeft: '15px' }}><img src={di_icon_unofficial} alt='di_unofficial' style={{ width: '50px', cursor: 'pointer' }}/></NavLink>
          <h1 className='layout__title'>Sistema de Prácticas</h1>
        </div>
        <div className='container'>
          <NavBar />
          <div className='layout__page'>
            <Routes>
              <Route path='/' element={<PracticasApp />} />
              <Route path='/practicas' element={<Practicas />} />
              <Route path='/ofertas' element={<Ofertas />} />
              <Route path='/avance' element={<Avance />} />
              <Route path='/postulaciones' element={<Postulaciones />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout