import sunchips_habesha_spice from "../assets/images/sunchips-habesha-spice-flavor.png";
import sunchips_natural from "../assets/images/sunchips-natural-flavor.png";
import sunchips_tomato from "../assets/images/sunchips-tomato-flavor.png";
import { motion } from "framer-motion";
function Favorites() {
  return (
    <div className="favorite__container section" id="favorites">
      <div className="favorite__content">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="section__title"
        >
          Discover Your Favorite <br /> Flavor
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Enjoy the authentic taste of ethiopia with SunChips! From classic
          original salt to the bold Habesha blend, our chips are crafted with
          local ingredients for a truly savory snack.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, easing: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="favorite__imgs"
      >
        <img src={sunchips_habesha_spice} alt="sunchips_habesha_spice" />
        <img src={sunchips_natural} alt="sunchips_natural" />
        <img src={sunchips_tomato} alt="sunchips_tomato" />
      </motion.div>
    </div>
  );
}

export default Favorites;
