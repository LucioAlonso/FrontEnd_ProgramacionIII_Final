import React from 'react';
import '../stylesheets/Banner.css';
import { Link }  from 'react-router-dom';

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
          <Link className='links-reclamos-banner' to='/Reclamos/Nuevo'>Nuevo Reclamo</Link>
          <Link className='links-reclamos-banner' to='/Reclamos/Historial'>Historial de Reclamos</Link>
        </div>
      </nav>
    </div>
  );
}

export default Banner;