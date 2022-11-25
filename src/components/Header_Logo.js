import React from 'react';
import '../stylesheets/Header_Logo.css';

const Header_Logo = () => {
  return (
      <div className='header-logo contenedor-general'>
        <img 
        className='logo-Principal'
        src={require ('../images/logo.png')}
        alt='Logo de la ciudad'
        />
      </div>   
  );
}

export default Header_Logo;