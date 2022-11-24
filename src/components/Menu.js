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
        <div className='banner'>
          <img 
          className='banner-imagen'
          src={require ('../images/banner.jpg')}
          alt='Logo de la ciudad' />
          <h1 className='titulo-centroBanner'>Reclamos Ciudad de Buenos Aires</h1>
        </div>
        <nav className='barra-nav'>
          <div className='tramites-Links'>
            <p className='tramites-Titulo'>Tramites: </p>
            <a href='#'>Nuevo Reclamo</a>
            <a className='historial-reclamos' href='#'>Historial de Reclamos</a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Menu;