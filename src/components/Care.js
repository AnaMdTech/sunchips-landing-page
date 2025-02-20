import care_chip from "../assets/images/care-chips.png";
import { motion } from "framer-motion";

function Care() {
  return (
    <section className="care section" id="care">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
        className="section__title"
      >
        ENJOY AND TAKE <br /> CARE OF YOUR HEALTH
      </motion.h2>
      <div className="care__container container grid">
        <motion.ul
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="care__list"
        >
          <li className="care__item">
            <i className="ri-plant-line"></i>
            <p>
              The potatoes that are made into snacks are grown and harvested and
              are 100% organic.
            </p>
          </li>

          <li className="care__item">
            <i className="ri-fire-line"></i>
            <p>
              We fry the fries with vegetable and natural oil for good care.
            </p>
          </li>

          <li className="care__item">
            <i className="ri-heart-pulse-line"></i>
            <p>
              The potatoes are not processed, once cleaned they are cooked
              without preservatives.
            </p>
          </li>

          <li className="care__item">
            <i className="ri-hand-heart-line"></i>
            <p>They contain fewer calories and less fat for good health.</p>
          </li>
        </motion.ul>

        <motion.img
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          src={care_chip}
          alt="images"
          className="care__img"
        />
      </div>
    </section>
  );
}

export default Care;
