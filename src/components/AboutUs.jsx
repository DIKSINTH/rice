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
            className="rounded-2xl shadow-lg w-full h-auto object-cover cursor-pointer"
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
            ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
            veniam est at excepturi eum, officiis officia aspernatur quo sequi
            amet, inventore quia. Alias neque ab nihil tempora fugit quidem
            dolorem. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Unde velit minus corrupti corporis provident exercitationem, sint
            officia fugiat nulla quod, nemo perferendis eum sit tenetur vel.
            Quaerat accusantium neque delectus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Vel, ab ducimus consequuntur dolorem
            rem, libero velit at fugit est asperiores debitis? Iste error,
            placeat provident quos cum earum quisquam eveniet voluptatum modi
            dignissimos iure! Doloribus deleniti itaque veritatis sunt dolor.
          </motion.p>
          <motion.p
            className="text-gray-100 leading-relaxed mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            With a focus on innovation, collaboration, and creativity, we strive
            to push the boundaries of what’s possible in technology and design.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            voluptates doloremque perspiciatis, sit mollitia similique sint
            autem! Eius, ratione reprehenderit ullam, sunt a error esse
            molestias pariatur dolores aliquam repellendus tempora minima, sit
            voluptatem expedita veritatis voluptatum non. Iste, quasi! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Corporis minima
            animi alias ullam architecto exercitationem magni rem aut at
            excepturi?
          </motion.p>
          <motion.p
            className="text-gray-100 leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            From small startups to large enterprises, we believe in creating
            value-driven solutions that inspire growth and success. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Expedita sit quod
            obcaecati cum omnis qui, sint necessitatibus iure beatae illo
            quisquam! Dolorum sunt voluptatem, provident harum error commodi
            exercitationem aperiam qui quisquam reiciendis rem enim officia
            voluptatibus dolores necessitatibus facilis perferendis quos magni
            ea vel hic magnam iure earum. Nisi.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
