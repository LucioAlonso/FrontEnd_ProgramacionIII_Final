import React, {useState} from 'react';
import '../../stylesheets/Profile.css';
import Input from './components/Input/Input'
import { BrowserRouter, Link, Route, Routes, Navigate  }  from 'react-router-dom';


const Profile = (props) => {

  const {userData} = props;
  return (
    <>
      { (userData.token != null) &&
        (<div className='contenedor'>
          <h1>entraste al perfil</h1>
          <h1>{userData.userName}</h1>
        </div>)
      }
    </>
    
  );
};

export default Profile;