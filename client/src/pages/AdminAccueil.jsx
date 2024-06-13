import React from 'react';
import Sidebar from '../components/SideBar'; 
import panel from '../assets/Control Panel-cuate.png';
import { useSelector } from 'react-redux';

function AdminAccueil({admin}) {
    const { currentAdmin } = useSelector((state) => state.admin);

    console.log('currentAdmin :', currentAdmin);
    console.log('Admin :', admin);
    const styles = {
        adminAccueilContainer: {
            display: 'flex',
            height: '100vh',
        },
        sidebar: {
            width: '200px',
            position: 'fixed', 
            top: 0,             
            left: 0,          
            height: '100vh',    
        },
        mainContent: {
            marginLeft: '200px',  
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
        },
        headerSection: {
            textAlign: 'center',
        },
        headerImage: {
            width: '500px',
            height: 'auto',
            marginBottom: '20px',
            marginLeft: '160px',
        },
        title: {
            fontSize: '24px',
            fontWeight: 'bold',
        },
    };

    return (
        <div style={styles.adminAccueilContainer}>
            <div style={styles.sidebar}>
                <Sidebar />
            </div>
            <div style={styles.mainContent}>
                <div style={styles.headerSection}>
                    <h1 style={styles.title}>Effectuez des actions administratives en toute simplicité dans votre Dashboard.</h1>
                    <img src={panel} alt="Description of the image" style={styles.headerImage} />
                </div>
            </div>
        </div>
    );
}

export default AdminAccueil;
