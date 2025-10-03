import React from "react";
import "../App.css";
import Carousel from "../components/Carousel";
import AboutUs from "../components/AboutUs.jsx";
import ProductSection from "../components/ProductSection.jsx";
import GallerySection from "../components/GallerySection.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <div>
      <Carousel />
      <AboutUs />
      <ProductSection />
      <GallerySection />
    </div>
  );
}

export default Home;
