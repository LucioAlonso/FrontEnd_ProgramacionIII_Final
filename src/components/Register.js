import React, {useState, useRef, useEffect } from 'react';
import '../stylesheets/Login.css';
import {Link, Navigate}  from 'react-router-dom';
import {registerUser} from '../js/userFetch';



const Register = () => {

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd ] = useState('');
  const [pwdConfirm, setPwdConfirm ] = useState('');
  const [email, setEmail ] = useState('');
  const [name, setName ] = useState('');
  const [lastName, setLasName ] = useState('');
  const [dni, setDni ] = useState('');
  const [phone, setPhone ] = useState('');

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);


  useEffect(()=> {
    userRef.current.focus();
  }, [])

  useEffect(()=> {
    setErrMsg('');
  }, [user, pwd, pwdConfirm, email, name, lastName, dni, phone])

  useEffect(()=> {
    if(pwd !== pwdConfirm){
      setErrMsg('Las contraseñas no coinciden');
    }
  }, [pwdConfirm])


  const handleSubmit = async (e) => {
    e.preventDefault();

    if(pwd === pwdConfirm){
      let registerData = await registerUser(user, pwd, name, lastName, dni, phone, email)
      if(registerData.UserAdd){
        setSuccess(true);
      } else {
        setErrMsg(registerData.err)
        setSuccess(false);
      }
    } else {
      setErrMsg('Las contraseñas no coinciden')
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
            <input 
              className='container-input'
              type='email'
              id='email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder ='Email'
              required
            />
            <input 
              className='container-input'
              type='text'
              id='name'
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder ='Nombre'
              required
            />
            <input 
              className='container-input'
              type='text'
              id='lastName'
              onChange={(e) => setLasName(e.target.value)}
              value={lastName}
              placeholder ='Apellido'
              required
            />
            <input 
              className='container-input'
              type='text'
              id='dni'
              onChange={(e) => setDni(e.target.value)}
              value={dni}
              placeholder ='DNI'
              required
            />
            <input 
              className='container-input'
              type='text'
              id='phone'
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              placeholder ='Teléfono'
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