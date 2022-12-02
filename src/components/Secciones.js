import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Secciones.css';
import useUser from '../hooks/useUser';

const Secciones = () => {
  const {userData} = useUser();
  return (
    <div className='contenedor-secciones'>
      <div className='caja-seccion'>
        <img 
        className='icono-reclamos'
        src={require('../images/reclamos-icono.png')}
        alt = 'Icono de los reclamos'
        />
        <Link to='/Reclamos/Nuevo' className='link-reclamos'><h3>Nuevo Reclamo</h3></Link>
        <p className='descripcion-reclamos'>Iniciá tus reclamos y sigamos mejorando juntos la Ciudad.</p>
      </div>
      <div className='caja-seccion'>
        <img 
        className='icono-reclamos'
        src={require('../images/reclamos-historial-icono.png')}
        alt = 'Icono de los reclamos'
        />
        {}
        <Link to='/Reclamos/Historial' className='link-reclamos' ><h3>Historial Reclamos</h3></Link>
        <p className='descripcion-reclamos'>Mirá el estado de todos tus reclamos.</p>
      </div>
    </div>   
  );
}

export default Secciones;