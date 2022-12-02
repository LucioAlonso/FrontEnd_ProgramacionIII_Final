import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Header_Logo.css';

const Header_Logo = () => {
  return (
          <div className='header-logo contenedor-general'>
          <Link to='/'>
            <img 
            className='logo-Principal'
            src={require ('../images/logo.png')}
            alt='Logo de la ciudad'
            />
          </Link>
        </div>
  );
}

export default Header_Logo;