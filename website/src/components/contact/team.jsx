import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Shield, Trophy, HeartHandshake, Phone, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TeamPage = () => {
  const navigate = useNavigate();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  const teamMembers = [
    {
      id: 1,
      name: "Thercious Divine",
      position: "Technical Director",
      image: "/logo.png",
      bio: "With over 20 years of experience in Volvo maintenance and repair, Robert leads our technical team with unparalleled expertise in all Volvo models."
    },
    {
      id: 2,
      name: "Sarah Moyo",
      position: "Parts Specialist",
      image: "/logo.png",
      bio: "Sarah ensures our inventory of genuine Volvo parts meets the highest standards. Her knowledge of Volvo components is exceptional."
    },
    {
      id: 3,
      name: "Michael Ndoro",
      position: "Master Technician",
      image: "/logo.png",
      bio: "Specialized in Volvo diagnostics and complex repairs, Michael's attention to detail guarantees your Volvo receives expert care."
    },
    {
      id: 4,
      name: "Simbarashe Mutombe",
      position: "Web Developer",
      image: "/logo.png",
      bio: "Grace ensures clear communication between our technical team and clients, providing transparent service explanations and estimates."
    },

  ];

  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
<section 
  className="relative py-20 bg-no-repeat bg-cover bg-center"
  style={{
    backgroundImage: "url('/fleet.webp')",
    backgroundBlendMode: "overlay",
  }}
>
  {/* Gradient overlay for image */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>
  
  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-4xl mx-auto text-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Expert Team</h1>
        <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
        <p className="text-xl text-blue-100">
          Our team of dedicated Volvo specialists brings decades of combined experience
          to provide exceptional service for all your Volvo needs.
        </p>
      </motion.div>
    </div>
  </div>
  
  {/* Wave SVG at bottom */}
  <div className="absolute bottom-0 left-0 w-full">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
      <path
        fill="#F9FAFB"
        fillOpacity="1"
        d="M0,64L80,58.7C160,53,320,43,480,53.3C640,64,800,96,960,96C1120,96,1280,64,1360,48L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
      ></path>
    </svg>
  </div>
</section>

      {/* Team Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
        <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  className="relative text-center mb-12 py-16 px-4 bg-no-repeat bg-cover bg-center"
  style={{
    backgroundImage: "url('/api/placeholder/1200/600')",
    backgroundBlendMode: "overlay",
  }}
>
  {/* Semi-transparent overlay for better text contrast */}
  <div className="absolute inset-0 bg-blue-900 bg-opacity-75"></div>
  
  <div className="relative z-10">
    <h2 className="text-3xl font-bold text-white mb-4">Our Team Values</h2>
    <p className="text-white text-opacity-90 max-w-2xl mx-auto">
      At Thersh Motors, our team is guided by core principles that ensure we deliver consistent, 
      exceptional service for your Volvo.
    </p>
  </div>
</motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for perfection in every aspect of our service, from repairs to customer communication.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Integrity</h3>
              <p className="text-gray-600">
                Honest diagnostics, transparent pricing, and ethical business practices are our foundation.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Expertise</h3>
              <p className="text-gray-600">
                Our team continuously updates their knowledge to stay at the forefront of Volvo technology.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartHandshake className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Customer Care</h3>
              <p className="text-gray-600">
                We treat each client and their Volvo with the utmost respect and personalized attention.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-bold text-center text-gray-800 mb-12"
          >
            Meet The Specialists
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-blue-700 font-semibold mb-4">{member.position}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-blue-700 hover:text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-blue-700 hover:text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Experience Expert Volvo Care?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Our team is prepared to help get your Volvo back on track with professional service.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.button
                  onClick={() => navigate('/contact')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold flex items-center justify-center space-x-2 group"
                >
                  <Phone className="h-5 w-5" />
                  <span>Contact Us</span>
                </motion.button>
                <motion.button
                  onClick={() => navigate('/services')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center space-x-2 group"
                >
                  <span>View Services</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;