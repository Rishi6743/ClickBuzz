import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Wedding from './components/Wedding';
import { Route, Routes } from 'react-router-dom';
import Contactus from './components/Contactus';
import Instagram from './components/Instagram';
import Gallery from './components/Gallery';
import Fashion from './components/Fashion';
import Documentary from './components/Documentary';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
        <div >
      <Routes>
       <Route element={<Hero/> } path="/"/>
          <Route element={<Wedding />} path="/wedding" /> 
          <Route element={<Contact />} path="/Contact" /> 
          <Route element={<Fashion />} path="/fashion" /> 
          <Route element={<Documentary />} path="/docmentary" /> 
          <Route element={<Contactus />} path="/Contactus" /> 
          <Route element={<Gallery />} path="/gallery" /> 
          
      </Routes>
      </div>
      <Instagram/>
      <Footer/>
    </>
  );
}

export default App;


