import React from 'react';

function Ofertas() {
  return (

    <main style={{ width: '75%'}}>



        <div style={{ border: '2px solid #ff6600', borderRadius: '10px', padding: '15px', marginBottom: '20px', margin: '0 auto', width: '500px' }}>
            <p><strong>Empresa:</strong> Banco de Chile</p>
            <p><strong>Ubicación:</strong> Santiago, Chile</p>
            <p><strong>Detalles:</strong> Práctica Data Scientist, modalidad presencial</p>
                <button style={{ backgroundColor: '#ff6600', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer', borderRadius: '5px' }}>
                Postular
                </button>
        </div>

        <div style={{ border: '2px solid #ff6600', borderRadius: '10px', padding: '15px', marginBottom: '20px', margin: '0 auto', width: '500px' }}>
        <p><strong>Empresa:</strong> Banco de Chile</p>
        <p><strong>Ubicación:</strong> Santiago, Chile</p>
        <p><strong>Detalles:</strong> Práctica Data Scientist, modalidad presencial</p>
            <button style={{ backgroundColor: '#ff6600', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer', borderRadius: '5px' }}>
            Postular
            </button>
        </div>

    </main>

  );
}

export default Ofertas;
