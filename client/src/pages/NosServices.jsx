import React from 'react';
import Navbar from '../components/Navbar1';
import Footer from '../components/footer';
import Propertie from '../components/propertie';


const NosServices = () => {
  return (
    <div>
      <div className="navbar"> 
        <Navbar />
      </div>

      <div className="propertie"> 
        <Propertie />
      </div>
      
     

      <div className="space-between-sections" style={styles.space}></div>
      <div className="footer-container"> 
        <Footer />
      </div>
    </div>
  );
}

const styles = {
  space: {
    height: '50px', 
  },
};

export default NosServices;