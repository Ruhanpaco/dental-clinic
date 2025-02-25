'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { RiMenu4Line, RiCloseLine } from 'react-icons/ri';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="w-full bg-white border-b border-primary-gold/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.span 
              whileHover={{ scale: 1.02 }}
              className="text-3xl font-heading font-normal text-black tracking-wide"
            >
              WhitePearl
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <motion.div
                key={link.href}
                whileHover={{ y: -2 }}
              >
                <Link
                  href={link.href}
                  className="font-ui text-sm text-black hover:text-primary-gold transition-all duration-300 tracking-wide"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="ml-4"
            >
              <Link
                href="/appointment"
                className="font-ui text-sm px-6 py-3 bg-black text-white hover:bg-primary-gold transition-all duration-300 rounded-full tracking-wide"
              >
                Book Appointment
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-primary-gold/10 transition-all duration-300"
            >
              {isOpen ? (
                <RiCloseLine className="w-7 h-7 text-primary-gold" />
              ) : (
                <RiMenu4Line className="w-7 h-7 text-primary-gold" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="px-4 pt-2 pb-6 bg-white border-t border-primary-gold/10">
          {navLinks.map((link) => (
            <motion.div
              key={link.href}
              whileHover={{ x: 4 }}
            >
              <Link
                href={link.href}
                className="block py-4 font-ui text-sm text-black hover:text-primary-gold transition-all duration-300 tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mt-4"
          >
            <Link
              href="/appointment"
              className="block w-full text-center font-ui text-sm px-6 py-3 bg-black text-white hover:bg-primary-gold transition-all duration-300 rounded-full tracking-wide"
              onClick={() => setIsOpen(false)}
            >
              Book Appointment
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
} 