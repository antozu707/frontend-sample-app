import React, { useState } from 'react';

function Avance() {
  const [horasCompletadas, setHorasCompletadas] = useState(137);
  const horasTotales = 360;
  const porcentaje = (horasCompletadas / horasTotales) * 100;
  const horasRestantes = horasTotales - horasCompletadas;

  return (
    <div style={{ padding: '20px', width: '1000px', borderRadius: '10px' }}>
    <h1 style={{ textAlign: 'left' }}>Avance</h1>

      <div style={{ border: '2px solid #ff6600', textAlign: 'left', padding: '15px', borderRadius: '10px', margin: '20px auto', width: '800px' }}>
        <h2 style={{ color: '#ff6600' }}>Práctica Industrial</h2>
        <h4>Jueves 12 de septiembre</h4>
        <div
          style={{
            float: 'right',  
            backgroundColor: '#ff6600',
            color: '#fff',
            padding: '5px 10px',
            borderRadius: '5px',
            marginTop: '-95px', 
          }}
        >
          En curso
        </div>
        <p>Llevas {horasCompletadas} horas</p>
        <div style={{ backgroundColor: '#e0e0e0', borderRadius: '5px', overflow: 'hidden', height: '20px' }}>
          <div
            style={{
              width: `${porcentaje}%`,
              backgroundColor: '#008000',
              height: '100%',
              textAlign: 'center',
              color: '#fff',
              lineHeight: '20px'
            }}
          >
            {Math.round(porcentaje)}%
          </div>
        </div>
        <div style={{ marginTop: '10px', textAlign: 'center' }}>
          <button style={{ backgroundColor: '#ff6600', color: '#fff', border: 'none', padding: '10px', margin: '5px', borderRadius: '5px' }}>
            Añadir bitácora
          </button>
          <button style={{ backgroundColor: '#ff6600', color: '#fff', border: 'none', padding: '10px', margin: '5px', borderRadius: '5px' }}>
            Editar bitácora
          </button>
          <button style={{ backgroundColor: '#ff6600', color: '#fff', border: 'none', padding: '10px', margin: '5px', borderRadius: '5px' }}>
            Finalizar
          </button>
        </div>
        <p style={{ fontWeight: 'bold' }}>Quedan {horasRestantes.toFixed(1)} horas pendientes</p>
      </div>
    </div>
  );
}

export default Avance;
