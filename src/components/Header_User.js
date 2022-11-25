import React from 'react';
import '../stylesheets/Header_User.css';

const Header_User = () => {
  return (
    
    <div className='contenedor-usuario contenedor-general'>
      <div className='foto-perfil-usuario'>
        <img 
          className='foto-perfil'
          src={require('../images/foto-perfil-prueba.jpg')}
          alt='Foto de perfil del usuario'
        />
      </div>
    </div>
    
  );
}

export default Header_User;