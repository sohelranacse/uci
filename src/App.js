import { Route, Routes } from "react-router-dom"

import Nav from './components/web/common/Nav';
import Footer from './components/web/common/Footer';

import Home from './pages/web/Home';
import About from './pages/web/About';

import { useState, useEffect } from "react";
import Loader from "./components/web/Loader";

function App() {

  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </>
      )
      }
    </>
  );
}

export default App;
