import { useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="overflow-hidden min-h-screen">
      {/* Navbar (Responsive) */}
      <nav className="bg-[#FEFEFE] text-[#666666] px-6 py-4 shadow">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">🌿</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 font-medium">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/about" className="hover:underline">
              About Us
            </Link>
            <Link to="/contract" className="hover:underline">
              Contract Manufacturing
            </Link>
            <Link to="/private" className="hover:underline">
              Private Labelling
            </Link>
            <Link to="/corporate" className="hover:underline">
              Corporate Gifting
            </Link>
          </div>

          {/* Right Side Icons (Desktop Only) */}
          <div className="hidden md:flex items-center gap-4">
            <button className="hover:underline">Sign-In</button>
            <span>👜</span>
          </div>

          {/* Hamburger for Mobile/Tablet */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col gap-4 mt-4 text-sm font-medium">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:underline"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:underline"
            >
              About Us
            </Link>
            <Link
              to="/contract"
              onClick={() => setMenuOpen(false)}
              className="hover:underline"
            >
              Contract Manufacturing
            </Link>
            <Link
              to="/private"
              onClick={() => setMenuOpen(false)}
              className="hover:underline"
            >
              Private Labelling
            </Link>
            <Link
              to="/corporate"
              onClick={() => setMenuOpen(false)}
              className="hover:underline"
            >
              Corporate Gifting
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="hover:underline text-left"
            >
              Sign-In
            </button>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* Hero Section */}
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
                      <button className="bg-white text-[#6F8675] px-4 py-2 rounded font-semibold">
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

              {/* Other Home Sections */}
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

        {/* Other Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contract" element={<Contract />} />
        <Route path="/private" element={<PrivateLabelling />} />
        <Route path="/corporate" element={<CorporateGifting />} />
      </Routes>
    </div>
  );
}
