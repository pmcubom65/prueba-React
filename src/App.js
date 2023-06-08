import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Routes, Route , Link} from "react-router-dom";
import Inicio from './pages/Inicio';
import Series from './pages/Series';
import Peliculas from './pages/Peliculas';
import Header from './components/Header';





function App() {
  return (
    <div className="App">
      <Router>
        <Header />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/series' element={<Series />} />
        <Route path='/movies' element={<Peliculas />} />




      </Routes>
      </Router>
    </div>
  );
}

export default App;
