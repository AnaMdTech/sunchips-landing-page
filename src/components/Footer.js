import Logo from "../assets/images/logo.png";
import { motion } from "framer-motion";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <a href="/" className="footer__logo">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            src={Logo}
            alt="logo"
            className="footer__img"
          />
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
