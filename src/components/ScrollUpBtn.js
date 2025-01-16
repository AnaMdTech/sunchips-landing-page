const ScrollUpBtn = ({ isVisible }) => {
  // Function to handle scroll to top when button is clicked
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <a
      href="/"
      className={`scrollup ${isVisible ? "show-scroll" : ""}`}
      id="scroll-up"
      onClick={scrollToTop}
    >
      <i className="ri-arrow-up-line"></i>
    </a>
  );
};

export default ScrollUpBtn;
