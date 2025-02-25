'use client';

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { RiCalendarLine, RiTimeLine, RiUserLine, RiPhoneLine, RiMailLine, RiFileTextLine } from 'react-icons/ri';

const services = [
  { id: "cosmetic", name: "Cosmetic Dentistry" },
  { id: "implants", name: "Dental Implants" },
  { id: "orthodontic", name: "Orthodontic Treatment" },
  { id: "preventive", name: "Preventive Care" },
  { id: "restorative", name: "Restorative Dentistry" },
  { id: "emergency", name: "Emergency Care" }
];

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "02:00 PM", "03:00 PM",
  "04:00 PM", "05:00 PM"
];

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
    isNewPatient: "yes"
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
            src="/assets/images/booking-hero.jpg"
            alt="Book Appointment at WhitePearl Dental"
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
              Book Your Visit
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-body text-lg text-white max-w-3xl mx-auto"
            >
              Begin your journey to a perfect smile with our premium dental care services.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg border border-primary-gold"
            >
              <h2 className="font-heading text-3xl text-black mb-6">Schedule Your Appointment</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block font-ui text-sm text-black mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <RiUserLine className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-gold" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 border border-primary-gold rounded-lg font-body text-black focus:outline-none focus:ring-2 focus:ring-primary-gold"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-ui text-sm text-black mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <RiMailLine className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-gold" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 border border-primary-gold rounded-lg font-body text-black focus:outline-none focus:ring-2 focus:ring-primary-gold"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-ui text-sm text-black mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <RiPhoneLine className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-gold" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 border border-primary-gold rounded-lg font-body text-black focus:outline-none focus:ring-2 focus:ring-primary-gold"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Appointment Details */}
                <div className="space-y-6">
                  <div>
                    <label htmlFor="service" className="block font-ui text-sm text-black mb-2">
                      Service Type
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-primary-gold rounded-lg font-body text-black focus:outline-none focus:ring-2 focus:ring-primary-gold"
                      required
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="block font-ui text-sm text-black mb-2">
                        Preferred Date
                      </label>
                      <div className="relative">
                        <RiCalendarLine className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-gold" />
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 border border-primary-gold rounded-lg font-body text-black focus:outline-none focus:ring-2 focus:ring-primary-gold"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="time" className="block font-ui text-sm text-black mb-2">
                        Preferred Time
                      </label>
                      <div className="relative">
                        <RiTimeLine className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-gold" />
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 border border-primary-gold rounded-lg font-body text-black focus:outline-none focus:ring-2 focus:ring-primary-gold"
                          required
                        >
                          <option value="">Select time</option>
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>
                              {slot}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-6">
                  <div>
                    <label className="block font-ui text-sm text-black mb-2">
                      Are you a new patient?
                    </label>
                    <div className="flex space-x-6">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="isNewPatient"
                          value="yes"
                          checked={formData.isNewPatient === "yes"}
                          onChange={handleChange}
                          className="form-radio text-primary-gold focus:ring-primary-gold"
                        />
                        <span className="ml-2 font-body text-black">Yes</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="isNewPatient"
                          value="no"
                          checked={formData.isNewPatient === "no"}
                          onChange={handleChange}
                          className="form-radio text-primary-gold focus:ring-primary-gold"
                        />
                        <span className="ml-2 font-body text-black">No</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="notes" className="block font-ui text-sm text-black mb-2">
                      Additional Notes
                    </label>
                    <div className="relative">
                      <RiFileTextLine className="absolute left-4 top-4 text-primary-gold" />
                      <textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows={4}
                        className="w-full pl-12 pr-4 py-3 border border-primary-gold rounded-lg font-body text-black focus:outline-none focus:ring-2 focus:ring-primary-gold resize-none"
                        placeholder="Any specific concerns or requests..."
                      ></textarea>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white font-ui text-sm tracking-wide px-8 py-4 rounded-full hover:bg-primary-gold transition-all duration-300"
                >
                  Request Appointment
                </button>
              </form>
            </motion.div>

            {/* Booking Information */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg border border-primary-gold"
              >
                <h3 className="font-heading text-2xl text-black mb-6">What to Expect</h3>
                <div className="space-y-4">
                  <p className="font-body text-black">
                    Your journey to a perfect smile begins with a comprehensive consultation. During your visit, our expert team will:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-gold rounded-full mt-2 mr-3"></div>
                      <span className="font-body text-black">Conduct a thorough examination</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-gold rounded-full mt-2 mr-3"></div>
                      <span className="font-body text-black">Discuss your dental concerns and goals</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-gold rounded-full mt-2 mr-3"></div>
                      <span className="font-body text-black">Create a personalized treatment plan</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-gold rounded-full mt-2 mr-3"></div>
                      <span className="font-body text-black">Answer all your questions and concerns</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-black p-8 rounded-lg"
              >
                <h3 className="font-heading text-2xl text-white mb-6">New Patient? Special Offer</h3>
                <p className="font-body text-white mb-6">
                  First-time patients receive a complimentary consultation and comprehensive dental examination worth $350.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-gold rounded-full mt-2 mr-3"></div>
                    <span className="font-body text-white">Complete oral examination</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-gold rounded-full mt-2 mr-3"></div>
                    <span className="font-body text-white">Digital X-rays as needed</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-gold rounded-full mt-2 mr-3"></div>
                    <span className="font-body text-white">Personalized treatment plan</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg border border-primary-gold"
              >
                <h3 className="font-heading text-2xl text-black mb-6">Insurance & Payment</h3>
                <p className="font-body text-black mb-4">
                  We accept most major insurance plans and offer flexible payment options to make your dental care accessible.
                </p>
                <p className="font-body text-black">
                  Our team will help you understand your coverage and maximize your benefits.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 