const ProductCard = ({ chip }) => {
  return (
    <div>
      <article className="products__card">
        <img src={chip.img} alt="images" className="products__img" />

        <span className="products__subtitle">{chip.type}</span>
        <h2 className="products__title">{chip.title}</h2>

        <span className="products__price">{chip.price}Br</span>
        <button className="products__button">
          <i className="ri-shopping-bag-3-fill"></i>
        </button>
      </article>
    </div>
  );
};

export default ProductCard;
