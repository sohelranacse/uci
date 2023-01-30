import { Route, Routes, useLocation } from "react-router-dom"

import Nav from './components/web/common/Nav';
import Footer from './components/web/common/Footer';

import Home from './pages/web/Home';
import About from './pages/web/About';

import { useState, useEffect } from "react";
import Loader from "./components/web/Loader";
import ScrollToTop from "./components/web/common/ScrollToTop";

const LinkScroll = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)

  }, [pathname])
  return null
}


function App() {

  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <>
          <LinkScroll />
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
          <ScrollToTop />
        </>
      )
      }
    </>
  );
}

export default App;
