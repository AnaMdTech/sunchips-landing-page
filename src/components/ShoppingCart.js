import { useNavigate } from "react-router-dom";

function ShoppingCart({ cartItems, handleClearCart }) {
  const navigate = useNavigate();

  // Calculate total price dynamically
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

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
        <h1 className="cart__title">Your Bag</h1>
        <div className="item-container">
          {cartItems.length > 0 ? (
            cartItems.map((item, idx) => (
              <div key={idx} className="item">
                <div className="item__image">
                  <img src={item.img} alt={item.title || "item"} />
                </div>
                <div className="item__details">
                  <h2>{item.type || "N/A"}</h2>
                  <p>{item.price} Br</p>
                  <button className="remove-btn">Remove</button>
                </div>
                <div className="item__quantity">
                  <i className="ri-arrow-up-s-line"></i>
                  <span>{item.quantity || 1}</span>
                  <i className="ri-arrow-down-s-line"></i>
                </div>
              </div>
            ))
          ) : (
            <div className="cart__empty-message">Your cart is empty!</div>
          )}
        </div>

        <div className="cart__total">
          <h2>Total</h2>
          <p>{totalPrice.toFixed(2)} Br</p>
        </div>
        <div className="cart__buttons">
          <button className="button" onClick={() => navigate("/checkout")}>
            Checkout
          </button>
          <button className="clear-cart button" onClick={handleClearCart}>
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}

ShoppingCart.defaultProps = {
  cartItems: [],
};

export default ShoppingCart;
