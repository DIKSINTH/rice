import React from "react";

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
    "https://images.pexels.com/photos/7156870/pexels-photo-7156870.jpeg",
  ];

  return (
    <section className="py-12 px-6 md:px-12 lg:px-20 bg-[#6d2626]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-10">
          Gallery
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {images.map((src, index) => (
            <div key={index} className="relative group">
              <img
                src={src}
                alt={`Rice Bag Cover ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                <p className="absolute bottom-2 left-2 text-white text-sm">
                  Rice Bag Cover {index + 1}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
