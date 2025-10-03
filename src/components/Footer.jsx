import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#6d2626] text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 - Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">MyCompany</h2>
          <p className="text-sm leading-relaxed">
            Building digital experiences that matter. We create solutions for
            businesses and individuals worldwide.
          </p>
        </div>

        {/* Column 2 - Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="/aboutus" className="hover:text-white transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a
                href="/products"
                className="hover:text-white transition-colors"
              >
                Products
              </a>
            </li>
            <li>
              <a href="/gallery" className="hover:text-white transition-colors">
                Gallery
              </a>
            </li>
            <li>
              <a
                href="/contactus"
                className="hover:text-white transition-colors"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: info@mycompany.com</li>
            <li>Phone: +91 99999 88888</li>
            <li>Location: Chennai, India</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} MyCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
