
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './Hero';
import Navbar from './Navbar';
import Contact from './Contact';
import Main from './Main';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path="/" element={<><Hero/><Main/></>}/>

      <Route path="/contact" element={<Contact/>}/>
      </Routes>
     
      
    </div>
  );
}

export default App;
