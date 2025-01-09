import care_chip from "../assets/images/care-chips.png";
function Care() {
  return (
    <section className="care section" id="care">
      <h1 className="Care__title">
        ENJOY AND TAKE
        <br />
        CARE OF YOUR HEALTH
      </h1>
      <div className="care__container">
        <div className="care__data">
          <div className="care__description">
            <i class="ri-plant-line"></i>
            <p>
              The potatoas that are made into snacks grown and harvested are
              100% organic.
            </p>
          </div>
          <div className="care__description">
            <i class="ri-fire-line"></i>
            <p>
              We try the fries with vegetable and natural all for good care.
            </p>
          </div>
          <div className="care__description">
            <i class="ri-heart-pulse-line"></i>
            <p>
              The potatoas are not processed once cleaned ther are cooced
              without preservations.
            </p>
          </div>
          <div className="care__description">
            <i class="ri-hand-heart-line"></i>
            <p>They contain fewer calories and less fat for good health.</p>
          </div>
        </div>
        <img src={care_chip} alt="care_chip" className="care__chip" />
      </div>
    </section>
  );
}

export default Care;
