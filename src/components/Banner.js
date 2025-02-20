import { motion } from "framer-motion";
const Banner = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      className="banner"
    >
      <div className="banner__container">
        <ul className="banner__list">
          <li className="banner__item">
            <i className="ri-leaf-line"></i>
            <span>GOOD FOR NATURE</span>
          </li>

          <li className="banner__item">
            <i className="ri-heart-pulse-line"></i>
            <span>LOW CALORIES</span>
          </li>
        </ul>
      </div>
    </motion.section>
  );
};

export default Banner;
