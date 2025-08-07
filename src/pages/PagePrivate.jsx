import PropTypes from "prop-types";

const PagePrivate = ({ scrollToEnquiry, scrollToProduct }) => {
  return (
    <section className="hero-section bg-gradient-to-b from-light to-olive py-16 px-6 text-center rounded-b-2xl border-b-8 border-[#3D9C5B]">
      <h1 className="hero-title text-3xl md:text-4xl font-bold text-olive-dark mb-4">
        Start Your Manufacturing Journey Today
      </h1>
      <p className="hero-subtitle text-gray-700 mb-8 text-lg">
        Brand your cosmetics line in <strong>3 simple steps</strong> — no fuss,
        just results.
      </p>
      <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
        <button
          className="btn-contact bg-olive-dark text-white px-6 py-2 rounded-md font-semibold"
          onClick={scrollToEnquiry}
        >
          Request Quote
        </button>
        <button
          className="btn-view bg-white text-olive-dark px-6 py-2 rounded-md font-semibold border border-gray-300"
          onClick={scrollToProduct}
        >
          View Products
        </button>
      </div>
    </section>
  );
};

PagePrivate.propTypes = {
  scrollToEnquiry: PropTypes.func,
  scrollToProduct: PropTypes.func,
};

export default PagePrivate;
