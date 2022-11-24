import React from 'react';
import '../stylesheets/Menu.css';

const Menu = () => {
  return (
    <div className='contenedor-general'>
      <div className='header-Principal'>
        <img 
        className='logo-Principal'
        src={require ('../images/logo.png')}
        alt='Logo de la ciudad'
        />
      </div>
      <div className='header-Secundario'>
        <h1 className='titulo-centroBanner'>Centro de reclamos de la Ciudad de Buenos Aires</h1>
        <img 
        className='banner'
        src={require ('../images/banner.jpg')}
        alt='Logo de la ciudad'
        />
        <nav>
          <div className='Tramites-Links'>
            <p className='Tramites-Titulo'>Tramites: </p>
            <a href='#'>Nuevo Reclamo</a>
            <a href='#'>Historial de Reclamos</a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Menu;