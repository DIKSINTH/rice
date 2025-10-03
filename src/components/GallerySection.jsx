import React from "react";
import { motion } from "framer-motion";

const GallerySection = () => {
  const images = [
    "https://images.pexels.com/photos/7156888/pexels-photo-7156888.jpeg",
    "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg",
    "https://images.pexels.com/photos/7156885/pexels-photo-7156885.jpeg",
    "https://images.pexels.com/photos/7156887/pexels-photo-7156887.jpeg",
    "https://images.pexels.com/photos/7156884/pexels-photo-7156884.jpeg",
    "https://images.pexels.com/photos/7156883/pexels-photo-7156883.jpeg",
    "https://images.pexels.com/photos/7156882/pexels-photo-7156882.jpeg",
    "https://images.pexels.com/photos/7156881/pexels-photo-7156881.jpeg",
    "https://images.pexels.com/photos/7156880/pexels-photo-7156880.jpeg",
    "https://images.pexels.com/photos/7156879/pexels-photo-7156879.jpeg",
    "https://images.pexels.com/photos/7156878/pexels-photo-7156878.jpeg",
    "https://images.pexels.com/photos/7156877/pexels-photo-7156877.jpeg",
    "https://images.pexels.com/photos/7156876/pexels-photo-7156876.jpeg",
    "https://images.pexels.com/photos/7156875/pexels-photo-7156875.jpeg",
    "https://images.pexels.com/photos/7156874/pexels-photo-7156874.jpeg",
    "https://images.pexels.com/photos/7156873/pexels-photo-7156873.jpeg",
    "https://images.pexels.com/photos/7156872/pexels-photo-7156872.jpeg",
    "https://images.pexels.com/photos/7156871/pexels-photo-7156871.jpeg",
    // "https://images.pexels.com/photos/7156870/pexels-photo-7156870.jpeg",
  ];

  return (
    <section className="py-12 px-6 md:px-12 lg:px-20 bg-[#6d2626]">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-100 mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Gallery
        </motion.h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer border border-transparent hover:border-blue-400 transition-all duration-500"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04 }}
            >
              {/* Image */}
              <img
                src={src}
                alt={`Rice Bag Cover ${index + 1}`}
                className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-95"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center">
                <p className="text-white text-sm translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  Rice Bag Cover {index + 1}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-10">
          <motion.button
            className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition-transform"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            View More
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
