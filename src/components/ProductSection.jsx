import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"; // make sure to install framer-motion
import { useNavigate } from "react-router-dom";

const ProductSection = () => {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: "Product One",
      price: "$49.99",
      category: "Electronics",
      description:
        "High-quality wireless headphones with deep bass and clear sound.",
      image:
        "https://images.pexels.com/photos/7156888/pexels-photo-7156888.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "Product Two",
      price: "$79.99",
      category: "Fashion",
      description: "Trendy leather backpack, perfect for travel and daily use.",
      image:
        "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "Product Three",
      price: "$59.99",
      category: "Home Decor",
      description: "Elegant ceramic vase to enhance your living room ambiance.",
      image:
        "https://images.pexels.com/photos/7156885/pexels-photo-7156885.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "Product Four",
      price: "$99.99",
      category: "Fitness",
      description:
        "Smart fitness watch with heart rate monitor and step tracker.",
      image:
        "https://images.pexels.com/photos/7156887/pexels-photo-7156887.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <section className="w-full py-12 px-6 md:px-12 lg:px-20 bg-[#6d2626]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          Our Products
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-start text-left cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
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
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mt-4">
                {product.name}
              </h3>
              <p className="text-gray-500 text-sm mb-1">{product.category}</p>
              <p className="text-blue-600 font-medium mb-2">{product.price}</p>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-10">
          <motion.button
            onClick={() => navigate("/products")}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View More
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
