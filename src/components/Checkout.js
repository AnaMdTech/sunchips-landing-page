import { useNavigate } from "react-router-dom";

function Checkout({
  cartItems,
  handleClearCart,
  handleRemoveFromCart,
  totalPrice,
}) {
  const navigate = useNavigate();

  const handleBackButton = (e) => {
    e.preventDefault();
    navigate("/shopping-cart");
  };

  return (
    <div className="checkout" id="checkout">
      <header className="cart__header">
        <button className="cart__back--btn" onClick={handleBackButton}>
          <i className="ri-arrow-left-line cart__back--icon"></i>
        </button>
        <h1>Checkout</h1>
      </header>
      <form className="checkout__form">
        <div className="checkout__container">
          <h2>Checkout</h2>
          <div className="checkout__name">
            <label htmlFor="name">Full Name</label>
            <input type="text" className="checkout__input" />
          </div>
          <div className="checkout__phone">
            <label htmlFor="phone number">Phone Number</label>
            <input type="tel" className="checkout__input" />
          </div>
          <div className="checkout__address">
            <label htmlFor="address">Address</label>
            <input type="text" className="checkout__input" />
          </div>
          <div className="checkout__zone">
            <div className="checkout__country">
              <label htmlFor="country">Country</label>
              <select type="text" className="checkout__input">
                <option value="">Choose..</option>
                <option value="1">Country 1</option>
                <option value="2">Country 2</option>
                <option value="3">Country 3</option>
              </select>
            </div>

            <div className="checkout__city">
              <label htmlFor="city">City</label>
              <select type="text" className="checkout__input">
                <option value="">Choose..</option>
                <option value="1">City 1</option>
                <option value="2">City 2</option>
                <option value="3">City 3</option>
              </select>
            </div>
          </div>
          <div className="checkout__details">
            <div className="checkout__quantity">
              <h2>Total Quantity</h2>
              <p>{cartItems.length}</p>
            </div>
            <div className="checkout__total">
              <h2>Total Price</h2>
              <p>{totalPrice.toFixed(2)} Br</p>
            </div>
          </div>
          <button className="checkout__payment">Checkout</button>
        </div>
      </form>
    </div>
  );
}

Checkout.defaultProps = {
  cartItems: [],
};

export default Checkout;
