import React from 'react';
import '../stylesheets/Header.css';

const Header = () => {
  return (
    <div className='contenedor-general'>
      <div className='header-logo'>
        <img 
        className='logo-Principal'
        src={require ('../images/logo.png')}
        alt='Logo de la ciudad'
        />
      </div>
      <div className='contenedor-usuario'>
        <div className='nombre-perfil-usuario'>
          <p className='nombre-perfil'>Lucio</p>
        </div>
        <div className='foto-perfil-usuario'>
          <img 
            className='foto-perfil'
            src={require('../images/foto-perfil-prueba.jpg')}
            alt='Foto de perfil del usuario'
          />
        </div>
      </div>
    </div>
    
  );
}

export default Header;