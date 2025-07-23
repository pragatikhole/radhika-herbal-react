import { Routes, Route, Link } from "react-router-dom";
import womanImg from "../assests/woman.png";

// Home page components
import OurProducts from "../components/ourproducts";
import ProductsGrid from "../components/ProductsGrid";
import OurCertifications from "../components/ourcertifications";
import BlogSection from "../components/blogstrend";
import EnquiryForm from "../components/EnquiryForm";
import OurGifiting from "../components/ourgifiting";

// Other pages
import About from "./About";
import Contract from "./Contract";
import PrivateLabelling from "./PrivateLabelling";
import CorporateGifting from "./CorporateGifting";

export default function LandingPage() {
  return (
    <div className=" overflow-hidden min-h-screen">
      {/* Navbar (Common) */}
      <nav className="bg-[#FEFEFE] text-[#666666] px-6 py-4 flex justify-between items-center shadow">
        <div className="text-2xl font-bold">🌿</div>
        <div className="hidden md:flex gap-20">
          <Link to="/" className="hover:underline font-medium">
            Home
          </Link>
          <Link to="/about" className="hover:underline font-medium">
            About Us
          </Link>
          <Link to="/contract" className="hover:underline font-medium">
            Contract Manufacturing
          </Link>
          <Link to="/private" className="hover:underline font-medium">
            Private Labelling
          </Link>
          <Link to="/corporate" className="hover:underline font-medium">
            Corporate Gifting
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-[#666666] hover:underline">Sign-In</button>
          <span>👜</span>
        </div>
      </nav>

      {/* Page Content */}
      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              {/* Hero Section with Gradient Background */}
              <div className="bg-gradient-to-b from-[#FEFEFE] to-[#e2dddd] rounded-b-3xl overflow-hidden">
                <div className="flex flex-col md:flex-row justify-between md:px-56 pt-16 h-[300px]">
                  <div className="flex-1 flex flex-col justify-start text-center md:text-left space-y-4">
                    <p className="text-[#4B6570] text-lg">
                      Makeup & Skincare, Made for Your Brand.
                    </p>
                    <h2 className="text-4xl font-bold text-[#264653] font-[Lora]">
                      Radhika Herbals
                    </h2>
                    <div className="flex justify-center md:justify-start gap-4 mt-4">
                      <button className="bg-[#666666] text-white px-4 py-2 rounded font-semibold">
                        Contact Us
                      </button>
                      <button className=" bg-white text-[#6F8675] px-4 py-2 rounded font-semibold">
                        View Products
                      </button>
                    </div>
                  </div>

                  <div className="flex-1 flex items-end justify-center">
                    <img
                      src={womanImg}
                      alt="Woman holding product"
                      className="w-[250px] md:w-[300px] object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Other Sections: No Gradient Background */}
              <OurProducts />
              <ProductsGrid />
              <OurCertifications />
              <OurGifiting />
              <ProductsGrid />
              <BlogSection />
              <EnquiryForm />
            </>
          }
        />

        {/* OTHER PAGES */}
        <Route path="/about" element={<About />} />
        <Route path="/contract" element={<Contract />} />
        <Route path="/private" element={<PrivateLabelling />} />
        <Route path="/corporate" element={<CorporateGifting />} />
      </Routes>
    </div>
  );
}
