'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const values = [
  {
    title: "Excellence",
    description: "We maintain the highest standards in dental care, utilizing state-of-the-art technology and advanced techniques.",
    icon: "/assets/icons/excellence.svg"
  },
  {
    title: "Luxury Experience",
    description: "Every detail of your visit is crafted to provide an unparalleled level of comfort and sophistication.",
    icon: "/assets/icons/luxury.svg"
  },
  {
    title: "Patient-Focused",
    description: "Your unique needs and desires are at the center of our personalized treatment approach.",
    icon: "/assets/icons/patient.svg"
  },
  {
    title: "Innovation",
    description: "We continuously invest in the latest dental technologies to ensure optimal treatment outcomes.",
    icon: "/assets/icons/innovation.svg"
  }
];

const team = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Lead Cosmetic Dentist",
    description: "With over 15 years of experience in cosmetic dentistry, Dr. Mitchell leads our team with expertise in smile transformations.",
    image: "/assets/images/team/dr-mitchell.jpg",
    credentials: "DDS, AAACD"
  },
  {
    name: "Dr. James Chen",
    role: "Implant Specialist",
    description: "A renowned expert in dental implants and reconstructive dentistry with numerous international certifications.",
    image: "/assets/images/team/dr-chen.jpg",
    credentials: "DMD, PhD"
  },
  {
    name: "Dr. Emily Parker",
    role: "Orthodontist",
    description: "Specializing in creating beautiful smiles through innovative orthodontic treatments and Invisalign.",
    image: "/assets/images/team/dr-parker.jpg",
    credentials: "DDS, MS"
  }
];

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-black flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/about-hero.jpg"
            alt="WhitePearl Dental Clinic"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Excellence in
              <span className="block">Dental Care</span>
            </h1>
            <p className="font-body text-lg text-white mb-8 leading-relaxed">
              At WhitePearl, we combine artistry with advanced dentistry to deliver exceptional care in a luxurious environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl lg:text-4xl text-black mb-6">Our Legacy of Excellence</h2>
              <div className="space-y-6">
                <p className="font-body text-black">
                  Founded in 2008, WhitePearl Dental Clinic has established itself as Beverly Hills&apos; premier destination for luxury dental care. Our journey began with a vision to transform the dental experience into something extraordinary.
                </p>
                <p className="font-body text-black">
                  Over the years, we&apos;ve consistently invested in cutting-edge technology and assembled a team of world-class professionals, setting new standards in dental excellence.
                </p>
                <p className="font-body text-black">
                  Today, we&apos;re proud to be recognized as a leader in cosmetic and restorative dentistry, serving clients who expect nothing but the best.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[600px] rounded-lg overflow-hidden"
            >
              <Image
                src="/assets/images/clinic-exterior.jpg"
                alt="WhitePearl Dental Clinic Exterior"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl text-white mb-6">Our Core Values</h2>
            <p className="font-body text-lg text-white max-w-2xl mx-auto">
              These principles guide every aspect of our practice, ensuring we deliver the highest standard of care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6">
                  <Image
                    src={value.icon}
                    alt={value.title}
                    width={64}
                    height={64}
                  />
                </div>
                <h3 className="font-heading text-xl text-black mb-4">{value.title}</h3>
                <p className="font-body text-black">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl text-black mb-6">Meet Our Expert Team</h2>
            <p className="font-body text-lg text-black max-w-2xl mx-auto">
              Our team of highly skilled professionals is committed to providing you with exceptional care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-primary-gold rounded-lg overflow-hidden group"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-heading text-2xl text-black mb-2">{member.name}</h3>
                  <p className="font-ui text-primary-gold mb-2">{member.role}</p>
                  <p className="font-ui text-black text-sm mb-4">{member.credentials}</p>
                  <p className="font-body text-black">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl lg:text-4xl text-white mb-6">State-of-the-Art Facility</h2>
              <div className="space-y-6">
                <p className="font-body text-white">
                  Our clinic is equipped with the latest dental technology and designed to provide a comfortable, luxurious experience. From our elegant reception area to our advanced treatment rooms, every space is crafted with your comfort in mind.
                </p>
                <p className="font-body text-white">
                  We maintain the highest standards of sterilization and safety, ensuring a pristine environment for every procedure.
                </p>
                <Link 
                  href="/gallery"
                  className="inline-block bg-primary-gold hover:bg-primary-gold text-black font-ui text-sm tracking-wide px-8 py-4 rounded-full transition-all duration-300 mt-4"
                >
                  View Our Gallery
                </Link>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/assets/images/facility-1.jpg"
                  alt="Reception Area"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/assets/images/facility-2.jpg"
                  alt="Treatment Room"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/assets/images/facility-3.jpg"
                  alt="Advanced Equipment"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/assets/images/facility-4.jpg"
                  alt="Consultation Room"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl lg:text-4xl text-black mb-6">
            Experience the WhitePearl Difference
          </h2>
          <p className="font-body text-lg text-black mb-8 max-w-2xl mx-auto">
            Join us for a consultation and discover why we&apos;re Beverly Hills&apos; premier choice for luxury dental care.
          </p>
          <Link 
            href="/appointment"
            className="inline-block bg-black hover:bg-black text-white font-ui text-sm tracking-wide px-12 py-4 rounded-full transition-all duration-300"
          >
            Schedule Your Visit
          </Link>
        </div>
      </section>
    </main>
  );
} 