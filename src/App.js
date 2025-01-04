import Care from "./components/Care";
import Contact from "./components/Contact";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Main from "./components/Main";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Home />
        <Favorites />
        <Care />
        <Products />
        <Contact />
      </Main>
      <Footer />
    </>
  );
}

export default App;
