import React from "react";
// import { useNavigate } from "react-router-dom"; // for navigation

const ProductSection = () => {
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
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col items-start text-left"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-500 text-sm mb-1">{product.category}</p>
              <p className="text-blue-600 font-medium mb-2">{product.price}</p>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                {product.description}
              </p>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-10">
          <button
            // onClick={() => navigate("/products")}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
          >
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
