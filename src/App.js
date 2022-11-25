import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Secciones from './components/Secciones';
import getAllClaims from './js/claimsFetch';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Secciones />
      <script>
        document.write(5 + 6);
      </script>
    </div>
  );
};

  const options = {
    method: 'GET',
    headers: {
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2MzQ1ZTQxY2VlODczNjNjNzFlMTI0MTkiLCJpYXQiOjE2NjkzOTI2NjIsImV4cCI6MTY3MDM5MjY2Mn0.pUJl8o_J_Gx-_Q5m23MICe_-zEoRblMLjYXYNTRKlq0'
    }
  }

  let url = 'http://192.168.0.134:3000/claim/all';
  fetch(url, options)
  .then(res => res.json())
  .catch(err=>console.log(err))

  getAllClaims();


export default App;
