import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import '../stylesheets/Claim_New.css';
import useUser from '../hooks/useUser';

const Claim_History = () => {
  
  const {userData} = useUser();
  //tengo que hacer una funcion que resiva todos los reclamos separados por tipos para ir mostrandolos de a uno

  return (
    <>
    {
      (userData != null)
      ?
      (<>
        {/* ACA VA TODO EL SISTEMA PARA VER LOS RECLAMOS */}
      </>)
      :
      (<Navigate to='/login' />)
    } 
    </>
  );
}

export default Claim_History;