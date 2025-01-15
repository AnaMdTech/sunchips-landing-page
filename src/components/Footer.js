import Logo from "../assets/images/logo.png";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <a href="/" className="footer__logo">
          <img src={Logo} alt="logo" className="footer__img" />
        </a>

        <div className="footer__content grid">
          <a href="/" className="footer__link">
            Terms & Agreements
          </a>
          <a href="/" className="footer__link">
            Privacy Policy
          </a>

          <span className="footer__copy">
            &#169; All rights reserved <br /> SunChips Made by{" "}
            <a href="/">AnaMdTech</a>.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
