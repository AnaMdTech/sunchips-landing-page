import ProductCard from "./ProductCard";
import { chipsList } from "./ChipsData";
import crabImg from "../assets/images/crab.png";
import hamburgerImg from "../assets/images/hamburger.png";
import cheeseImg from "../assets/images/cheese.png";

function Products() {
  return (
    <section class="products section" id="products">
      <h2 class="section__title">
        BEST SELLING <br /> PRODUCT
      </h2>

      <div class="products__container container">
        <div class="products__content grid">
          {chipsList.map((chip) => (
            <ProductCard chip={chip} />
          ))}
        </div>

        <img src={crabImg} alt="images" class="products__crab" />
        <img src={hamburgerImg} alt="images" class="products__humburger" />
        <img src={cheeseImg} alt="images" class="products__cheese" />
      </div>
    </section>
  );
}

export default Products;
