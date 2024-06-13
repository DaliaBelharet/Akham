import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import logo from "../assets/DARKOUM.png";
import Modal from '../components/Modal'; 

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <nav style={{ 
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '80px', 
            backgroundColor: 'white',
            color: 'black',
            padding: '10px 20px', 
            zIndex: 1000,
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center' 
        }}>
            <Link to="/home">
                <img src={logo} alt="Logo" style={{ marginRight: 20, width: 100, marginTop: 0 }} />
            </Link>
            <ul style={{ 
                listStyle: 'none',
                margin: 0,
                padding: 0,
                display: 'flex',
                justifyContent: 'flex-end'
            }}>
                <li style={{ marginRight: 20, fontWeight: 'bold' }}>
                    <Link to="/">Accueil</Link>
                </li>
                <li style={{ marginRight: 20, fontWeight: 'bold', marginLeft: 20 }}>
                    <div id="nos-services">
                        <a href="#nosservices">Nos services</a>
                    </div>
                </li>
                <li style={{ fontWeight: 'bold', marginLeft: 20 }}>
                    <a href="#AboutUs">A propos</a>
                </li>
            </ul>
            
        
            <button className="login-btn" style={{ 
                backgroundColor: '#F27438',
                color: 'white',
                border: 'none',
                padding: '8px 15px',
                borderRadius: 5,
                cursor: 'pointer',
                fontWeight: 'bold'
            }} onClick={openModal}>Se connecter</button>

            {/* Modal */}
            {showModal && (
                <Modal onClose={closeModal} backgroundColor="#F27438">
                    <h2 style={{ color: 'white' }}>Se connecter en tant qu'admin ou utilisateur</h2>
                 
                </Modal>
            )}
        </nav>
    );
}

export default Navbar;
