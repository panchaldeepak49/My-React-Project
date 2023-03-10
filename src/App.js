import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import Home from './components/Home';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </Router>
    
      
    </>
  );
}

export default App;
