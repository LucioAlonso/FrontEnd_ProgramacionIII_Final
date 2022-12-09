import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import '../stylesheets/Claims.css';
import useUser from '../hooks/useUser';
import { resolveClaim } from '../js/claimsFetch';

const Claims = ({data}) => {
  //le puedo pasar por parametros y que lo vaya creando la clase que lo solicita
  const {userData} = useUser();

  const {_id ,claim, category, residence, createDate} = data;

	const[menuState, setMenuState] = useState(false)
	const[state, setState] = useState(data.state)
	const[resolveDate, setResolveDate] = useState(data.resolveDate)

	const dateFormater = (date) => {
		const newDate = date.split('T')[0].split('-')
		return `${newDate[2]}/${newDate[1]}/${newDate[0]}`
  	}

	const moreMenu = () => {
		if(menuState == false){
			setMenuState(true)
		} else {
			setMenuState(false)

		}
	}

	const finishClim = async () => {
		let res = await resolveClaim(_id, userData.token)
		console.log(res)
		if(res.res == true){
			setResolveDate(res.res.resolveClaim)
			setState(res.res.state)
		} 
	}

  return (
		<div className='contenedor-global'>
			<div className='contenedor-general-claim' onClick={moreMenu}>
				<div className='contenedor-icono'>
					<img 
						className='icono-reclamos'
						src= {require(`../images/tipo-${category}.png`)}
						alt = 'Icono de los reclamos'
						/>
				</div>
				<div className='info'>
					<h4 className='contenedor-text-fecha'>Fecha: {dateFormater(createDate)}</h4>
					<h4 className='contenedor-text-estado'>{state == 'enabled' ? <h4 className='sin-resolver'>Sin Resolver</h4> : <h4 className='resuelto'>Resuelto</h4>}</h4>
				</div>
				
			</div>
				{
					menuState == true ? 
					<div>
						<textarea className='reclamo-text' disabled rows={10}>
							{claim}
						</textarea>
						<p className='contenedor-text-direccion'>Dirección: {residence}</p>
						{state == 'disabled' ? <p className='sin-resolver'>Finalizada: {dateFormater(resolveDate)}</p> : <></>}
						{userData.data.rol == "admin" && state =="enabled"
						? 
						<button onClick={finishClim}>
							Finalizar
						</button>
						: 
						<></>
						}
					</div>
					:
					<></>
				}
		</div>
  );
}

export default Claims;