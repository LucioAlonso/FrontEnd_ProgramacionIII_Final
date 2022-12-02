import './App.css';
import React, {useState} from 'react';
import { BrowserRouter, Link, Navigate, Route, Routes}  from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import Secciones from './components/Secciones';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import OlvideMiContraseña from './pages/OlvideMiContraseña/OlvideMiContraseña';
import Profile from './pages/Profile/Profile';
import { loginUser } from './js/userFetch';
import UserContext from './context/UserContext';

const App = () => {

  const [userData, setUserData] = useState(null)
  const [personData, setPersonData] = useState(null)

  function login(userData) {
    setUserData(userData)
  }

  function getPersonData(personData) {
    setPersonData(personData)
  }

  return (  
    <UserContext.Provider value={{login, getPersonData, userData, personData}}>      
      <BrowserRouter>
              <div className="App">   
                <Header />
                <Banner />
              </div>
            <Routes>
              <Route path='/' element={<Secciones />} />
              <Route path='/login' element={<Login login={login} getPersonData={getPersonData}/>} />
              <Route path='/Cuenta/Olvide-mi-contraseña' element={<OlvideMiContraseña />} />
              <Route path='/register' element={<Register />} />
              <Route path='/Cuenta/Profile' element= {<Profile />}/>
            </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
};


export default App;
