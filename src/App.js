import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Banner from './components/Banner'
import Secciones from './components/Secciones'


const App = () => {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Secciones />
    </div>
  );
}

export default App;
