import React, {useState} from 'react';
import '../../stylesheets/Profile.css';
import Input from './components/Input/Input'
import { BrowserRouter, Link, Route, Routes, Navigate  }  from 'react-router-dom';
import useUser from '../../hooks/useUser';

const Profile = () => {

  const {userData, personData} = useUser()

console.log(userData)
console.log(personData)

  return (
    <>
      { (userData != null) ?
        (<div className='contenedor'>
          <h1>entraste al perfil</h1>

        </div>
        ) : (
          <Navigate to='/login' />
        )
      }
    </>
    
  );
};

export default Profile;