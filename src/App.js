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

function App() {
  // const [currentTab, setCurrentTab] = useState("Home");
  const [isScrolled, setIsScrolled] = useState("false");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setIsScrolled((prev) => (prev !== true ? true : prev)); // Update only if state changes
      } else {
        setIsScrolled((prev) => (prev !== false ? false : prev));
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header isScrolled={isScrolled} />
      <Main>
        <Home />
        <Favorites />
        <Care />
        <Banner />
        <Products />
        <Contact />
      </Main>
      <Footer />
    </>
  );
}

export default App;
