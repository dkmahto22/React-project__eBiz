import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmptyCart from './components/ShoppingCart';
import UserList from './components/ApiCall';




function App() {

  return (
<>
<BrowserRouter>
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<EmptyCart />} />
        <Route path="/userlist" element={<UserList />} />
      

</Routes>
</BrowserRouter>





<div className="App">









</div>
</>  
  )
}

export default App
