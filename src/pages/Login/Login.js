import React, {useState, useRef, useEffect, useContext } from 'react';
import '../../stylesheets/Login.css';
import './components/Input/Input.css';
import { BrowserRouter, Link, Navigate, Route, Routes  }  from 'react-router-dom';
import  AuthProvider  from '../../context/AuthProvider';
import {loginUser} from '../../js/userFetch';
import AuthContext from '../../context/AuthProvider';
import useUser from '../../hooks/useUser'
import Profile from '../Profile/Profile';


const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd ] = useState('');
  const [token, setToken ] = useState('');
  const [rol, setRol ] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);


  useEffect(()=> {
    userRef.current.focus();
  }, [])

  useEffect(()=> {
    setErrMsg('');
  }, [user, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault();
    let loginData = await loginUser(user, pwd)
    if (loginData.token){
      setToken(loginData.token)
      setRol(loginData.data.rol)
      setSuccess(true)
      setUser(user)
    } else {
      setSuccess(false)
      setErrMsg('Usuario o contraseña invalidos')
    }
  }

  const userData = {
    token,
    userName: user,
    rol
  };

  return (
    <>
      {success ? (
          < Navigate to='/Cuenta/Profile' userData={userData} /> ) : (
      <div className='contenedor'>
        <div className='contenedor-login'>
          <h2 className='titulo-inicio-sesion'>Inicio de Sesión</h2>
          <form onSubmit={handleSubmit}>
            <input 
              className='container-input'
              type='text'
              id='userName'
              ref={userRef}
              autoComplete='off'
              onChange={(e) => setUser(e.target.value)}
              value={user}
              placeholder ='Nombre de Usuario'
              required
            />
            <input 
              className='container-input'
              type='password'
              id='password'
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              placeholder ='Contraseña'
              required
            />
            <p ref={errRef} className={errMsg ? "label-alert" : "offscreen"} aria-live = "assertive">{errMsg}</p>
            <div className='contenedor-boton'>
              <button> 
                Ingresar
              </button>
            </div>
          </form>

          <Link to='/Cuenta/Registrarse' className='otras-opciones'>No tengo una cuenta</Link>
          <Link to='/Cuenta/Olvide-mi-contraseña' className='otras-opciones'>Olvidé mi contraseña</Link>
        </div>
      </div>
      )}
    </>
  );
};

export default Login;