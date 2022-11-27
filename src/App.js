import './App.css';
import React from 'react';
import { BrowserRouter, Link, Route, Routes }  from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import Secciones from './components/Secciones';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import OlvideMiContraseña from './pages/OlvideMiContraseña/OlvideMiContraseña';
import Profile from './pages/Profile/Profile';
import getAllClaims from './js/claimsFetch';


const App = () => {
  return (
    <BrowserRouter>
        <div className="App">
          <Header />
          <Banner />
        </div>

      <Routes>
        <Route path='/' element={<Secciones />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Cuenta/Olvide-mi-contraseña' element={<OlvideMiContraseña />} />
        <Route path='/Cuenta/Registrarse' element={<Register />} />
        <Route path='/Cuenta/Profile' element= {<Profile />}/>
      </Routes>
    </BrowserRouter>
  );
};

getAllClaims()

export default App;
