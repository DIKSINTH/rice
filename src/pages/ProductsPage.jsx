import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"; // make sure to install framer-motion

const ProductPage = () => {
  // ✅ 30 products with real internet images
  const sampleImages = [
    "https://images.pexels.com/photos/7156888/pexels-photo-7156888.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/7156885/pexels-photo-7156885.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/7156887/pexels-photo-7156887.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  const products = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: `$${(Math.random() * 100 + 20).toFixed(2)}`,
    category: ["Electronics", "Fashion", "Home Decor", "Fitness"][i % 4],
    description:
      "This is a sample product description. High quality and best for your needs.",
    image: sampleImages[i % sampleImages.length], // cycle through internet images
  }));

  return (
    <section className="w-full py-12 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#6d2626]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-10">
          Our Products
        </h2>

        {/* ✅ Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-start text-left cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                boxShadow: "0 15px 25px rgba(0,0,0,0.2)",
              }}
            >
              <div className="overflow-hidden rounded-lg w-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 sm:h-48 md:h-56 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mt-4">
                {product.name}
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm mb-1">
                {product.category}
              </p>
              <p className="text-blue-600 font-medium mb-2 text-sm sm:text-base">
                {product.price}
              </p>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
