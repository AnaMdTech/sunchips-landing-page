import sunchips_habesha_spice from "../assets/images/sunchips-habesha-spice-flavor.png";
import sunchips_natural from "../assets/images/sunchips-natural-flavor.png";
import sunchips_tomato from "../assets/images/sunchips-tomato-flavor.png";
function Favorites() {
  return (
    <div className="favorite__container section" id="favorites">
      <div className="favorite__content">
        <h1>Discover Your Favorite Flavor</h1>
        <p>
          Enjoy the authentic taste of ethiopia with SunChips! From classic
          original salt to the bold Habesha blend, our chips are crafted with
          local ingredients for a truly savory snack.
        </p>
      </div>
      <div className="favorite__imgs">
        <img src={sunchips_habesha_spice} alt="sunchips_habesha_spice" />
        <img src={sunchips_natural} alt="sunchips_natural" />
        <img src={sunchips_tomato} alt="sunchips_tomato" />
      </div>
    </div>
  );
}

export default Favorites;
