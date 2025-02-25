'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/hero-bg.jpg"
            alt="Luxury Dental Clinic"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6"
            >
              Experience Luxury
              <span className="block">Dental Care</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-body text-lg sm:text-xl text-white mb-8 leading-relaxed"
            >
              Where artistry meets dentistry. Discover a new standard of dental excellence in Beverly Hills.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                href="/appointment"
                className="inline-block bg-primary-gold hover:bg-primary-gold text-black font-ui text-sm tracking-wide px-8 py-4 rounded-full transition-all duration-300"
              >
                Book Your Visit
              </Link>
              <Link 
                href="/services"
                className="inline-block bg-white hover:bg-white text-black font-ui text-sm tracking-wide px-8 py-4 rounded-full transition-all duration-300"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl text-black mb-6">Welcome to WhitePearl Dental</h2>
              <p className="font-body text-lg text-black mb-8 leading-relaxed">
                At WhitePearl, we believe in delivering more than just dental care we create confident smiles that leave lasting impressions. Our state-of-the-art facility combines luxury with cutting-edge technology to provide an unparalleled dental experience.
              </p>
              <Link 
                href="/about"
                className="inline-block border-2 border-primary-gold text-primary-gold hover:bg-primary-gold hover:text-white font-ui text-sm tracking-wide px-8 py-3 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="relative h-[600px]">
              <Image
                src="/assets/images/welcome.jpg"
                alt="Luxury Dental Office"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl text-black mb-4">Our Premium Services</h2>
            <p className="font-body text-lg text-black max-w-2xl mx-auto">
              Experience comprehensive dental care with our range of specialized services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            {[
              {
                title: "Cosmetic Dentistry",
                description: "Transform your smile with our advanced cosmetic procedures",
                image: "/assets/images/cosmetic.jpg"
              },
              {
                title: "Dental Implants",
                description: "Restore your smile with permanent, natural-looking solutions",
                image: "/assets/images/implants.jpg"
              },
              {
                title: "Smile Design",
                description: "Custom smile makeovers tailored to your unique features",
                image: "/assets/images/smile-design.jpg"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-primary-gold"
              >
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl text-black mb-2">{service.title}</h3>
                  <p className="font-body text-black mb-4">{service.description}</p>
                  <Link 
                    href="/services"
                    className="text-primary-gold hover:text-primary-gold font-ui text-sm tracking-wide transition-colors duration-300"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "15+", label: "Years of Excellence" },
              { number: "10k+", label: "Smiles Transformed" },
              { number: "50+", label: "Awards Won" },
              { number: "100%", label: "Patient Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-heading text-4xl text-primary-gold mb-2">{stat.number}</div>
                <div className="font-ui text-sm tracking-wide text-white">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl text-black mb-4">Patient Testimonials</h2>
            <p className="font-body text-lg text-black max-w-2xl mx-auto">
              Hear what our valued patients have to say about their experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                text: "The level of care and attention to detail at WhitePearl is unmatched. My smile has never looked better!",
                role: "Executive"
              },
              {
                name: "Michael Chen",
                text: "A truly luxurious dental experience. The team made me feel comfortable and confident throughout my treatment.",
                role: "Entrepreneur"
              },
              {
                name: "Emma Davis",
                text: "From the moment you walk in, you know you're in good hands. The results exceeded my expectations!",
                role: "Artist"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg border border-primary-gold"
              >
                <div className="text-primary-gold mb-6">★★★★★</div>
                <p className="font-body text-black mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-heading text-lg text-black">{testimonial.name}</div>
                  <div className="font-ui text-sm text-black">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl text-white mb-6">Ready to Transform Your Smile?</h2>
          <p className="font-body text-lg text-white mb-8 max-w-2xl mx-auto">
            Schedule your consultation today and take the first step towards your dream smile.
          </p>
          <Link 
            href="/appointment"
            className="inline-block bg-primary-gold hover:bg-primary-gold text-black font-ui text-sm tracking-wide px-12 py-4 rounded-full transition-all duration-300"
          >
            Book Your Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
