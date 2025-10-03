import React from "react";
import { motion } from "framer-motion";

const GalleryPage = () => {
  // ✅ 40 unique sample images using picsum.photos
  const images = Array.from(
    { length: 40 },
    (_, i) => `https://picsum.photos/id/${i + 10}/300/300`
  );

  return (
    <section className="py-12 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#6d2626]">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-100 mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Gallery
        </motion.h2>

        {/* ✅ Responsive Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer border border-transparent hover:border-blue-400 transition-all duration-500"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.02 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04 }}
            >
              {/* Image */}
              <img
                src={src}
                alt={`Gallery Item ${index + 1}`}
                className="w-full h-40 sm:h-48 md:h-56 object-cover transition-transform duration-700 group-hover:scale-95"
              />

              {/* Overlay with Title */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center">
                <p className="text-white text-sm sm:text-base translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  Gallery Item {index + 1}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
