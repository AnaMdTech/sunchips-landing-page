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
  const [cartItems, setCartItems] = useState(() => {
    // Load cartItems from localStorage or initialize as an empty array
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [isScrollUpVisible, setIsScrollUpVisible] = useState(false);
  const location = useLocation();

  // Add item to cart
  const handleAddToCart = (chip) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === chip.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === chip.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...chip, quantity: 1 }];
      }
    });
  };

  // Save cartItems to localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Scroll event handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsHeaderScrolled(scrollY >= 50);
      setIsScrollUpVisible(scrollY >= 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {location.pathname !== "/shopping-cart" && (
        <Header isScrolled={isHeaderScrolled} />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main>
                <Home />
                <Favorites />
                <Care />
                <Banner />
                <Products handleAddToCart={handleAddToCart} />
                <Contact />
                <ScrollUpBtn isVisible={isScrollUpVisible} />
              </Main>
              <Footer />
            </>
          }
        />
        <Route
          path="/shopping-cart"
          element={
            <ShoppingCart
              cartItems={cartItems}
              handleClearCart={() => setCartItems([])}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
