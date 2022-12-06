import React, { useEffect, useRef, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import '../stylesheets/Claim_New.css';
import useUser from '../hooks/useUser';
import Claims from './Claims';
import { searchClaims } from '../js/claimsFetch';
import '../stylesheets/Claims.css';

const Claim_History = () => {
  
  const {userData} = useUser();
  //tengo que hacer una funcion que resiva todos los reclamos separados por tipos para ir mostrandolos de a uno


  const userRef = useRef();
  const errRef = useRef();

  const [type, setType] = useState('');
  const [category, setCategory ] = useState('');

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(()=> {
    setErrMsg('');
  }, [type, category])


  const dateFormater = (date) => {
    const newDate = date.split('T')[0].split('-')
    return `${newDate[2]}/${newDate[1]}/${newDate[0]}`
  }

  const searchClaim = async (e) => {
    e.preventDefault();
    let res = await searchClaims(userData.data._id, userData.token);
    console.log(res);
    
    const contenedor = document.getElementById('contenedor-reclamos');
    
    if(res.res != 'ok'){
      setErrMsg('No hay datos para mostrar');
    } else {
      const fragment = document.createDocumentFragment()
      res.data.forEach(c => 
        {const {claim, resolveDate, category, residence, state, createDate} = c;

          let hora = new Date();
          
          const divPadre = document.createElement('div')
          divPadre.className = 'contenedor-general-claim'

          const divImg = document.createElement('div');
          divImg.className = 'contenedor-icono';

          const img = document.createElement('img');
          img.className = 'icono-reclamos';
          img.src= require(`../images/tipo-${category}.png`);

          const divInfo = document.createElement('div');
          divInfo.className = 'info';

          const fecha = document.createElement('h4')
          fecha.textContent = `Fecha: ${dateFormater(createDate)}`
          fecha.className = 'contenedor-text-fecha';

          const estado_contenedor = document.createElement('h4')
          estado_contenedor.className = 'contenedor-text-estado'

          const estado = document.createElement('h4')
          if(state == 'enabled'){
            estado.textContent = `Sin Resolver`
            estado.className= 'sin-resolver'
          } else {
            estado.textContent = `Resuelto`
            estado.className= 'resuelto'
          }
          
          estado_contenedor.appendChild(estado)

          const direccion = document.createElement('h4')
          direccion.textContent = `Dirección: ${residence}`
          direccion.className = 'contenedor-text-direccion'
          
          divPadre.appendChild(divImg);
          divImg.appendChild(img);
          divInfo.appendChild(fecha);
          divInfo.appendChild(estado_contenedor);
          divInfo.appendChild(direccion);

          divPadre.appendChild(divInfo);


          fragment.appendChild(divPadre)
     });
     console.log(fragment)
     contenedor.appendChild(fragment)
     

    }
  }

  return (
    <>
    {
      (userData != null)
      ?
      (<>
        {/* ACA VA TODO EL SISTEMA PARA VER LOS RECLAMOS */}
        <div className='contenedor'>
          <div className='contenedor-login'>
          <h1>Historial de Reclamos</h1>
          <p className='text'>Tipo:</p>
            <select  required className='container-input' onChange={(e) => setType(e.target.value)}>
              <option selected value=''>Todos</option>
              <option value='Pluvial'>Pluvial</option>
              <option value='Arbolado'>Arbolado</option>
              <option value='Alumbrado'>Alumbrado</option>
              <option value='Limpieza'>Limpieza</option>
            </select>

          <p className='text'>Estado:</p>
            <select  required className='container-input' onChange={(e) => setCategory(e.target.value)}>
              <option selected value="">Resueltos/Sin Resolver</option>
              <option value='Resueltos'>Resueltos</option>
              <option value='Sin Resolver'>Sin Resolver</option>
            </select>
            <div className='contenedor-boton'>
              <button onClick={searchClaim}> 
                Aplicar
              </button>
            </div>
            <div id='contenedor-reclamos'>

            </div>
            <p ref={errRef} className={errMsg ? "label-alert" : "offscreen"} aria-live = "assertive">{errMsg}</p>
          </div>
        </div>
      </>)
      :
      (<Navigate to='/login' />)
    } 
    </>
  );
}

export default Claim_History;