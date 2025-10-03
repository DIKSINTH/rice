import React from "react";
import { motion } from "framer-motion";

const ContactUsPage = () => {
  return (
    <section className="bg-[#6d2626] py-12 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Have a question, partnership inquiry, or just want to say hello?
            Reach out to us using the form below or find us at our location.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Left - Contact Info */}
          <motion.div
            className="md:w-1/3 text-gray-100 space-y-6"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Company Info</h3>
            <p>
              <span className="font-bold">Address:</span> 123 Main Street,
              Chennai, India
            </p>
            <p>
              <span className="font-bold">Phone:</span> +1 234 567 890
            </p>
            <p>
              <span className="font-bold">Email:</span> contact@company.com
            </p>
            <p>
              <span className="font-bold">Working Hours:</span> Mon - Fri, 9:00
              AM - 6:00 PM
            </p>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            className="md:w-2/3 bg-white rounded-3xl p-6 sm:p-10 shadow-xl"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              {/* Name and Email */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative w-full sm:w-1/2">
                  <input
                    type="text"
                    id="name"
                    placeholder=" "
                    className="peer w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:top-[-8px] peer-focus:text-blue-500 peer-focus:text-sm bg-white px-1"
                  >
                    Your Name
                  </label>
                </div>

                <div className="relative w-full sm:w-1/2">
                  <input
                    type="email"
                    id="email"
                    placeholder=" "
                    className="peer w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:top-[-8px] peer-focus:text-blue-500 peer-focus:text-sm bg-white px-1"
                  >
                    Your Email
                  </label>
                </div>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  id="message"
                  placeholder=" "
                  className="peer w-full px-4 py-3 border-2 border-gray-300 rounded-xl h-36 resize-none focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-4 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:top-[-8px] peer-focus:text-blue-500 peer-focus:text-sm bg-white px-1"
                >
                  Your Message
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-2xl shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          className="mt-12 rounded-3xl overflow-hidden shadow-xl h-80 sm:h-96"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019263211146!2d-122.41941548468198!3d37.77492977975906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5e0d3d49%3A0x4c42e0f96e5aa313!2sSan%20Francisco%2C%20CA%2094110%2C%20USA!5e0!3m2!1sen!2sin!4v1696366271951!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUsPage;
