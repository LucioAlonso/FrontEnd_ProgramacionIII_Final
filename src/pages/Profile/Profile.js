import React, {useState} from 'react';
import '../../stylesheets/Profile.css';
import Input from './components/Input/Input'
import { BrowserRouter, Link, Route, Routes, redirect  }  from 'react-router-dom';


const Profile = ({authorized}) => {


    console.log('No puedo entrar')
    return redirect("/Login")
  
  console.log('SI puedo entrar')
  
  return (
    <div className='contenedor'>
      <h1>entraste al perfil</h1>
    </div>
    
  );
};

export default Profile;