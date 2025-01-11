import img1 from "../assets/images/favorite-chips-1.png";
import img2 from "../assets/images/favorite-chips-2.png";
import img3 from "../assets/images/favorite-chips-3.png";
import img5 from "../assets/images/sunchips-paprika-flavor.png";
import img6 from "../assets/images/sunchips-habesha-spice-flavor.png";
import crubImg from "../assets/images/cheese.png";
import cheeseImg from "../assets/images/crab.png";
import hamburger from "../assets/images/hamburger.png";
import cart from "../assets/images/cart-design.png";

const chipsList = [
  {
    type: "Tomato Flavor",
    title: "SunChips",
    price: "13",
    img: img1,
  },
  {
    type: "Tomato Flavor",
    title: "SunChips",
    price: "13",
    img: img2,
  },
  {
    type: "Tomato Flavor",
    title: "SunChips",
    price: "13",
    img: img3,
  },
  {
    type: "Habesha Spice",
    title: "SunChips",
    price: "13",
    img: img5,
  },
  {
    type: "Habesha Spice",
    title: "SunChips",
    price: "13",
    img: img6,
  },
];

function Products() {
  return (
    <div className="product__section">
      <h1>BEST SELLING PRODUCT</h1>
      <img className="scribble cheeseImg" src={crubImg} alt="" />
      <img className="scribble crubImg" src={cheeseImg} alt="" />
      <img className="scribble hamburger" src={hamburger} alt="" />

      <ul className="product__cont">
        {chipsList.map((chip) => (
          <Chips chip={chip} />
        ))}
      </ul>
    </div>
  );
}

function Chips({ chip }) {
  return (
    <li className="list">
      <div className="imgCont">
        <img className="img1" src={chip.img} alt="card" />
        <div>
          <h3>{chip.type}</h3>
          <h2>{chip.title}</h2>
          <div className="product__lower">
            <p>{chip.price}Br</p>
            <button className="button1">
              <img src={cart} alt="" />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Products;
