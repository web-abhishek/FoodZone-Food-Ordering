import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/foodzone-logo.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="flex flex-col space-y-4">
           <Link to="/">
              <img
                src={logo}
                alt="FoodZone Logo"
                className="w-20 h-20 object-contain"
              />
            </Link>
            <p className="text-sm text-gray-400">
              Discover delicious food from your favorite restaurants. Fast,
              reliable, and always fresh.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="p-2 bg-gray-800 hover:bg-red-500 rounded-full transition-colors duration-200"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 hover:bg-red-500 rounded-full transition-colors duration-200"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 hover:bg-red-500 rounded-full transition-colors duration-200"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 hover:bg-red-500 rounded-full transition-colors duration-200"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col space-y-2">
              <Link
                to="/"
                className="hover:text-red-500 transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="hover:text-red-500 transition-colors duration-200"
              >
                About Us
              </Link>
              <Link
                to="/products"
                className="hover:text-red-500 transition-colors duration-200"
              >
                Products
              </Link>
              <Link
                to="/cart"
                className="hover:text-red-500 transition-colors duration-200"
              >
                Cart
              </Link>
              <Link
                to="/contact"
                className="hover:text-red-500 transition-colors duration-200"
              >
                Contact
              </Link>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/contact"
                  className="hover:text-red-500 transition-colors duration-200"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-red-500 transition-colors duration-200"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-red-500 transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-red-500 transition-colors duration-200"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-red-500 transition-colors duration-200"
                >
                  Feedback
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin size={18} className="text-red-500 shrink-0" />
                <span className="text-sm">
                  123 Food Street, Foodville, CV 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-red-500 shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-red-500 shrink-0" />
                <span className="text-sm">support@foodzone.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 mt-8"></div>
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <p className="text-sm text-gray-400 text-center sm:text-left mb-2 sm:mb-0">
            © {currentYear} FoodZone. All rights reserved. Designed by Abhishek
            Acharya.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
