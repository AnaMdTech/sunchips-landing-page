import { useNavigate } from "react-router-dom";
import Beef from "../assets/images/sunchips-beef-flavor.png";
function ShoppingCart() {
  const navigate = useNavigate(); // Hook to navigate programmatically

  return (
    <div className="shopping__cart" id="shopping-cart">
      <header className="cart__header">
        <button
          className="cart__back--btn"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          <i className="ri-arrow-left-line cart__back--icon"></i>
        </button>
        <h1>Shopping Cart</h1>
      </header>
      <div className="cart__container">
        <h1 className="cart__title">your bag</h1>
        <div className="item-container">
          <div className="item">
            <div className="item__image">
              <img src={Beef} alt="item" />
            </div>
            <div className="item__details">
              <h2>item 1</h2>
              <p>399Br</p>
              <button className="remove-btn">Remove</button>
            </div>
            <div className="item__quantity">
              <i className="ri-arrow-up-s-line"></i>
              <span>1</span>
              <i className="ri-arrow-down-s-line"></i>
            </div>
          </div>
          <div className="item">
            <div className="item__image">
              <img src={Beef} alt="item" />
            </div>
            <div className="item__details">
              <h2>item 1</h2>
              <p>399Br</p>
              <button className="remove-btn">Remove</button>
            </div>
            <div className="item__quantity">
              <i className="ri-arrow-up-s-line"></i>
              <span>1</span>
              <i className="ri-arrow-down-s-line"></i>
            </div>
          </div>
          <div className="item">
            <div className="item__image">
              <img src={Beef} alt="item" />
            </div>
            <div className="item__details">
              <h2>item 1</h2>
              <p>399Br</p>
              <button className="remove-btn">Remove</button>
            </div>
            <div className="item__quantity">
              <i className="ri-arrow-up-s-line"></i>
              <span>1</span>
              <i className="ri-arrow-down-s-line"></i>
            </div>
          </div>
          {/* <div className="cart__empty-message">your cart is empty!</div> */}
        </div>
        <div className="cart__total">
          <h2>Total</h2>
          <p>399Br</p>
        </div>
        <div className="cart__buttons">
          <a href="/checkout" className="button">
            Checkout
          </a>
          <button className="clear-cart button">Clear Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
