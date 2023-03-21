import { Routes, Route } from 'react-router-dom';

import './App.css';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Stock from './components/Stock';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/stocks/:symbol' element={<Stock />} />
        <Route path='/stocks' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
