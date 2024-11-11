import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link']
    if (isActive) classes.push('nav-bar__link--active')
    return classes.join(' ')
  }
  return (
    <nav
      className='nav-bar'
      style={{position: 'fixed', width:'250px'}}
    >
      <ul className='ulist'>

        <li>
          <NavLink
            className={navLinkClass}
            to='/practicas'>
          Mis prácticas
          </NavLink>
        </li>

        <li>
          <NavLink
            className={navLinkClass}
            to='/perfil'>
          Perfil
          </NavLink>
        </li>

        <li>
          <NavLink
            className={navLinkClass}
            to='/avance'>
            Avance
          </NavLink>
        </li>

        <li>
          <NavLink
            className={navLinkClass}
            to='/postulaciones'>
            Mis postulaciones
          </NavLink>
        </li>

        <li>
          <NavLink
            className={navLinkClass}
            to='/ofertas'>
            Ofertas
          </NavLink>
        </li>

        <li>
          <NavLink
            className={navLinkClass}
            to='/estadisticas'>
            Estadísticas
          </NavLink>
        </li>

        <li>
          <NavLink
            className={navLinkClass}
            to='/informacion'>
            Información
          </NavLink>
        </li>

      </ul>
    </nav>
  )
}
 
export default NavBar
