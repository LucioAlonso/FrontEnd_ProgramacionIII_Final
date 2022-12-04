import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import '../stylesheets/Claims.css';
import useUser from '../hooks/useUser';

const Claims = () => {
  //le puedo pasar por parametros y que lo vaya creando la clase que lo solicita
  const {userData} = useUser();

  return (
			<div className='contenedor-general-claim'>
				<div className='contenedor-icono'>
					<img 
						className='icono-reclamos'
						src={require('../images/tipo-pluvial.png')}
						alt = 'Icono de los reclamos'
					/>
				</div>
				<div className='info'>
					<h4 className='contenedor-text-fecha'>Fecha: </h4>
					<h4 className='contenedor-text-estado'>ESTADO</h4>
					<h4 className='contenedor-text-direccion'>Dirección: </h4>
				</div>
			</div>
  );
}

export default Claims;