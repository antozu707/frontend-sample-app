import React, { useState } from 'react';

function Avance() {
  const [horasCompletadas, setHorasCompletadas] = useState(137);
  const horasTotales = 360;
  const porcentaje = (horasCompletadas / horasTotales) * 100;
  const horasRestantes = horasTotales - horasCompletadas;

  const [showForm, setShowForm] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [bitacoraText, setBitacoraText] = useState("");

  const handleAddBitacora = () => {
    setShowForm(true);
    setShowConfirmation(false);
  };

  const handleSaveBitacora = () => {
    setShowForm(false);
    setShowConfirmation(true);
    setBitacoraText("");
  };

  const handleConfirmationClose = () => {
    setShowConfirmation(false);
  };

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
          <button onClick={handleAddBitacora} style={{ backgroundColor: '#ff6600', color: '#fff', border: 'none', padding: '10px', margin: '5px', borderRadius: '5px' }}>
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

      {/* Formulario de bitácora */}
      {showForm && (
        <div style={{ margin: '20px auto', width: '800px', border: '2px solid #ff6600', padding: '15px', borderRadius: '10px' }}>
          <h3>Añadir bitácora</h3>
          <textarea
            placeholder="Escribe los detalles de tu bitácora aquí..."
            value={bitacoraText}
            onChange={(e) => setBitacoraText(e.target.value)}
            style={{
              width: '100%',
              maxWidth: '750px',  // Ajusta el ancho máximo
              height: '80px',
              marginBottom: '10px',
              borderRadius: '5px',
              padding: '10px',
              resize: 'vertical',  // Permite que el usuario ajuste la altura sin cambiar el ancho
            }}
          ></textarea>
          <button onClick={handleSaveBitacora} style={{ backgroundColor: '#ff6600', color: '#fff', border: 'none', padding: '10px', borderRadius: '5px' }}>
            Guardar
          </button>
        </div>
      )}

      {/* Confirmación de guardado */}
      {showConfirmation && (
        <div style={{
          position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          backgroundColor: '#ffe680', padding: '20px', borderRadius: '10px', textAlign: 'center',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', width: '300px', color: '#333'
        }}>
          <p style={{ fontWeight: 'bold', marginBottom: '20px' }}>Tu bitácora ha sido guardada exitosamente</p>
          <button onClick={handleConfirmationClose} style={{ backgroundColor: '#ff6600', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>
            Aceptar
          </button>
        </div>
      )}
    </div>
  );
}

export default Avance;