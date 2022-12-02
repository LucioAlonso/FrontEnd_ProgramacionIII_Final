import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Header_User.css';
import User_Photo from './User_Photo';
import useUser from '../hooks/useUser';
import Button_Yellow from './Button_Yellow';

//ACA DEPENDIENDO DE SI EL USUARIO YA INICIO SESION O NO, SE MUESTRA OTRA COSA
const Header_User = () => {

  const {userData} = useUser();

  return (
    <>
      {(userData != null) ? (
        <div className='contenedor-usuario contenedor-general'>   
        {/*USUARIO LOGUEADO         ES TEMPORAL*/} 
          <Link to='/Cuenta/Profile'>
            <User_Photo />
          </Link>
        </div>
      ) : (
        <div className='contenedor-botones-inicio-register'>
          {/*USUARIO NO LOGUEADO*/}  
          <div className= 'contenedor-boton'>
            <Link to='/login'>
            <Button_Yellow text={'Iniciar Sesión'}/>  
          </Link> 
          </div>
          <div className= 'contenedor-boton'>
            <Link to='/register'>
              <Button_Yellow text={'Registrarse'}/>
            </Link> 
          </div>
        </div>
      )}
    </>
  );
}

export default Header_User;