import './App.css';
import { Route, Routes } from "react-router-dom"

import Nav from './components/web/common/Nav';
import Footer from './components/web/common/Footer';

import Home from './pages/web/Home';
import About from './pages/web/About';

function App() {
  return (
    <div className="container mx-auto">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
