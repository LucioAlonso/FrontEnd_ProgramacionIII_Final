import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import '../stylesheets/Claims.css';
import useUser from '../hooks/useUser';

const Claims = () => {
  
  const {userData} = useUser();

  return (
			<div>
				<div>
					<img 
						className='icono-reclamos'
						src={require('../images/reclamos-icono.png')}
						alt = 'Icono de los reclamos'
					/>
				</div>
				<div>
						
				</div>
			</div>
  );
}

export default Claims;