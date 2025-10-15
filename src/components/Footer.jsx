import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0f] border-t border-white/10 text-white font-['Poppins']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
             <img src="/SailsLogoLight1.png" className='h-20 w-auto' alt="" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Software Solutions
            </p>
            <p className="text-gray-400 text-sm">
              Building partnerships with technology vendors rooted in fairness, 
              integrity and transparency.
            </p>
            
            {/* Newsletter */}
            <div className="pt-4">
              <p className="text-sm font-medium mb-3">Subscribe for updates</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105">
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  AI & Beyond
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Industries
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start space-x-2">
                <span className="text-blue-400">📍</span>
                <span>INDIA (Headquarters)<br />North Carolina 101909, Mohali</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-400">📍</span>
                <span>USA (Los Angeles)<br />4141, Ste B, Los Angeles, CA 90066</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-400">📧</span>
                <a href="mailto:admin@sailssoftware.com" className="hover:text-white transition-colors">
                  admin@sailssoftware.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © 2025 Sails Software. All Rights Reserved
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Follow Us On:</span>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 text-gray-400 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 text-gray-400 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5 text-gray-400 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 text-gray-400 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;