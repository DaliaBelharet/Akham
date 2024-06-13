import React, { useState, useEffect } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';
import sorry from '../assets/sorry.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const SearchResults = () => {
  const location = useLocation();
  const { houses } = location.state || { houses: [] };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fakeLoading = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(fakeLoading);
    };
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f9f9f9' }}>
        <div style={{ fontSize: "24px", marginBottom: "20px" }}>Chargement en cours...</div>
        <FontAwesomeIcon icon={faSpinner} spin style={{ fontSize: "50px", color: "#F27438" }} />
      </div>
    );
  }

  if (!Array.isArray(houses) || houses.length === 0) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f9f9f9' }}>
        <div style={{ display: 'flex', alignItems: 'center', maxWidth: '800px', padding: '20px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)', borderRadius: '10px', background: 'white' }}>
          <img src={sorry}  style={{ width: '300px', height: 'auto', marginRight: '20px' }} />
          <div>
            <p style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Désolé pour le moment, il n'y a pas de biens correspondant à vos critères de recherche.</p>
            <p>Revenez souvent pour découvrir de nouvelles annonces !</p>
            <p>Modifiez vos critères de recherche pour obtenir plus de résultats.</p>
            <Link to="/home" style={{ color: '#F27438', textDecoration: 'none', fontWeight: 'bold' }}>Retour à la page d'accueil</Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "36px", fontWeight: "bold", textAlign: "center", marginBottom: "40px" }}>Résultats de la recherche</h1>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
        {houses.map((house) => (
          <div key={house._id} style={{ marginRight: "20px", marginBottom: "20px", width: "200px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", borderRadius: "10px", overflow: "hidden" }}>
            <Link to={`/HouseDetails/${house._id}`} style={{ textDecoration: "none", color: "#333" }}>
              <img src={`http://localhost:3000/${house.images}`} style={{ width: "100%", height: "auto" }} />
              <div style={{ padding: "15px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>{house.title}</h3>
                <p style={{ marginBottom: "10px", display: "inline-flex", alignItems: "center" }}>
                  <span style={{ marginRight: "5px", color: "#F27438" }}>
                    <FaLocationDot />
                  </span>
                  {house.wilaya}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
