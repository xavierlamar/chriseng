import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import AboutPage from './pages/AboutPage/AboutPage';
import Contact from './pages/ContactPage/Contact';
import ProductService from './pages/ProductServices/ProductService';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Admin from './pages/Admin/Admin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="product_services" element={<ProductService />} />
          <Route path="product_details" element={<ProductDetails />} />
          <Route path="contact" element={<Contact />} />
          <Route path="dashboard" element={<Admin />} />
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
