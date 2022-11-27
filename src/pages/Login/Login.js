import React, {useState} from 'react';
import '../../stylesheets/Login.css';
import Input from './components/Input/Input'
import { BrowserRouter, Link, Navigate, Route, Routes, useNavigate }  from 'react-router-dom';
import {loginUser} from '../../js/userFetch';
import { Redirect, useHistory } from 'react-router';


const Login = () => {

  let navigate = useNavigate();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin ] = useState(false);
  const [hasError, setHasError] = useState(false);

  function handleChange(name, value) {
    if(name === 'usuario'){
      setUser(value)
    } else {
      setPassword(value)
    }
  }

  const ifMatch = async (param) => {
    if(param.user.length > 0 && param.password.length > 0){
      const token = loginUser(param.user, param.password);
      if(token != null){
        setIsLogin(true);
      } else {                     //ACA TENGO QUE PONER QUE PASA SI NO SE LOGRA INICIAR SESION
        setIsLogin(false);
        setHasError(true)
      }   
    } else {
      setIsLogin(false);
      setHasError(true)
    }
    await console.log(isLogin)
  }

  function handleSubmit(){
    let account = {user, password}
    if(account){
      ifMatch(account);
    }
    return isLogin
  }
  

  return (
    <div className='contenedor'>
      <div className='contenedor-login'>
        <h2 className='titulo-inicio-sesion'>Inicio de Sesión</h2>
        <Input 
        attribute={{
          id: 'usuario',
          name: 'usuario',
          type: 'text',
          placeholder: 'Ingrese su usuario'
        }}
        handleChange={handleChange}
        />
        <Input 
        attribute={{
          id: 'contraseña',
          name: 'contraseña',
          type: 'password',
          placeholder: 'Ingrese su contraseña'
        }}
        handleChange={handleChange}
        />
        {hasError && 
          <label className='label-alert'>
            Nombre de usuario o contraseña invalidos
          </label>}
        <div className='contenedor-boton'>
          <button onClick={()=> handleSubmit() ? navigate("/") : null} > 
            Ingresar
          </button>
        </div>
        <Link to='/Cuenta/Registrarse' className='otras-opciones'>No tengo una cuenta</Link>
        <Link to='/Cuenta/Olvide-mi-contraseña' className='otras-opciones'>Olvidé mi contraseña</Link>
      </div>
    </div>
    
  );
};

export default Login;