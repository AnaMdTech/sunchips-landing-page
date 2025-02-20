import contactMan from "../assets/images/contact-man.png";
import shrimpImg from "../assets/images/shrimp.png";
import crabImg from "../assets/images/crab.png";
import meatImg from "../assets/images/meat.png";
import { motion } from "framer-motion";
function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="contact__container container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="section__title"
        >
          CONTACT US TO <br /> EAT CHIPS
        </motion.h2>

        <div className="contact__content grid">
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="contact__data grid"
          >
            <div>
              <h3 className="contact__title">Write to us</h3>

              <div className="contact__social">
                <a href="/" target="_blank">
                  <i className="ri-whatsapp-fill"></i>
                </a>

                <a href="/" target="_blank">
                  <i className="ri-messenger-fill"></i>
                </a>

                <a href="/" target="_blank">
                  <i className="ri-mail-fill"></i>
                </a>
              </div>
            </div>

            <div>
              <h3 className="contact__title">Call us</h3>

              <address className="contact__info">
                +251 952 846 435 <br /> +251 926 907 001 <br /> +251 978 901 736
              </address>
            </div>

            <div>
              <h3 className="contact__title">Find us here</h3>

              <address className="contact__info">
                Lima - Sun City - Peru <br />
                Av. Moon #4321
              </address>
            </div>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            src={contactMan}
            alt="contact__img"
            className="contact__img"
          />
        </div>

        <img
          src={shrimpImg}
          alt="contact__shrimp"
          className="contact__shrimp"
        />
        <img src={crabImg} alt="contact__crab" className="contact__crab" />
        <img src={meatImg} alt="contact__meat" className="contact__meat" />
      </div>
    </section>
  );
}

export default Contact;
