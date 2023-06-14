import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Routes, Route , Link} from "react-router-dom";
import Inicio from './pages/Inicio';
import Series from './pages/Series';
import Peliculas from './pages/Peliculas';
import Header from './components/Header';
import Footer from './components/Footer';
import { DataContext } from './Context/DataContext';
import { useState } from 'react';





function App() {

  const [data, setData]=useState({});

  const fallBackSrc='https://w7.pngwing.com/pngs/116/765/png-transparent-clapperboard-computer-icons-film-movie-poster-angle-text-logo-thumbnail.png'


  return (
    <div >
    <DataContext.Provider value={{data, setData, fallBackSrc}}>
    <div className="App" >
      <Router  basename={'https://pmcubom65.github.io/prueba-React/'}>
        <Header />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/series' element={<Series />} />
        <Route path='/movies' element={<Peliculas />} />




      </Routes>
      </Router>

      
    </div>
    <Footer />
    </DataContext.Provider>
    </div>
  );
}

export default App;
