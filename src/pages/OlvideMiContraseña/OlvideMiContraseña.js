import React, {useState} from 'react';
import '../../stylesheets/OlvideMiContraseña.css';
import Input from './components/Input/Input'
import { BrowserRouter, Link, Route, Routes }  from 'react-router-dom';



const OlvideMiContraseña = () => {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  function handleChange(name, value) {
    if(name === 'usuario'){
      setUser(value)
    } else {
      setPassword(value)
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
      <p>olvide mi contrasena</p>
    </div>
    
  );
};

export default OlvideMiContraseña;