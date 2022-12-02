import React, {useState, useRef, useEffect } from 'react';
import '../../stylesheets/Login.css';
import Input from './components/Input/Input'
import {Link, Navigate}  from 'react-router-dom';
import {registerUser} from '../../js/userFetch';
import useUser from '../../hooks/useUser';



const Register = () => {

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd ] = useState('');
  const [pwdConfirm, setPwdConfirm ] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);


  useEffect(()=> {
    userRef.current.focus();
  }, [])

  useEffect(()=> {
    setErrMsg('');
  }, [user, pwd, pwdConfirm])

  useEffect(()=> {
    if(pwd != pwdConfirm){
      setErrMsg('Las contraseñas no coinciden');
    }
  }, [pwdConfirm])


  const handleSubmit = async (e) => {
    e.preventDefault();
    let registerData = await registerUser(user, pwd)
    if(registerData.UserAdd){
      setSuccess(true);
    } else {
      setErrMsg(registerData.err)
      setSuccess(false);
    }
  }
  

  return (
    <>
      {success ? (
          <Navigate to='/login'/> ) : ( 
      <div className='contenedor'>
        <div className='contenedor-login'>
          <h2 className='titulo-inicio-sesion'>Registrarse</h2>
 
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
            <input 
              className='container-input'
              type='password'
              id='passwordconfirm'
              onChange={(e) => setPwdConfirm(e.target.value)}
              value={pwdConfirm}
              placeholder ='Confirmar Contraseña'
              required
            />
            <p ref={errRef} className={errMsg ? "label-alert" : "offscreen"} aria-live = "assertive">{errMsg}</p>
            <div className='contenedor-boton'>
              <button onClick={handleSubmit}> 
                Registrarse
              </button>
            </div>


          <Link to='/login' className='otras-opciones'>Tengo una cuenta</Link>
          <Link to='/Cuenta/Olvide-mi-contraseña' className='otras-opciones'>Olvidé mi contraseña</Link>
        </div>
      </div>
      )}
    </>
  );
};

export default Register;