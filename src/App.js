import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Secciones from './components/Secciones';
import Claims from './js/claimsFetch'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Secciones />
      <button ={Claims.getAllClaims}>hola</button>
    </div>
  );
};

export default App;
