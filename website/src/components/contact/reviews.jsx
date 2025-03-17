import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, MessageSquare, Phone, ArrowRight, Users, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ReviewsPage = () => {
  const navigate = useNavigate();
  const [currentFilter, setCurrentFilter] = useState("all");
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
  
  const reviews = [
    {
      id: 1,
      name: "James Mutendi",
      avatar: "/user.png",
      rating: 5,
      date: "February 12, 2025",
      category: "repairs",
      review: "Exceptional service from Thersh Motors. They diagnosed my Volvo XC60's engine issue quickly and fixed it at a reasonable price. The team was professional and kept me informed throughout the process."
    },
    {
      id: 2,
      name: "Linda Chiweshe",
      avatar: "/user.png",
      rating: 5,
      date: "January 28, 2025",
      category: "parts",
      review: "I needed specific parts for my V40 and Thersh Motors delivered exactly what I needed. The transmission sealing ring was genuine Volvo quality and their pricing was better than the dealership. Will definitely return for future parts needs."
    },
    {
      id: 3,
      name: "Tatenda Moyo",
      avatar: "/user.png",
      rating: 4,
      date: "January 15, 2025",
      category: "service",
      review: "Regular servicing of my S60 has never been easier. The team at Thersh knows Volvos inside out, and I appreciate their attention to detail. Only reason for 4 stars is because I had to wait an extra day due to parts availability."
    },
    {
      id: 4,
      name: "Grace Makombe",
      avatar: "/user.png",
      rating: 5,
      date: "December 20, 2024",
      category: "repairs",
      review: "After multiple garages couldn't fix the electrical issues with my XC90, Thersh Motors solved the problem in one visit. Their diagnostic equipment and expertise in Volvo systems is unmatched in Harare. Highly recommended!"
    },
    {
      id: 5,
      name: "David Mutasa",
      avatar: "/user.png",
      rating: 5,
      date: "December 5, 2024",
      category: "parts",
      review: "Purchased filters for my XC60 from Thersh Motors. Fair prices for genuine parts and the team provided helpful advice on installation. Really appreciate their knowledge and no-pressure approach."
    },
    {
      id: 6,
      name: "Rumbidzai Ndoro",
      avatar: "/user.png",
      rating: 5,
      date: "November 22, 2024",
      category: "service",
      review: "I've been taking my V60 to Thersh Motors for three years now. Their consistent quality of service is remarkable. They always explain what needs to be done and why, and I've never felt overcharged or pressured."
    }
  ];

  const filteredReviews = currentFilter === "all" 
    ? reviews 
    : reviews.filter(review => review.category === currentFilter);

  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Reviews</h1>
              <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
              <p className="text-xl text-blue-100">
                Discover what our clients say about their experience with Thersh Motors, 
                Zimbabwe's premier Volvo specialist.
              </p>
            </motion.div>
          </div>
        </div>
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

      {/* Satisfaction Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Customer Satisfaction</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We take pride in our consistently high ratings across all our Volvo services. 
              Our commitment to excellence is reflected in our customers' feedback.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-5xl font-bold text-blue-800 mb-4">98%</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Satisfaction Rate</h3>
              <p className="text-gray-600">
                Our clients consistently rate our services as exceeding expectations.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-5xl font-bold text-blue-800 mb-4">93%</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Return Clients</h3>
              <p className="text-gray-600">
                Most of our clients choose to return for all their Volvo service needs.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-8 w-8 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Average Rating</h3>
              <p className="text-gray-600">
                Our clients rate us 4.8 out of 5 stars across 150+ reviews.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Reviews */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentFilter("all")}
              className={`px-6 py-2 rounded-full font-medium ${
                currentFilter === "all"
                  ? "bg-blue-800 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              All Reviews
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentFilter("repairs")}
              className={`px-6 py-2 rounded-full font-medium ${
                currentFilter === "repairs"
                  ? "bg-blue-800 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Repairs
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentFilter("service")}
              className={`px-6 py-2 rounded-full font-medium ${
                currentFilter === "service"
                  ? "bg-blue-800 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Service
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentFilter("parts")}
              className={`px-6 py-2 rounded-full font-medium ${
                currentFilter === "parts"
                  ? "bg-blue-800 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Parts
            </motion.button>
          </div>
        </div>
      </section>

      {/* Reviews List */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredReviews.map((review) => (
              <motion.div
                key={review.id}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="flex items-start">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-bold text-gray-800">{review.name}</h3>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600">{review.review}</p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full capitalize">
                        {review.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leave Review CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-800 to-blue-600 rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-6">Share Your Experience</h2>
                <p className="text-xl text-blue-100 mb-8">
                  We value your feedback. Let us know about your experience with our Volvo services.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <motion.button
                    onClick={() => navigate('/leave-review')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-blue-800 px-8 py-3 rounded-full font-semibold flex items-center justify-center space-x-2 group"
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span>Write a Review</span>
                  </motion.button>
                  <motion.button
                    onClick={() => navigate('/contact')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center space-x-2 group"
                  >
                    <Phone className="h-5 w-5" />
                    <span>Contact Us</span>
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ReviewsPage;