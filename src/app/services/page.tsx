'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
  { id: "all", name: "All Services" },
  { id: "cosmetic", name: "Cosmetic" },
  { id: "restorative", name: "Restorative" },
  { id: "preventive", name: "Preventive" },
  { id: "surgical", name: "Surgical" },
  { id: "orthodontic", name: "Orthodontic" },
  { id: "pediatric", name: "Pediatric" },
  { id: "periodontal", name: "Periodontal" },
  { id: "endodontic", name: "Endodontic" },
  { id: "technology", name: "Technology" }
];

const services = [
  // Cosmetic Dentistry Services
  {
    id: 1,
    title: "Porcelain Veneers",
    description: "Transform your smile with custom-crafted porcelain veneers, designed to perfect your teeth's appearance.",
    category: "cosmetic",
    features: [
      "Custom-designed for your smile",
      "Natural-looking results",
      "Stain-resistant material",
      "Long-lasting beauty"
    ],
    image: "/assets/images/cosmetic.jpg"
  },
  {
    id: 2,
    title: "Professional Teeth Whitening",
    description: "Achieve a brighter, more radiant smile with our advanced teeth whitening treatments.",
    category: "cosmetic",
    features: [
      "In-office power whitening",
      "Take-home whitening kits",
      "Lasting results",
      "Safe and effective"
    ],
    image: "/assets/images/whitening.jpg"
  },
  {
    id: 3,
    title: "Composite Bonding",
    description: "Restore chipped, cracked, or discolored teeth with natural-looking composite materials.",
    category: "cosmetic",
    features: [
      "Same-day results",
      "Minimally invasive",
      "Color-matched material",
      "Affordable solution"
    ],
    image: "/assets/images/bonding.jpg"
  },

  // Restorative Dentistry Services
  {
    id: 4,
    title: "Dental Implants",
    description: "Restore your smile with permanent, natural-looking dental implant solutions.",
    category: "restorative",
    features: [
      "Titanium root replacement",
      "Natural-looking crown",
      "Permanent solution",
      "Preserves jaw bone"
    ],
    image: "/assets/images/implants.jpg"
  },
  {
    id: 5,
    title: "Ceramic Crowns",
    description: "Protect and restore damaged teeth with custom-made ceramic crowns.",
    category: "restorative",
    features: [
      "Same-day CEREC crowns",
      "Natural appearance",
      "Durable material",
      "Perfect fit"
    ],
    image: "/assets/images/crowns.jpg"
  },
  {
    id: 6,
    title: "Dental Bridges",
    description: "Fill gaps in your smile with custom-designed dental bridges.",
    category: "restorative",
    features: [
      "Fixed or removable options",
      "Natural appearance",
      "Restored functionality",
      "Long-lasting results"
    ],
    image: "/assets/images/bridges.jpg"
  },

  // Preventive Care Services
  {
    id: 7,
    title: "Comprehensive Check-ups",
    description: "Maintain optimal oral health with regular dental examinations and cleanings.",
    category: "preventive",
    features: [
      "Digital X-rays",
      "Oral cancer screening",
      "Periodontal evaluation",
      "Professional cleaning"
    ],
    image: "/assets/images/checkup.jpg"
  },
  {
    id: 8,
    title: "Dental Sealants",
    description: "Protect vulnerable teeth from decay with dental sealants.",
    category: "preventive",
    features: [
      "Cavity prevention",
      "Quick application",
      "Long-lasting protection",
      "Ideal for children"
    ],
    image: "/assets/images/sealants.jpg"
  },

  // Surgical Services
  {
    id: 9,
    title: "Wisdom Teeth Removal",
    description: "Safe and comfortable extraction of problematic wisdom teeth.",
    category: "surgical",
    features: [
      "Sedation options",
      "Expert care",
      "Quick recovery",
      "Pain management"
    ],
    image: "/assets/images/wisdom.jpg"
  },
  {
    id: 10,
    title: "Bone Grafting",
    description: "Strengthen your jaw bone for dental implants or other procedures.",
    category: "surgical",
    features: [
      "Advanced techniques",
      "Promotes healing",
      "Implant preparation",
      "Minimally invasive"
    ],
    image: "/assets/images/bone-graft.jpg"
  },

  // Orthodontic Services
  {
    id: 11,
    title: "Invisible Aligners",
    description: "Straighten your teeth discreetly with custom clear aligners.",
    category: "orthodontic",
    features: [
      "Nearly invisible",
      "Removable trays",
      "Custom-made",
      "Comfortable fit"
    ],
    image: "/assets/images/aligners.jpg"
  },
  {
    id: 12,
    title: "Traditional Braces",
    description: "Achieve a perfect smile with modern orthodontic solutions.",
    category: "orthodontic",
    features: [
      "Multiple options available",
      "Regular adjustments",
      "Effective treatment",
      "Suitable for all ages"
    ],
    image: "/assets/images/braces.jpg"
  },

  // Pediatric Services
  {
    id: 13,
    title: "Children's Dentistry",
    description: "Specialized dental care for our youngest patients in a friendly environment.",
    category: "pediatric",
    features: [
      "Child-friendly atmosphere",
      "Preventive care",
      "Early intervention",
      "Education focused"
    ],
    image: "/assets/images/pediatric.jpg"
  },
  {
    id: 14,
    title: "Space Maintainers",
    description: "Preserve space for permanent teeth after premature loss of baby teeth.",
    category: "pediatric",
    features: [
      "Custom-fitted",
      "Comfortable wear",
      "Prevents misalignment",
      "Easy maintenance"
    ],
    image: "/assets/images/space-maintainers.jpg"
  },

  // Periodontal Services
  {
    id: 15,
    title: "Gum Disease Treatment",
    description: "Comprehensive treatment for various stages of periodontal disease.",
    category: "periodontal",
    features: [
      "Deep cleaning",
      "Laser therapy",
      "Maintenance program",
      "Prevention focus"
    ],
    image: "/assets/images/periodontal.jpg"
  },
  {
    id: 16,
    title: "Gum Grafting",
    description: "Restore receding gums and protect exposed root surfaces.",
    category: "periodontal",
    features: [
      "Natural tissue repair",
      "Reduced sensitivity",
      "Improved aesthetics",
      "Long-term results"
    ],
    image: "/assets/images/gum-graft.jpg"
  },

  // Endodontic Services
  {
    id: 17,
    title: "Root Canal Therapy",
    description: "Save infected teeth with modern root canal treatment.",
    category: "endodontic",
    features: [
      "Painless procedure",
      "Tooth preservation",
      "Advanced techniques",
      "Same-day treatment"
    ],
    image: "/assets/images/root-canal.jpg"
  },
  {
    id: 18,
    title: "Microsurgery",
    description: "Precision endodontic procedures using microscopic visualization.",
    category: "endodontic",
    features: [
      "High magnification",
      "Precise treatment",
      "Better outcomes",
      "Complex case handling"
    ],
    image: "/assets/images/microsurgery.jpg"
  },

  // Technology Services
  {
    id: 19,
    title: "3D CBCT Imaging",
    description: "State-of-the-art imaging for precise diagnosis and treatment planning.",
    category: "technology",
    features: [
      "3D visualization",
      "Low radiation",
      "Detailed analysis",
      "Treatment planning"
    ],
    image: "/assets/images/cbct.jpg"
  },
  {
    id: 20,
    title: "Digital Smile Design",
    description: "Preview your new smile with advanced digital design technology.",
    category: "technology",
    features: [
      "Virtual preview",
      "Treatment simulation",
      "Custom planning",
      "Predictable results"
    ],
    image: "/assets/images/smile-design.jpg"
  }
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices = activeCategory === "all" 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6"
            >
              Our Premium Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-body text-lg text-white max-w-3xl mx-auto mb-12"
            >
              Experience world-class dental care with our comprehensive range of services, delivered with precision and luxury in mind.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-10 sm:py-12 bg-white border-b border-primary-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-ui text-sm tracking-wide transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary-gold text-black"
                    : "bg-white text-black border-2 border-primary-gold hover:bg-primary-gold hover:text-black"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-primary-gold rounded-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="relative h-52 sm:h-56 lg:h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-1.5 bg-primary-gold text-black text-xs font-ui tracking-wider rounded-full">
                      {categories.find(cat => cat.id === service.category)?.name}
                    </span>
                  </div>
                </div>
                <div className="p-6 lg:p-8 flex-grow flex flex-col">
                  <h2 className="font-heading text-xl lg:text-2xl text-black mb-4">{service.title}</h2>
                  <p className="font-body text-black mb-6">{service.description}</p>
                  <div className="space-y-3 mt-auto">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-primary-gold rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                        <span className="font-ui text-black">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
            Ready to Experience Luxury Dental Care?
          </h2>
          <p className="font-body text-lg text-white mb-8 max-w-2xl mx-auto">
            Schedule your consultation today and discover the perfect treatment plan for your smile.
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