import './App.css';
import React from 'react';
import { BrowserRouter, Link, Navigate, Route, Routes }  from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import Secciones from './components/Secciones';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import OlvideMiContraseña from './pages/OlvideMiContraseña/OlvideMiContraseña';
import Profile from './pages/Profile/Profile';
import getAllClaims from './js/claimsFetch';
import UserContext from './context/UserContext'

const App = () => {

  const userData = {
    token: null,
    userName: null,
    rol: null
};

  return (
    
    <BrowserRouter>
        <UserContext.Provider value = {userData}>
            <div className="App">   
              <Header />
              <Banner />
            </div>
          <Routes>
            <Route path='/Login' element={<Navigate to='/Cuenta/Profile' />} />
            <Route path='/' element={<Secciones />} />
            <Route path='/Cuenta/Olvide-mi-contraseña' element={<OlvideMiContraseña />} />
            <Route path='/Cuenta/Registrarse' element={<Register />} />
            <Route path='/Cuenta/Profile' element= { userData.token == null ? <Login /> : <Profile />}/>
          </Routes>
        </UserContext.Provider>
    </BrowserRouter>

    
  );
};

getAllClaims()

export default App;
