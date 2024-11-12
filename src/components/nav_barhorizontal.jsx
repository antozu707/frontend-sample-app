// NavBarHorizontal.js
import React from 'react';
import '../stylesheets/nav-bar/NavBarHorizontal.scss';

function NavBarHorizontal() {
  return (
    <nav className="navbar-horizontal">
      <div className="navbar-left">
        <img src="/logo.png" alt="Logo" className="navbar-logo" /> {/* Reemplaza /logo.png con la ruta de tu logo */}
        <h1>Departamento de Informática</h1>
      </div>
      <div className="navbar-right">
        <button className="notification-btn">
          <span className="notification-icon">🔔</span> {/* Icono de notificación */}
          <span className="notification-badge">1</span> {/* Número de notificaciones */}
        </button>
        <button className="profile-btn">👤</button> {/* Icono de perfil */}
      </div>
    </nav>
  );
}

export default NavBarHorizontal;

