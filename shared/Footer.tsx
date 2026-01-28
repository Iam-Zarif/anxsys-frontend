"use client";

import React from "react";
import {
  ChevronRight,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-5 mt-5 md:mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <a href="index.html" className="flex items-center mb-6">
              <Image
                src="/logo.svg"
                alt="ANXSYS Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </a>
            <div className="mb-6">
              <p>Plot No. 15, Road No. 16, Block-M</p>
              <p>Rupnagar, Dhaka 1216, Bangladesh</p>
              <p className="mt-3 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+880 1934 809 070</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@anxsys.com</span>
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href=""
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href=""
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href=""
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href=""
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="col-span-12 md:col-span-3 lg:col-span-2">
            <h4 className="text-white text-lg font-semibold mb-4">
              Useful Links
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-blue-400" />
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-blue-400" />
                <a href="#" className="hover:text-white transition-colors">
                  About us
                </a>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-blue-400" />
                <a href="#" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-blue-400" />
                <a href="#" className="hover:text-white transition-colors">
                  Terms of service
                </a>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-blue-400" />
                <a href="#" className="hover:text-white transition-colors">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-3 lg:col-span-2">
            <h4 className="text-white text-lg font-semibold mb-4">
              Our Services
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-blue-400" />
                <a href="#" className="hover:text-white transition-colors">
                  Web Design
                </a>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-blue-400" />
                <a href="#" className="hover:text-white transition-colors">
                  Web Development
                </a>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-blue-400" />
                <a href="#" className="hover:text-white transition-colors">
                  App Development
                </a>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-blue-400" />
                <a href="#" className="hover:text-white transition-colors">
                  Digital Marketing
                </a>
              </li>
              {/* <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-blue-400" />
                <a href="#" className="hover:text-white transition-colors">
                  Product Management
                </a>
              </li> */}
              {/* <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-blue-400" />
                <a href="#" className="hover:text-white transition-colors">
                  Marketing
                </a>
              </li> */}
              {/* <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-blue-400" />
                <a href="#" className="hover:text-white transition-colors">
                  Graphic Design
                </a>
              </li> */}
            </ul>
          </div>

          <div className="col-span-12 md:col-span-12 lg:col-span-4">
            <h4 className="text-white text-lg font-semibold mb-4">
              Our Newsletter
            </h4>
            <p className="mb-4">
              Subscribe to our newsletter and receive the latest news about our
              products and services!
            </p>
            <form
              action="forms/newsletter.php"
              method="post"
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-400 text-white"
                />
                <input
                  type="submit"
                  value="Subscribe"
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors cursor-pointer"
                />
              </div>
              <div className="loading hidden">Loading</div>
              <div className="error-message hidden text-red-400"></div>
              <div className="sent-message hidden text-green-400">
                Your subscription request has been sent. Thank you!
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="">
        <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-0 text-center">
          <p>
            © 2026 <strong className="px-1">ANXSYS</strong>. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
