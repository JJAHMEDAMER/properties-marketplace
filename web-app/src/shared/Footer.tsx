import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-gray-300 dark:text-gray-500 py-10 md:py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-full md:col-span-1 text-center md:text-left">
          <div className="text-3xl font-bold text-indigo-400 mb-4">
            🏠 MyRealEstate
          </div>
          <p className="text-sm leading-relaxed">Apartment rental platform.</p>
        </div>

        <div>
          <h4 className="font-semibold text-white dark:text-gray-300 text-lg mb-4 text-center md:text-left">
            Quick Links
          </h4>
          <ul className="space-y-2 text-center md:text-left">
            <li>
              <a
                href="#features"
                className="hover:text-white dark:hover:text-indigo-300 transition"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="hover:text-white dark:hover:text-indigo-300 transition"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:text-white dark:hover:text-indigo-300 transition"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-white dark:hover:text-indigo-300 transition"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white dark:text-gray-300 text-lg mb-4 text-center md:text-left">
            Legal
          </h4>
          <ul className="space-y-2 text-center md:text-left">
            <li>
              <a
                href="/privacy-policy"
                className="hover:text-white dark:hover:text-indigo-300 transition"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms-of-service"
                className="hover:text-white dark:hover:text-indigo-300 transition"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/cookie-policy"
                className="hover:text-white dark:hover:text-indigo-300 transition"
              >
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white dark:text-gray-300 text-lg mb-4 text-center md:text-left">
            Contact
          </h4>
          <address className="not-italic text-center md:text-left">
            <p>123 Business Rd,</p>
            <p>Suite 100,</p>
            <p>City, State 12345</p>
            <p className="mt-2">
              Email:{" "}
              <a
                href="mailto:info@yourbrand.com"
                className="hover:text-white dark:hover:text-indigo-300 transition"
              >
                info@nawy.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+1-555-123-4567"
                className="hover:text-white dark:hover:text-indigo-300 transition"
              >
                +1 (555) 123-4567
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-gray-700 dark:border-gray-800 mt-10 pt-8 text-center text-sm text-gray-500 dark:text-gray-600">
        &copy; {currentYear} 🏠 MyRealEstate. All rights reserved.
      </div>
    </footer>
  );
}
