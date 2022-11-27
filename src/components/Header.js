import React from 'react';
import '../stylesheets/Header.css';
import Header_User from './Header_User';
import Header_Logo from './Header_Logo';

const Header = () => {
  //aca puedo meter una funcion logica que devuelva una cosa o la otra si el usuario inicio sesion o no.

  

  return (
      <div className='header-principal'>
        <Header_Logo />
        <Header_User />
      </div>   
  );
}

export default Header;