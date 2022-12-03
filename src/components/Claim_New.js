import React, { useEffect, useRef, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import '../stylesheets/Login.css';
import useUser from '../hooks/useUser';
import { addClaim } from '../js/claimsFetch';

const Claim_New = () => {
  
  const {userData} = useUser();

  const userRef = useRef();
  const errRef = useRef();

  const [typeClaim, setTypeClaim] = useState('');
  const [textInconveniente, setTextInconveniente ] = useState('');
  const [textDireccion, setTextDireccion ] = useState('');

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);


  useEffect(()=> {
    setErrMsg('');
  }, [typeClaim, textDireccion, textInconveniente])


  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await addClaim(userData.data._id, textInconveniente, typeClaim, textDireccion, userData.token)
    if(res.res != 'ok'){
      setErrMsg('Complete los campos faltantes');
      setSuccess(false)
    } else {
      setSuccess(true)
    }
  }

  return (
    <>
    {
      (userData != null)
      ?
      (success ? 
        <Navigate to='/'/>  : 
        <>
          <div className='contenedor'>
          {/* ACA VA TODO EL SISTEMA PARA HACER UN RECLAMO */}
            <div className='contenedor-login'>
              <h2>Reclamos</h2>
              <p className='text'>Tipo:</p>
                <select  required className='container-input' onChange={(e) => setTypeClaim(e.target.value)}>
                <option selected value="type-select" disabled>Seleccione un tipo de reclamo</option>
                <option value='pluvial'>Pluvial</option>
                <option value='arbolado'>Arbolado</option>
                <option value='alumbrado'>Alumbrado</option>
                <option value='limpieza'>Limpieza</option>
              </select>
              <p className='text'>Desarrolle su inconveniente</p>
              <textarea className='text-area' rows="5" cols="50" onChange={(e) => setTextInconveniente(e.target.value)}/>
              <p className='text'>Dirección</p>
              <input className='container-input' onChange={(e) => setTextDireccion(e.target.value)}/>
              <p ref={errRef} className={errMsg ? "label-alert" : "offscreen"} aria-live = "assertive">{errMsg}</p>
              <button onClick={handleSubmit}>Enviar</button>
            </div>
          </div>
        </>)
      
      :
      (<Navigate to='/login' />)
    }
    </>
  );
}

export default Claim_New;