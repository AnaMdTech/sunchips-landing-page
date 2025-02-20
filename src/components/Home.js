import meatImage from "../assets/images/meat.png";
import homeChipsImage from "../assets/images/home-chips.png";
import chipsFlavor1 from "../assets/images/chips-1.png";
import chipsFlavor2 from "../assets/images/chips-2.png";
import chipsFlavor3 from "../assets/images/chips-3.png";
import tomatoSlice1 from "../assets/images/tomato-1.png";
import tomatoSlice2 from "../assets/images/tomato-2.png";
import leafDecoration from "../assets/images/leaf-3.png";
import { motion } from "framer-motion";

function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="home__data"
        >
          <motion.h1 className="home__title">
            SNACK <br /> WITH NO <br /> LIMITS
          </motion.h1>

          <p className="home__description">
            When you are hungry and don't have time to cook, snacks are the
            perfect solution, always prepare for midday hunger.
          </p>

          <img
            src={meatImage}
            alt="Fresh meat decoration"
            className="home__meat"
          />

          <div className="home__buttons">
            <a href="#favorites" className="button">
              Snack Now
            </a>
            <a href="#products" className="button button__ghost">
              Buy Now
            </a>
          </div>
        </motion.div>

        <div className="home__images">
          {/* Home Circle with Animation */}
          <motion.div
            className="home__circle"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 10 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.div
              className="home__subcircle"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.3,
                type: "spring",
                stiffness: 100,
              }}
            ></motion.div>
          </motion.div>

          {/* Other elements animate faster */}
          <motion.img
            src={homeChipsImage}
            alt="Home display of SunChips"
            className="home__img"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 1 }}
          />

          <motion.img
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.5 }}
            src={chipsFlavor1}
            alt="SunChips bag - flavor 1"
            className="home__chips-1"
          />
          <motion.img
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.7 }}
            src={chipsFlavor2}
            alt="SunChips bag - flavor 2"
            className="home__chips-2"
          />
          <motion.img
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.9 }}
            src={chipsFlavor3}
            alt="SunChips bag - flavor 3"
            className="home__chips-3"
          />
          <motion.img
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 2.1 }}
            src={tomatoSlice1}
            alt="Tomato slice decoration"
            className="home__tomato-1"
          />
          <motion.img
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 2.3 }}
            src={tomatoSlice2}
            alt="Another tomato slice decoration"
            className="home__tomato-2"
          />
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 2.3 }}
            src={leafDecoration}
            alt="Leaf decoration for SunChips theme"
            className="home__leaf"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
