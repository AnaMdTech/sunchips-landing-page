import ProductCard from "./ProductCard";
import { chipsList } from "./ChipsData";
import crabImg from "../assets/images/crab.png";
import hamburgerImg from "../assets/images/hamburger.png";
import cheeseImg from "../assets/images/cheese.png";

function Products() {
  return (
    <section className="products section" id="products">
      <h2 className="section__title">
        BEST SELLING <br /> PRODUCT
      </h2>

      <div className="products__container container">
        <div className="products__content grid">
          {chipsList.map((chip, index) => (
            <ProductCard key={index} chip={chip} />
          ))}
        </div>

        <img src={crabImg} alt="images" className="products__crab" />
        <img src={hamburgerImg} alt="images" className="products__humburger" />
        <img src={cheeseImg} alt="images" className="products__cheese" />
      </div>
    </section>
  );
}

export default Products;
