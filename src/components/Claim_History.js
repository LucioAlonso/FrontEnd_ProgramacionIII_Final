import React, { useEffect, useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
import '../stylesheets/Claim_New.css';
import useUser from '../hooks/useUser';
import { searchClaims, searchClaimsOtherUser } from '../js/claimsFetch';
import '../stylesheets/Claims.css';
import Claims from './Claims'

const Claim_History = () => {
  
  const {userData} = useUser();

  const errRef = useRef();

  const [type, setType] = useState('');
  const [stateText, setStateText ] = useState('');
  const [claimRes, setClaimRes ] = useState('');
  const [usuarioSearch, setUsuarioSearch ] = useState('');

  const [errMsg, setErrMsg] = useState('');

  useEffect(()=> {
    setErrMsg('');
  }, [type, stateText])




 const searchClaim = async () => {
    let res = []

    if(usuarioSearch == ''){
      res = await searchClaims(userData.data._id, userData.token);
    } else {
      res = await searchClaimsOtherUser(usuarioSearch, userData.token);
    }

    let resFilter = [];

    if(type != ''){  
      res.data.forEach(c => {
        const {category} = c;
        if(category == type){
          resFilter.push(c);
        }
      })
      res.data = resFilter
    }

    resFilter = []

    if(stateText != ''){
      res.data.forEach(c => {
        const {state} = c;

        if(state == stateText){
          resFilter.push(c);
        }
      })
      res.data = resFilter
    } 
    if (res.data == ""){
      setErrMsg('No hay reclamos de este tipo')
    }
    setClaimRes(res.data);    
  }

  return (
    <>
    {
      (userData != null)
      ?
      (<>
        {/* ACA VA TODO EL SISTEMA PARA VER LOS RECLAMOS */}
        <div className='contenedor'>
          <div>
            <div className='contenedor-login'>
            <h1>Historial de Reclamos</h1>
            {
              userData.data.rol == 'admin' ?
              <>
                <p className='text'>Usuario:</p>
                <input className='container-input' placeholder='(si no coloca nada buscara sus propios reclamos)' onChange={(e) => setUsuarioSearch(e.target.value)}></input>
              </>
              :
              <></>
            }

            <p className='text'>Tipo:</p>
            <select  required className='container-input' onChange={(e) => setType(e.target.value)}>
              <option selected value=''>Todos</option>
              <option value='pluvial'>Pluvial</option>
              <option value='arbolado'>Arbolado</option>
              <option value='alumbrado'>Alumbrado</option>
              <option value='limpieza'>Limpieza</option>
            </select>

            <p className='text'>Estado:</p>
            <select  required className='container-input' onChange={(e) => setStateText(e.target.value)}>
              <option selected value="">Resueltos/Sin Resolver</option>
              <option value='disabled'>Resueltos</option>
              <option value='enabled'>Sin Resolver</option>
            </select>

              <div className='contenedor-boton'>
                <button onClick={searchClaim}> 
                  Aplicar
                </button>
              </div>
              <p ref={errRef} className={errMsg ? "label-alert" : "offscreen"} aria-live = "assertive">{errMsg}</p>
            {
                  claimRes != '' ? 
                  (claimRes.map(c => {
                    return (
                      <Claims data={c}/>
                      );
                    }) )
                    :
                    <></>
                    
            }
            </div>
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