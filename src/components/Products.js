import ProductCard from "./ProductCard";
import { chipsList } from "./ChipsData";
import crabImg from "../assets/images/crab.png";
import hamburgerImg from "../assets/images/hamburger.png";
import cheeseImg from "../assets/images/cheese.png";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5, // Delay each child animation by 0.5s
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 1, amount: 0.5 } },
};

function Products({ handleAddToCart }) {
  return (
    <section className="products section" id="products">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
        className="section__title"
      >
        BEST SELLING <br /> PRODUCT
      </motion.h1>

      <div className="products__container container">
        <motion.div
          className="products__content grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {chipsList.map((chip, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProductCard chip={chip} handleAddToCart={handleAddToCart} />
            </motion.div>
          ))}
        </motion.div>

        <img src={crabImg} alt="images" className="products__crab" />
        <img src={hamburgerImg} alt="images" className="products__humburger" />
        <img src={cheeseImg} alt="images" className="products__cheese" />
      </div>
    </section>
  );
}

export default Products;
