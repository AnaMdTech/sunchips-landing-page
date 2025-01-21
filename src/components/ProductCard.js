const ProductCard = ({ chip, handleAddToCart }) => {
  const handleBuyClick = (e) => {
    e.preventDefault();
    const newChip = {
      id: chip.id,
      title: chip.title,
      type: chip.type,
      price: chip.price,
      img: chip.img,
      quantity: 1,
    };
    handleAddToCart(newChip);
  };

  return (
    <div>
      <article className="products__card">
        <img
          src={chip.img}
          alt="images"
          className="products__img"
          data-img={chip.img}
        />

        <span className="products__subtitle" data-subtitle={chip.type}>
          {chip.type}
        </span>
        <h2 className="products__title" data-title={chip.title}>
          {chip.title}
        </h2>

        <span className="products__price" data-price={chip.price}>
          {chip.price}Br
        </span>
        <button
          className="products__button"
          data-id={chip.type}
          onClick={handleBuyClick}
        >
          <i className="ri-shopping-bag-3-fill"></i>
        </button>
      </article>
    </div>
  );
};

export default ProductCard;
