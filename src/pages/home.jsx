import React from 'react';

function PracticasApp() {
  return (
    <div style={{ marginLeft: '250px', fontFamily: 'Arial, sans-serif', textAlign: 'center', maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ color: '#fff', padding: '10px 0' }}>¡Bienvenido/a al Portal de Sistema de Prácticas!</h1>
      
          <div style={{display: 'flex', justifyContent: 'space-around', margin: '20px 0', gap: '10px' }}>
            <div style={{ flex: 1.5, margin: '10px', border: '2px solid #ff6600', padding: '10px', borderRadius: '8px' }}>
              <h2 style={{ color: '#fff' }}>¿Necesitas realizar<br /> tu práctica?</h2>
              <button style={{ backgroundColor: '#ff6600', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer' }}>Postula aquí</button>
            </div>
            <div style={{ flex: 2.5, margin: '10px', border: '2px solid #ff6600', padding: '10px', borderRadius: '8px' }}>
              <h2 style={{ color: '#fff' }}>Revisa la guía de introducción a prácticas</h2>
              <div>
                <button style={{ backgroundColor: '#ff6600', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '4px', margin: '5px', cursor: 'pointer' }}>GUÍA</button>
                <button style={{ backgroundColor: '#ff6600', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '4px', margin: '5px', cursor: 'pointer' }}>VIDEO</button>
              </div>
            </div>
          </div>
      
          <div style={{ marginTop: '20px', fontSize: '18px', border: '2px solid #ff6600', borderRadius: '8px', padding: '10px' }}>
            <h2>¿Tienes dudas?</h2>
            <p>Echa un vistazo a las <button style={{ backgroundColor: '#ff6600', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}>Preguntas Frecuentes</button> o escribe a <a href="mailto:correo@usm.cl" style={{ color: '#ff6600', textDecoration: 'none' }}>correo@usm.cl</a></p>
          </div>
   </div>
    
    

  );
}

export default PracticasApp;
