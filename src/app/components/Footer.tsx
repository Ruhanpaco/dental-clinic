'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { RiMapPin2Line, RiPhoneLine, RiMailLine, RiInstagramLine, RiFacebookLine, RiTwitterXLine } from 'react-icons/ri';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Clinic Info */}
          <div className="space-y-4">
            <h3 className="font-heading text-2xl text-white">
              WhitePearl
            </h3>
            <p className="font-body text-sm text-white">
              Luxury dental care for those who appreciate excellence in dental health and aesthetics.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ y: -2 }}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-gold hover:opacity-80 transition-opacity"
              >
                <RiInstagramLine className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-gold hover:opacity-80 transition-opacity"
              >
                <RiFacebookLine className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-gold hover:opacity-80 transition-opacity"
              >
                <RiTwitterXLine className="w-6 h-6" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="font-ui text-sm text-white hover:text-primary-gold transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="font-ui text-sm text-white hover:text-primary-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="font-ui text-sm text-white hover:text-primary-gold transition-colors">
                  Smile Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="font-ui text-sm text-white hover:text-primary-gold transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/appointment" className="font-ui text-sm text-white hover:text-primary-gold transition-colors">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-xl mb-4 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <RiMapPin2Line className="w-5 h-5 text-primary-gold" />
                <span className="font-ui text-sm text-white">
                  123 Luxury Lane, Beverly Hills, CA 90210
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <RiPhoneLine className="w-5 h-5 text-primary-gold" />
                <a href="tel:+1234567890" className="font-ui text-sm text-white hover:text-primary-gold transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <RiMailLine className="w-5 h-5 text-primary-gold" />
                <a href="mailto:info@whitepearl.com" className="font-ui text-sm text-white hover:text-primary-gold transition-colors">
                  info@whitepearl.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-gold/20">
          <p className="text-center text-sm font-ui text-white">
            © {currentYear} WhitePearl Dental Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 