import React from 'react';
import { Link } from 'react-router-dom';
import ThreeSixtyViewer from '../components/ThreeSixtyViewer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'; // Importer l'icône de flèche

// Importer votre image d'arrière-plan
import backgroundImage from '../assets/decoo.jpg';

const Visitt = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh', // Assure que le contenu occupe toute la hauteur de la vue
    backgroundImage: `url(${backgroundImage})`, // Ajout de l'image de fond
    backgroundSize: 'cover', // Ajuste la taille de l'image pour remplir le conteneur
    backgroundPosition: 'center', // Centre l'image dans le conteneur
  };

  const buttonContainerStyle = {
    marginTop: '20px', // Espace au-dessus du bouton (modifié)
    marginBottom: '20px', // Espace en dessous du bouton (ajouté)
    display: 'flex',
    justifyContent: 'flex-end', // Aligner le bouton à droite
    width: '100%', // Assure que le bouton occupe toute la largeur
  };

  const buttonStyle = {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    color: 'orange', // Couleur du texte orange (modifié)
    border: '2px solid orange', // Bordure orange (ajouté)
    borderRadius: '5px',
    fontSize: '18px',
    fontWeight: 'bold',
    padding: '10px 20px',
    backgroundColor: 'transparent', // Fond transparent (modifié)
  };

  return (
    <div style={containerStyle}>
      
      
      <ThreeSixtyViewer />
      <div style={buttonContainerStyle}>
        <Link to="/search" style={buttonStyle}>
          <span style={{ marginRight: '10px' }}>Retour à la recherche</span>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        </Link>
      </div>
    </div>
  );
};

export default Visitt;
