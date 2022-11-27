import React, {useState} from 'react';
import '../../stylesheets/Login.css';
import Input from './components/Input/Input'
import { BrowserRouter, Link, Route, Routes }  from 'react-router-dom';



const Register = () => {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [vpassword, setVPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false)

  function handleChange(name, value) {
    if(name === 'usuario'){
      setUser(value)
    } else if (password === 'contraseña') {
        setPassword(value)
    } else {
        setVPassword(value)
    }
  }

  function handleSubmit(){
    let account = {user, password}
    if(account){
      console.log('account:',account)
    }
  }
  

  return (
    <div className='contenedor'>
      <div className='contenedor-login'>
        <h2 className='titulo-inicio-sesion'>Crear Usuario</h2>
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
        param={passwordError}
        />
        <Input 
        attribute={{
          id: 'vcontraseña',
          name: 'vcontraseña',
          type: 'password',
          placeholder: 'Ingrese nuevamente su contraseña'
        }}
        handleChange={handleChange}
        param={passwordError}
        />
        <div className='contenedor-boton'>
          <button onClick={handleSubmit}>
            Ingresar
          </button>
        </div>
        <Link to='/login' className='otras-opciones'>Ya tengo una cuenta</Link>
        <Link to='/Cuenta/Olvide-mi-contraseña' className='otras-opciones'>Olvidé mi contraseña</Link>
      </div>
    </div>
    
  );
};

export default Register;