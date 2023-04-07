import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Insurances from './Pages/Insurances';
import Treatment from './Pages/Treatment';
import Physicians from './Pages/Physicians';
import Aboutus from './Pages/Aboutus';
import Contact from './Pages/Contact';
import NotFound404 from './Pages/NotFound404';

function App() {
  return (
    <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/insurances' element={<Insurances/>}/>
    <Route path='/treatment' element={<Treatment/>}/>
    <Route path='/physicians' element={<Physicians/>}/>
    <Route path='/about' element={<Aboutus/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/*' element={<NotFound404/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
    </>
  );
}

export default App;
