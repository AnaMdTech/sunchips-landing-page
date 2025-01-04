import meatImage from "../assets/images/meat.png";
import homeChipsImage from "../assets/images/home-chips.png";
import chipsFlavor1 from "../assets/images/chips-1.png";
import chipsFlavor2 from "../assets/images/chips-2.png";
import chipsFlavor3 from "../assets/images/chips-3.png";
import tomatoSlice1 from "../assets/images/tomato-1.png";
import tomatoSlice2 from "../assets/images/tomato-2.png";
import leafDecoration from "../assets/images/leaf-3.png";

function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__data">
          <h1 className="home__title">
            SNACK <br /> WITH NO <br /> LIMITS
          </h1>

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
            <a href="#favorites" className="button ">
              Snack Now
            </a>
            <a href="#products" className="button button__ghost">
              Buy Now
            </a>
          </div>
        </div>

        <div className="home__images">
          <div className="home__circle">
            <div className="home__subcircle"></div>
          </div>

          <img
            src={homeChipsImage}
            alt="Home display of SunChips"
            className="home__img"
          />
          <img
            src={chipsFlavor1}
            alt="SunChips bag - flavor 1"
            className="home__chips-1"
          />
          <img
            src={chipsFlavor2}
            alt="SunChips bag - flavor 2"
            className="home__chips-2"
          />
          <img
            src={chipsFlavor3}
            alt="SunChips bag - flavor 3"
            className="home__chips-3"
          />
          <img
            src={tomatoSlice1}
            alt="Tomato slice decoration"
            className="home__tomato-1"
          />
          <img
            src={tomatoSlice2}
            alt="Another tomato slice decoration"
            className="home__tomato-2"
          />
          <img
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
