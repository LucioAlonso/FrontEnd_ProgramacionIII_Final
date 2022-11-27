import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Header_User.css';


//ACA DEPENDIENDO DE SI EL USUARIO YA INICIO SESION O NO, SE MUESTRA OTRA COSA
const Header_User = () => {
  return (
    <div className='contenedor-usuario contenedor-general'>
      <div className='foto-perfil-usuario'>
        <Link to='/login'>
          <img 
            className='foto-perfil'
            src={require('../images/foto-perfil-prueba.jpg')}
            alt='Foto de perfil del usuario'
          />
        </Link>
      </div>
    </div>
    
  );
}

export default Header_User;