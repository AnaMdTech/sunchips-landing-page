import { useNavigate } from "react-router-dom";

function ShoppingCart({
  cartItems,
  handleClearCart,
  handleRemoveFromCart,
  totalPrice,
  itemCounts,
  setItemCounts,
}) {
  const navigate = useNavigate();

  const handleBackButton = (e) => {
    e.preventDefault();
    navigate("/#products");
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) handleRemoveFromCart(id);
    setItemCounts((prevItemCounts) => ({ ...prevItemCounts, [id]: quantity }));
  };

  return (
    <div className="shopping__cart" id="shopping-cart">
      <header className="cart__header">
        <button className="cart__back--btn" onClick={handleBackButton}>
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
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="remove-btn"
                  >
                    Remove
                  </button>
                </div>
                <div className="item__quantity">
                  <i
                    className="ri-arrow-up-s-line"
                    onClick={() =>
                      handleQuantityChange(
                        item.id,
                        (itemCounts[item.id] || item.quantity || 1) + 1
                      )
                    }
                  ></i>
                  <span>{itemCounts[item.id] || item.quantity || 1}</span>
                  <i
                    className="ri-arrow-down-s-line"
                    onClick={() =>
                      handleQuantityChange(
                        item.id,
                        (itemCounts[item.id] || item.quantity || 1) - 1
                      )
                    }
                  ></i>
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
          <button
            className="button"
            onClick={() => {
              cartItems.length > 0 && navigate("/checkout");
            }}
          >
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
