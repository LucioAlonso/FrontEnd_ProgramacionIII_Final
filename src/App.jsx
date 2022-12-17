import './App.css';
import React, {useState} from 'react';
import { BrowserRouter, Route, Routes}  from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import Secciones from './components/Secciones';
import Claim_New from './components/Claim_New';
import Login from './components/Login';
import Register from './components/Register';
import OlvideMiContraseña from './components/OlvideMiContraseña';
import Profile from './components/Profile';
import UserContext from './context/UserContext';
import Claim_History from './components/Claim_History';

const App = () => {

  const [userData, setUserData] = useState(null)
  const [claimsData, setClaimsData] = useState(null)
  const [personData, setPersonData] = useState(null)

  function login(userData) {
    setUserData(userData)
  }

  function unlogin() {
    console.log('estoy aca')
    setUserData(null)
    setClaimsData(null)
  }

  function getPersonData(personData) {
    setPersonData(personData)
  }

  return (  
    <UserContext.Provider value={{unlogin ,login, getPersonData, userData, personData}}>      
      <BrowserRouter>
              <div className="App">   
                <Header />
                <Banner />
              </div>
            <Routes>
              {/*DIRECCIONES PUBLICAS*/}
              <Route path='/' element={<Secciones />} />
              <Route path='/login' element={<Login login={login} getPersonData={getPersonData}/>} />
              <Route path='/Cuenta/Olvide-mi-contraseña' element={<OlvideMiContraseña />} />
              <Route path='/register' element={<Register />} />

              {/*DIRECCIONES USUARIOS COMUNES LOGUEADOS*/}
              <Route path='/Cuenta/Profile' element= {<Profile unlogin={unlogin}/>}/>
              <Route path='/Reclamos/Nuevo' element= {<Claim_New />}/>
              <Route path='/Reclamos/Historial' element= {<Claim_History />}/>

              {/*DIRECCIONES ADMINISTRADORES*/}
              <Route path='/Reclamos' element= {<Claim_History />                  /* PARA DAR DE BAJA RECLAMOS DE UN USUARIO  */}/>
              <Route path='/Cuenta' element= {<Claim_History />                    /* PARA DAR DE BAJA LA CUENTA DE UN USUARIO */}/>
              <Route path='/Cuenta/Reclamos/Historial' element= {<Claim_History/>  /* PARA VER DE BAJA LA CUENTA DE UN USUARIO */}/>
              
            </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
};


export default App;
