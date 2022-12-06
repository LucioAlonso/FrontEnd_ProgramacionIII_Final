import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import '../stylesheets/Claims.css';
import useUser from '../hooks/useUser';

const Claims = ({claim, resolveDate, category, residence, state, createDate}) => {
  //le puedo pasar por parametros y que lo vaya creando la clase que lo solicita
  const {userData} = useUser();

	console.log('entre aca')
  return (
			<div className='contenedor-general-claim'>
				<div className='contenedor-icono'>
					<img 
						className='icono-reclamos'
						src= {require(`../images/tipo-${category}.png`)}
						alt = 'Icono de los reclamos'
					/>
				</div>
				<div className='info'>
					<h4 className='contenedor-text-fecha'>Fecha: {createDate}</h4>
					<h4 className='contenedor-text-estado'>{state == 'enabled' ? <h4 className='sin-resolver'>Sin Resolver</h4> : <h4 className='resuelto'>Resuelto</h4>}</h4>
					<h4 className='contenedor-text-direccion'>Dirección: {residence}</h4>
				</div>
			</div>
  );
}

export default Claims;