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
import Checkout from "./components/Checkout";

function App() {
  const [cartItems, setCartItems] = useState(() => {
    // Load cartItems from localStorage or initialize as an empty array
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [isScrollUpVisible, setIsScrollUpVisible] = useState(false);
  const location = useLocation();
  const [itemCounts, setItemCounts] = useState({});

  // Clear Cart object
  const handleClearCart = () => {
    setCartItems([]);
  };

  // Calculate total price dynamically
  const totalPrice = cartItems.reduce(
    (acc, item) =>
      acc + item.price * (itemCounts[item.id] || item.quantity || 1),
    0
  );

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

  // Remove item from cart
  const handleRemoveFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  // Save cartItems to localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Update itemCounts state when cartItems change
  useEffect(() => {
    const newitemCounts = cartItems.reduce((acc, item) => {
      acc[item.id] = item.quantity || 1;
      return acc;
    }, {});
    setItemCounts(newitemCounts);
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
      {location.pathname !== "/shopping-cart" &&
        location.pathname !== "/checkout" && (
          <Header isScrolled={isHeaderScrolled} cartItems={cartItems} />
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
              handleClearCart={handleClearCart}
              handleRemoveFromCart={handleRemoveFromCart}
              totalPrice={totalPrice}
              itemCounts={itemCounts}
              setItemCounts={setItemCounts}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <Checkout
              cartItems={cartItems}
              handleClearCart={handleClearCart}
              handleRemoveFromCart={handleRemoveFromCart}
              totalPrice={totalPrice}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
