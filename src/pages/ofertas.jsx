import React, { useState } from 'react';

const ofertasData = [
  {
    id: 1,
    empresa: "Banco de Chile",
    ubicacion: "Santiago, Chile",
    detalles: "Práctica Data Scientist, modalidad presencial",
    postulado: false
  },
  {
    id: 2,
    empresa: "Samsung",
    ubicacion: "Santiago, Chile",
    detalles: "Práctica Desarrollador Software, modalidad presencial",
    postulado: false
  },
  {
    id: 3,
    empresa: "Cencosud",
    ubicacion: "Concepción, Chile",
    detalles: "Práctica Backend Developer, modalidad híbrida",
    postulado: false
  },
  {
    id: 4,
    empresa: "Uber",
    ubicacion: "Santiago, Chile",
    detalles: "Práctica Ciberseguridad, modalidad remota",
    postulado: false
  },
];

function Ofertas() {
  const [currentPage, setCurrentPage] = useState(1);
  const [offers, setOffers] = useState(ofertasData);
  const [showPopup, setShowPopup] = useState(false);
  const offersPerPage = 2;

  const indexOfLastOffer = currentPage * offersPerPage;
  const indexOfFirstOffer = indexOfLastOffer - offersPerPage;
  const currentOffers = offers.slice(indexOfFirstOffer, indexOfLastOffer);
  const [selectedOfferId, setSelectedOfferId] = useState(null);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handlePostular = (id) => {
    setOffers(offers.map((offer) =>
      offer.id === id ? { ...offer, postulado: true } : offer
    ));
    setSelectedOfferId(id);
    setShowPopup(true);
  };

  const handleCancel = (id) => { 
    if (selectedOfferId !== null) {
      setOffers(prevOffers => prevOffers.map(offer =>
        offer.id === selectedOfferId ? { ...offer, postulado: false } : offer
      ));
    }
    setShowPopup(false);
  };
  

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    
    <div style={{ marginLeft: '600px', padding: '20px', width: '900px', borderRadius: '10px' }}>

      {currentOffers.map((offer) => (
        <div key={offer.id} style={{
          border: '2px solid #ff6600',
          borderRadius: '10px',
          padding: '15px',
          margin: '20px auto',
          width: '500px'
        }}>
          <p><strong>Empresa:</strong> {offer.empresa}</p>
          <p><strong>Ubicación:</strong> {offer.ubicacion}</p>
          <p><strong>Detalles:</strong> {offer.detalles}</p>
          <button
            onClick={() => handlePostular(offer.id)}
            style={{
              backgroundColor: offer.postulado ? '#ccc' : '#ff6600',
              color: 'white',
              border: 'none',
              padding: '5px 10px',
              cursor: offer.postulado ? 'default' : 'pointer',
              borderRadius: '5px'
            }}
            disabled={offer.postulado}
          >
            {offer.postulado ? "Pendiente" : "Postular"}
          </button>
        </div>
      ))}
      
      <div className="pagination" style={{ marginTop: '30px', textAlign: 'center' }}>
        {Array.from({ length: Math.ceil(offers.length / offersPerPage) }, (_, index) => (
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

      {showPopup && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: '20px',
          backgroundColor: '#FFE4B5',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
          textAlign: 'center',
          zIndex: 1000
        }}>
          <button onClick={closePopup} style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'none',
            border: 'none',
            fontSize: '20px',
            cursor: 'pointer'
          }}>X</button>
          <p style={{ color: '#000000' }}><strong>¡Has postulado correctamente!</strong></p>
          <button 
            onClick={handleCancel} 
            style={{ 
              backgroundColor: '#ff6600',
              color: 'white',
              border: 'none',
              margin: '5px',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Cancelar 
          </button>
          <button onClick={closePopup} style={{
            backgroundColor: '#ff6600',
            color: 'white',
            border: 'none',
            margin: '5px',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '10px'
          }}>
            Aceptar
          </button>
        </div>
      )}

      {showPopup && (
        <div onClick={closePopup} style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          zIndex: 999
        }}></div>
      )}
    </div>
  );
}

export default Ofertas;
