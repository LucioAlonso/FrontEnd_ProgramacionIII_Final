import React from 'react';
import { BrowserRouter, Link, Route, Routes }  from 'react-router-dom';
import Banner from './Banner';
import Header from './Header';
import Secciones from './Secciones';

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
    </div>
  );
}

export default Home;