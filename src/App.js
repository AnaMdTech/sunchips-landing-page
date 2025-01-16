import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Care from "./components/Care";
import Contact from "./components/Contact";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Main from "./components/Main";
import Products from "./components/Products";
import Banner from "./components/Banner";
import ScrollUpBtn from "./components/ScrollUpBtn";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false); // State for Header
  const [isScrollUpVisible, setIsScrollUpVisible] = useState(false); // State for ScrollUpBtn
  const location = useLocation(); // Get the current route

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Logic for Header visibility
      setIsHeaderScrolled(scrollY >= 50);

      // Logic for ScrollUpBtn visibility
      setIsScrollUpVisible(scrollY >= 300); // Show ScrollUpBtn at 300px
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Render Header only if not on Shopping Cart page */}
      {location.pathname !== "/shopping-cart" && (
        <Header isScrolled={isHeaderScrolled} />
      )}

      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <Main>
                <Home />
                <Favorites />
                <Care />
                <Banner />
                <Products />
                <Contact />
                <ScrollUpBtn isVisible={isScrollUpVisible} />
              </Main>
              <Footer />
            </>
          }
        />

        {/* Shopping Cart Route */}
        <Route path="/shopping-cart" element={<ShoppingCart />} />
      </Routes>
    </>
  );
}

export default App;
