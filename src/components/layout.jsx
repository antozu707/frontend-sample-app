import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

import PracticasApp from '../pages/home'
import Practicas from '../pages/practicas'
import Ofertas from '../pages/ofertas'
import Avance from '../pages/avance'
import Postulaciones from '../pages/postulaciones'

import ProfileMenu from '../components/profileMenu'
import NotificacionPracticas from '../components/notificacionPracticas'

import di_icon_unofficial from '../assets/di.png'
import user_icon from '../assets/account_circle.png'
import bell_icon from '../assets/notifications.png'

import NavBar from '../components/nav_bar'
//import NavBarHorizontal from '../components/nav_barhorizontal'

const Layout = () => {

  const [OpenMenuPracticas, setOpenMenuPracticas] = useState(false);
  const [OpenMenuPerfil, setOpenMenuPerfil] = useState(false);

  return (
    <>
      <BrowserRouter>
        <div className='layout'>

          <div className='header'>
            <div>
              <NavLink to='/' style={{ marginBottom: '10px', marginTop: '20px', marginLeft: '15px' }}>
                <img src={di_icon_unofficial} alt='di_unofficial' style={{ width: '50px', cursor: 'pointer' }}/>
              </NavLink>
            </div>
            <div className='layout__title'>
              <h2 >Sistema de Prácticas</h2>
            </div>
            <div className="bell-div">
              <button className="notification-btn" onClick={() => setOpenMenuPracticas((prev) => !prev)}>
                <span className="bell-span"><img src={bell_icon} alt="bell_icon" className="bell-icon"/></span>
                <span className="notification-badge">1</span> {/* Número de notificaciones */}
              </button>
            </div>
            <div className="user_icon_div">
              <img src={user_icon} alt="user" className="user-icon" onClick={() => setOpenMenuPerfil((prev) => !prev)}/>
            </div>
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

      {
        OpenMenuPracticas && <NotificacionPracticas />
      }
      {
        OpenMenuPerfil && <ProfileMenu />
      }
    </>
  )
}

export default Layout