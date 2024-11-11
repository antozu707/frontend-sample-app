import React, { useState } from 'react';

function Postulaciones() {
  // Ejemplo de datos de postulaciones
  const [postulaciones, setPostulaciones] = useState([
    { id: 1, fecha: '11/11/2024', oferta: 'Banco de Chile, Práctica Data Scientist', estado: 'Pendiente' },
    { id: 2, fecha: '11/10/2024', oferta: 'Samsung, Práctica Desarrollador Software', estado: 'Rechazada' },
  ]);

  // Función para cancelar una postulación
  function handleCancel(id) {
    // Lógica para cancelar la postulación (ej. actualización de estado)
    setPostulaciones(postulaciones.map(p => p.id === id ? { ...p, estado: 'Cancelada' } : p));
    alert('Postulación cancelada');
  }

  return (
    <div style={{ color: 'white', padding: '20px' }}>
      <h2 style={{ color: 'orange', fontSize: '24px' }}>Mis postulaciones</h2>
      
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={styles.headerCell}>Fecha postulación</th>
            <th style={styles.headerCell}>Oferta</th>
            <th style={styles.headerCell}>Estado Postulación</th>
            <th style={styles.headerCell}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {postulaciones.map((postulacion) => (
            <tr key={postulacion.id} style={styles.row}>
              <td style={styles.cell}>{postulacion.fecha}</td>
              <td style={styles.cell}>{postulacion.oferta}</td>
              <td style={styles.cell}>{postulacion.estado}</td>
              <td style={styles.cell}>
                {postulacion.estado === 'Pendiente' ? (
                  <button 
                    onClick={() => handleCancel(postulacion.id)} 
                    style={styles.cancelButton}>
                    Cancelar Postulación
                  </button>
                ) : (
                  '-'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Paginación simple (si hay muchas postulaciones) */}
      <div style={styles.pagination}>
        <button style={styles.pageButton}>&lt;</button>
        <span style={styles.pageNumber}>1</span>
        <button style={styles.pageButton}>&gt;</button>
      </div>
    </div>
  );
}

// Estilos en línea
const styles = {
  headerCell: {
    backgroundColor: '#333',
    color: 'white',
    padding: '10px',
    borderBottom: '2px solid orange',
    textAlign: 'left',
  },
  cell: {
    padding: '10px',
    borderBottom: '1px solid #444',
  },
  row: {
    backgroundColor: '#222',
  },
  cancelButton: {
    backgroundColor: 'orange',
    color: 'black',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  },
  pageButton: {
    backgroundColor: '#333',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    margin: '0 5px',
  },
  pageNumber: {
    color: 'orange',
    fontWeight: 'bold',
    padding: '5px',
  }
};

export default Postulaciones;

