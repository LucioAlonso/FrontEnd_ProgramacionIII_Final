import React from 'react';
import '../stylesheets/Banner.css';

const Banner = () => {
  return (
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
          <p className='tramites-Titulo'>Trámites más solicidatos: </p>
          <a className='links-reclamos-banner' href='#'>Nuevo Reclamo</a>
          <a className='links-reclamos-banner' href='#'>Historial de Reclamos</a>
        </div>
      </nav>
    </div>
  );
}

export default Banner;