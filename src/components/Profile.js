import React from 'react';
import '../stylesheets/Login.css';
import { Navigate }  from 'react-router-dom';
import useUser from '../hooks/useUser';
import { useState } from 'react';
import { useRef } from 'react';
import { editPerson } from '../js/personFetch';
import { useEffect } from 'react';

const Profile = () => {

  try{
    const {userData, personData, unlogin} = useUser()
    const [editPerfil, setEditPerfil] = useState(false)

    const userRef = useRef();
    const errRef = useRef();  
    const [errMsg, setErrMsg] = useState('');

    const [name, setName] = useState(personData.data.name);
    const [lastname, setLastName] = useState(personData.data.lastname);
    const [dni, setDni] = useState(personData.data.dni);
    const [mail, setMail] = useState(personData.data.mail);
    const [phone, setPhone] = useState(personData.data.phone);



    const editPerfilMode = () => {
      if(editPerfil == false){
        setEditPerfil(true)
      } 
    }

    useEffect(()=> {
      setErrMsg('');
    }, [name, lastname, dni, mail, phone])

    const saveChanges = async (e) => {
      e.preventDefault();
      if(editPerfil == true && name != '' && lastname!='' && dni!='' && mail!='' && phone!=''){
        let res = await editPerson(userData.token ,name, lastname, dni, mail, phone)

        setEditPerfil(false)
      } else {
        setErrMsg('No pueden quedar campos vacios')
      }
    }
    console.log(editPerfil)

    return (
      <div className='contenedor3'>
        { (userData != null) ?
          (<div>
            <h1 className='titulo-box'>Perfil</h1>
            {
              editPerfil == false
              ?
              (
            <>
              <div  className='contenedor3'> 
                <div className='contenedor-info-person'>
                  <div> 
                    <h4 className='text-fijos'>Nombre:</h4>
                    <h4 className='text-fijos'>Apellido:</h4>
                    <h4 className='text-fijos'>DNI:</h4>
                    <h4 className='text-fijos'>Mail:</h4>
                    <h4 className='text-fijos'>Teléfono:</h4>
                  </div>
                  <div>
                    <p className='text-nofijos'>{name}</p>
                    <p className='text-nofijos'>{lastname}</p>
                    <p className='text-nofijos'>{dni}</p>
                    <p className='text-nofijos'>{mail}</p>
                    <p className='text-nofijos'>{phone}</p>
                  </div>
                </div >
              </div>
              <div className='contenedor botones'>
                <button className='boton unlogin' onClick={unlogin}>Cerrar Sesión</button>
                <button className='boton editperfil' onClick={editPerfilMode}>Editar Perfil</button>
              </div>
            </>
                )
                :
                (
            <>
              <div  className='contenedor3'> 
                <div className='contenedor-info-person'>
                  <div> 
                    <h4 className='text-fijos'>Nombre:</h4>
                    <h4 className='text-fijos'>Apellido:</h4>
                    <h4 className='text-fijos'>DNI:</h4>
                    <h4 className='text-fijos'>Mail:</h4>
                    <h4 className='text-fijos'>Teléfono:</h4>
                  </div>
                  <div>
                    <input className='input-nofijos' onChange={(e) => setName(e.target.value)} value={name}/>
                    <input className='input-nofijos' onChange={(e) => setLastName(e.target.value)} value={lastname}/>
                    <input className='input-nofijos' onChange={(e) => setDni(e.target.value)} value={dni}/>
                    <input className='input-nofijos' onChange={(e) => setMail(e.target.value)} value={mail}/>
                    <input className='input-nofijos' onChange={(e) => setPhone(e.target.value)} value={phone}/>
                  </div>
                </div >
              </div>
              <p ref={errRef} className={errMsg ? "label-alert" : "offscreen"} aria-live = "assertive">{errMsg}</p>
              <div className='contenedor botones'>
                <button className='boton unlogin' onClick={unlogin}>Cerrar Sesión</button>
                <button className='boton editperfil' onClick={saveChanges}>Guardar Cambios</button>
              </div>
            </>
                )
                }
  
          </div>
          ) : (
            <Navigate to='/login' />
          )
        }
      </div>
      
    );

  } catch {
    return(
      <Navigate to='/login' />
    )
  }





};

export default Profile;