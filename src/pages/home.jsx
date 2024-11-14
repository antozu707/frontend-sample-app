import React from 'react';

function PracticasApp() {
  return (
    <div>
      <h1 style={{ marginLeft: '200px', color: '#fff', padding: '10px 0', width: '100%' }}>¡Bienvenido/a al Portal de Sistema de Prácticas!</h1>
      
      <div style={{ marginLeft: '600px',paddingLeft: '300px', paddingBottom: '0', padding: '20px', backgroundColor: '#1a1a1a', minHeight: '10vh', width:'900px' }}>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'strech' }}>
        <div style={{
          width: '400px',
          border: '2px solid #ff6600',
          color: '#fff',
          borderRadius: '8px',
          padding: '20px',
          textAlign: 'center'
        }}>
          <h2 style={{ color: '#fff' }}>¿Necesitas realizar<br /> tu práctica?</h2>
          <button style={{ backgroundColor: '#ff6600', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer' }}>
            Postula aquí
          </button>
        </div>

        <div style={{
          width: '800px',
          border: '2px solid #ff6600',
          color: '#fff',
          borderRadius: '8px',
          padding: '20px',
          textAlign: 'center'
        }}>
          <h2 style={{ color: '#fff' }}>Revisa la guía de introducción a prácticas</h2>
          
          <button style={{ backgroundColor: '#ff6600', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '4px', margin: '5px', cursor: 'pointer' }}>
            GUÍA
          </button>
          <button style={{ backgroundColor: '#ff6600', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '4px', margin: '5px', cursor: 'pointer' }}>
            VIDEO
          </button>
        </div>
      </div>
    </div>


      <div style={{ marginLeft: '620px', width: '880px', marginTop: '20px', fontSize: '18px', border: '2px solid #ff6600', borderRadius: '8px', padding: '10px' }}>
        <h2>¿Tienes dudas?</h2>
        <p>Echa un vistazo a las <button style={{ backgroundColor: '#ff6600', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}>Preguntas Frecuentes</button> o escribe a <a href="mailto:correo@usm.cl" style={{ color: '#ff6600', textDecoration: 'none' }}>correo@usm.cl</a></p>
      </div>
    
    </div>
    

  );
}

export default PracticasApp;
