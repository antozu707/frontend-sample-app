import React from 'react';

function PracticasApp() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: 'auto', border: '1px solid #333', borderRadius: '10px', padding: '20px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="https://lh3.googleusercontent.com/proxy/2vixiGS6SfAsiU5vmbJoo2HPuWqzTWr16h9Ck-Oa29PidfOK4CIFLvFvpbQz0wnq0ZI_XlKzdA1gVNdrwwcsDuBmwD9_9XrnD4Or9qm68n-1Aowm" alt="Logo" style={{ width: '170px', marginRight: '10px' }} />
          <h2>Departamento de Informática<br />Universidad Técnica Federico Santa María</h2>
        </div>
        <button style={{ backgroundColor: '#f68121', border: 'none', padding: '10px 20px', color: '#fff', borderRadius: '5px' }}>
          Cerrar sesión
        </button>
      </header>

      <div style={{ display: 'flex' }}>
        <nav style={{ backgroundColor: '#333', color: '#fff', width: '200px', padding: '10px', borderRadius: '10px' }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ padding: '10px', backgroundColor: '#666', borderRadius: '5px', marginBottom: '5px' }}>Mis prácticas</li>
            <li style={{ padding: '10px', marginBottom: '5px' }}>Mis datos</li>
            <li style={{ padding: '10px', marginBottom: '5px' }}>Ofertas</li>
            <li style={{ padding: '10px', marginBottom: '5px' }}>Estadísticas</li>
            <li style={{ padding: '10px', marginBottom: '5px' }}>Avance</li>
            <li style={{ padding: '10px', marginBottom: '5px' }}>Información</li>
            <li style={{ padding: '10px' }}>Contacto</li>
          </ul>
        </nav>

        <main style={{ marginLeft: '20px', width: '100%' }}>
          <h1 style={{ backgroundColor: '#333', color: '#fff', padding: '10px', borderRadius: '5px' }}>Mis prácticas</h1>
          <div style={{ marginTop: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', border: '2px solid #f68121', borderRadius: '5px', marginBottom: '10px' }}>
              <span style={{ fontWeight: 'bold', fontSize: '18px' }}>Práctica Industrial</span>
              <span style={{ backgroundColor: '#f68121', padding: '5px 10px', color: '#fff', borderRadius: '5px' }}>No iniciada</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', border: '2px solid #f68121', borderRadius: '5px' }}>
              <span style={{ fontWeight: 'bold', fontSize: '18px' }}>Práctica Profesional</span>
              <span style={{ backgroundColor: '#f68121', padding: '5px 10px', color: '#fff', borderRadius: '5px' }}>No iniciada</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default PracticasApp;
