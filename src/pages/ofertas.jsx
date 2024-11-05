import React, { useState } from 'react';

const ofertasData = [
  {
    empresa: "Banco de Chile",
    ubicacion: "Santiago, Chile",
    detalles: "Práctica Data Scientist, modalidad presencial"
  },
  {
    empresa: "Samsung",
    ubicacion: "Santiago, Chile",
    detalles: "Práctica Desarrollador Software, modalidad presencial"
  },
  {
    empresa: "Cencosud",
    ubicacion: "Concepción, Chile",
    detalles: "Práctica Backend Developer, modalidad híbrida"
  },
  {
    empresa: "Uber",
    ubicacion: "Santiago, Chile",
    detalles: "Práctica Ciberseguridad, modalidad remota"
  },
  // Agrega más ofertas si quieres simular más páginas
];

function Ofertas() {
  const [currentPage, setCurrentPage] = useState(1);
  const offersPerPage = 2; // Cambia este valor para mostrar más o menos ofertas por página

  // Calcular el índice de las ofertas en la página actual
  const indexOfLastOffer = currentPage * offersPerPage;
  const indexOfFirstOffer = indexOfLastOffer - offersPerPage;
  const currentOffers = ofertasData.slice(indexOfFirstOffer, indexOfLastOffer);

  // Función para cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
        <h2>Ofertas disponibles</h2>
      {currentOffers.map((offer, index) => (
        <div key={index} style={{ border: '2px solid #ff6600', borderRadius: '10px', padding: '15px', marginBottom: '30px', margin: '20px auto', width: '500px' }}>
          <p><strong>Empresa:</strong> {offer.empresa}</p>
          <p><strong>Ubicación:</strong> {offer.ubicacion}</p>
          <p><strong>Detalles:</strong> {offer.detalles}</p>
          <button style={{ backgroundColor: '#ff6600', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer', borderRadius: '5px' }}>
            Postular
          </button>
        </div>
      ))}
      
      <div className="pagination">
        {Array.from({ length: Math.ceil(ofertasData.length / offersPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            style={{
              margin: '0 5px',
              padding: '5px 10px',
              backgroundColor: currentPage === index + 1 ? '#ff6600' : '#ccc',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '5px'
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Ofertas;
