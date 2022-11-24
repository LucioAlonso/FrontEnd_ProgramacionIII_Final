import React from 'react';
import '../stylesheets/Secciones.css';

const Secciones = () => {
  return (
    <div className='contenedor-secciones'>
      <div className='caja-seccion'>
        <img 
        className='icono-reclamos'
        src={require('../images/reclamos-icono.png')}
        alt = 'Icono de los reclamos'
        />
        <a href='#' className='link-reclamos'><h3>Nuevo Reclamo</h3></a>
        <p className='descripcion-reclamos'>Iniciá tus reclamos y sigamos mejorando juntos la Ciudad.</p>
      </div>
      <div className='caja-seccion'>
        <img 
        className='icono-reclamos'
        src={require('../images/reclamos-historial-icono.png')}
        alt = 'Icono de los reclamos'
        />
        <a href='#' className='link-reclamos'><h3>Historial Reclamos</h3></a>
        <p className='descripcion-reclamos'>Mirá el estado de todos tus reclamos.</p>
      </div>
    </div>   
  );
}

export default Secciones;