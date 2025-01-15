const ProductCard = ({ chip }) => {
  return (
    <div>
      <article class="products__card">
        <img src={chip.img} alt="images" class="products__img" />

        <span class="products__subtitle">{chip.type}</span>
        <h2 class="products__title">{chip.title}</h2>

        <span class="products__price">{chip.price}Br</span>
        <button class="products__button">
          <i class="ri-shopping-bag-3-fill"></i>
        </button>
      </article>
    </div>
  );
};

export default ProductCard;
