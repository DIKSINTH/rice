import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="w-full bg-[#6d2626] py-20 px-6 md:px-25 lg:px-30 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.img
            src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="About Us"
            className="rounded-2xl shadow-lg object-cover cursor-pointer max-w-md w-full max-h-[500px]"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            About Us
          </motion.h2>
          <motion.p
            className="text-gray-100 leading-relaxed mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            We are a team of passionate creators dedicated to building digital
            experiences that matter. Our mission is to deliver meaningful and
            impactful solutions for businesses and individuals worldwide. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Vero sint rerum
            a aliquam, reiciendis laborum accusamus eos ex quidem harum!
          </motion.p>
          <motion.p
            className="text-gray-100 leading-relaxed mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            With a focus on innovation, collaboration, and creativity, we strive
            to push the boundaries of what’s possible in technology and design.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. excepturi?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            dolores, quisquam consectetur et placeat culpa earum eius voluptates
            quaerat libero!
          </motion.p>
          <motion.p
            className="text-gray-100 leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            From small startups to large enterprises, we believe in creating
            value-driven solutions that inspire growth and success. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Porro, mollitia. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Nesciunt nihil sapiente
            quo atque voluptates animi amet, exercitationem quibusdam dolore
            iste.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
