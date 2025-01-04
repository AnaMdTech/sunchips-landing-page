import Logo from "../assets/images/logo.png";
import { useState } from "react";

function Header({ isScrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`header ${isScrolled ? "shadow-header" : ""}`}
      id="header"
    >
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          <img src={Logo} alt="SunChips logo" />
        </a>

        <div
          className={`nav__menu ${menuOpen ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li>
              <a href="#home" className="nav__link active-link">
                Home
              </a>
            </li>

            <li>
              <a href="#favorites" className="nav__link">
                Favorites
              </a>
            </li>

            <li>
              <a href="#care" className="nav__link">
                Care
              </a>
            </li>

            <li>
              <a href="#products" className="nav__link">
                Products
              </a>
            </li>

            <li>
              <a href="#contact" className="nav__link">
                Contact
              </a>
            </li>
          </ul>

          {/* <!-- Nav Close --> */}
          <div
            className="nav__close"
            id="nav-close"
            onClick={() => setMenuOpen(false)}
          >
            <i className="ri-close-line"></i>
          </div>
        </div>

        <div className="nav__buttons">
          <div
            className={`nav__link--cart ${menuOpen ? "hidden" : ""}`}
            id="cart-link"
          >
            <i
              className="ri-shopping-basket-line cart__icon"
              id="cart-icon"
              data-toggle="modal"
              data-target="#cart-modal"
            ></i>
            <span className="cart__count" id="cart-count">
              0
            </span>
          </div>

          {/* <!-- Toggle Button --> */}
          <div
            className="nav__toggle"
            id="nav-toggle"
            onClick={() => setMenuOpen(true)}
          >
            <i className="ri-apps-2-fill"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
