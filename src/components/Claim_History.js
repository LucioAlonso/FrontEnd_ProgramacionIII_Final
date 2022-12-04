import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import '../stylesheets/Claim_New.css';
import useUser from '../hooks/useUser';
import Claims from './Claims';

const Claim_History = () => {
  
  const {userData} = useUser();
  //tengo que hacer una funcion que resiva todos los reclamos separados por tipos para ir mostrandolos de a uno

  return (
    <>
    {
      (userData == null)
      ?
      (<>
        {/* ACA VA TODO EL SISTEMA PARA VER LOS RECLAMOS */}
        <div className='contenedor'>
          <div className='contenedor-login'>
          <h1>Historial de Reclamos</h1>
          <p className='text'>Tipo:</p>
            <select  required className='container-input'>
              <option selected value='todos'>Todos</option>
              <option value='pluvial'>Pluvial</option>
              <option value='arbolado'>Arbolado</option>
              <option value='alumbrado'>Alumbrado</option>
              <option value='limpieza'>Limpieza</option>
            </select>

          <p className='text'>Estado:</p>
            <select  required className='container-input'>
              <option selected value="Resueltos-SinResolver" disabled>Resueltos/Sin Resolver</option>
              <option value='Resueltos'>Resueltos</option>
              <option value='Sin Resolver'>Sin Resolver</option>
            </select>
              <Claims />
              <Claims />
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