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

const App = (props) => {

  const [token, setToken] = useState(null)
  const [rol, setRol] = useState(null)
  const [user, setUser] = useState(null)
  const [userID, setUserID] = useState(null)


  function login(userData) {
    setToken(userData.token);
    setRol(userData.data.rol);
    setUser(userData.data.userName);
    setUserID(userData.data._id);
  }

  return (  
    <BrowserRouter>
            <div className="App">   
              <Header />
              <Banner />
            </div>
          <Routes>
            <Route path='/' element={<Secciones />} />
            <Route path='/Login' element={<Login login={login}/>} />
            <Route path='/Cuenta/Olvide-mi-contraseña' element={<OlvideMiContraseña />} />
            <Route path='/Cuenta/Registrarse' element={<Register />} />
           {/* <Route path='/Cuenta/Profile' element= { userData.token == null ? <Login /> : <Profile />}/> */}
          </Routes>
    </BrowserRouter>

    
  );
};


export default App;
