'use client';

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { RiMapPin2Line, RiPhoneLine, RiMailLine, RiTimeLine, RiInstagramLine, RiFacebookLine, RiTwitterXLine } from 'react-icons/ri';

const businessHours = [
  { day: "Monday", hours: "9:00 AM - 6:00 PM" },
  { day: "Tuesday", hours: "9:00 AM - 6:00 PM" },
  { day: "Wednesday", hours: "9:00 AM - 6:00 PM" },
  { day: "Thursday", hours: "9:00 AM - 6:00 PM" },
  { day: "Friday", hours: "9:00 AM - 4:00 PM" },
  { day: "Saturday", hours: "By Appointment" },
  { day: "Sunday", hours: "Closed" }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/contact-hero.jpg"
            alt="Contact WhitePearl Dental"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6"
            >
              Get in Touch
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-body text-lg text-white max-w-3xl mx-auto"
            >
              We're here to answer any questions and help you begin your journey to a perfect smile.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg border border-primary-gold"
            >
              <h2 className="font-heading text-3xl text-black mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-ui text-sm text-black mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-primary-gold rounded-lg font-body text-black focus:outline-none focus:ring-2 focus:ring-primary-gold"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-ui text-sm text-black mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-primary-gold rounded-lg font-body text-black focus:outline-none focus:ring-2 focus:ring-primary-gold"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block font-ui text-sm text-black mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary-gold rounded-lg font-body text-black focus:outline-none focus:ring-2 focus:ring-primary-gold"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block font-ui text-sm text-black mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary-gold rounded-lg font-body text-black focus:outline-none focus:ring-2 focus:ring-primary-gold"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="appointment">Book Appointment</option>
                    <option value="consultation">Request Consultation</option>
                    <option value="inquiry">General Inquiry</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block font-ui text-sm text-black mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-primary-gold rounded-lg font-body text-black focus:outline-none focus:ring-2 focus:ring-primary-gold resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white font-ui text-sm tracking-wide px-8 py-4 rounded-full hover:bg-primary-gold transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <div className="space-y-12">
              {/* Location & Contact */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg border border-primary-gold"
              >
                <h3 className="font-heading text-2xl text-black mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <RiMapPin2Line className="w-6 h-6 text-primary-gold flex-shrink-0 mt-1" />
                    <div className="ml-4">
                      <p className="font-ui text-sm text-black font-medium mb-1">Location</p>
                      <p className="font-body text-black">123 Luxury Lane, Beverly Hills, CA 90210</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <RiPhoneLine className="w-6 h-6 text-primary-gold flex-shrink-0 mt-1" />
                    <div className="ml-4">
                      <p className="font-ui text-sm text-black font-medium mb-1">Phone</p>
                      <a href="tel:+1234567890" className="font-body text-black hover:text-primary-gold transition-colors">
                        (123) 456-7890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <RiMailLine className="w-6 h-6 text-primary-gold flex-shrink-0 mt-1" />
                    <div className="ml-4">
                      <p className="font-ui text-sm text-black font-medium mb-1">Email</p>
                      <a href="mailto:info@whitepearl.com" className="font-body text-black hover:text-primary-gold transition-colors">
                        info@whitepearl.com
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg border border-primary-gold"
              >
                <div className="flex items-center mb-6">
                  <RiTimeLine className="w-6 h-6 text-primary-gold" />
                  <h3 className="font-heading text-2xl text-black ml-3">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  {businessHours.map((schedule) => (
                    <div key={schedule.day} className="flex justify-between">
                      <span className="font-ui text-black">{schedule.day}</span>
                      <span className="font-ui text-black">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg border border-primary-gold"
              >
                <h3 className="font-heading text-2xl text-black mb-6">Connect With Us</h3>
                <div className="flex space-x-6">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-gold hover:opacity-80 transition-opacity"
                  >
                    <RiInstagramLine className="w-8 h-8" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-gold hover:opacity-80 transition-opacity"
                  >
                    <RiFacebookLine className="w-8 h-8" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-gold hover:opacity-80 transition-opacity"
                  >
                    <RiTwitterXLine className="w-8 h-8" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl text-white mb-4">Find Us</h2>
            <p className="font-body text-white">
              Located in the heart of Beverly Hills, our clinic offers convenient access and valet parking.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7153676817196!2d-118.40034168478258!3d34.0736498808061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b93cca9c7ab1%3A0xe2ce30e735620d15!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1635000000000!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
} 