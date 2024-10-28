import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link']
    if (isActive) classes.push('nav-bar__link--active')
    return classes.join(' ')
  }
  return (
    <nav className='nav-bar'>
      <ul className='ulist'>
        <li>
          <NavLink
            className={navLinkClass}
            to='/'>
            Inicio
          </NavLink>
        </li>

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
            to='/datos'>
          Mis datos
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
            to='/avance'>
            Avance
          </NavLink>
        </li>

        <li>
          <NavLink
            className={navLinkClass}
            to='/informacion'>
            Información
          </NavLink>
        </li>

        <li>
          <NavLink
            className={navLinkClass}
            to='/contacto'>
            Contacto
          </NavLink>
        </li>

      </ul>
    </nav>
  )
}
 
export default NavBar
