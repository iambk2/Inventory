import React from "react";
import { motion } from "framer-motion";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section d-flex align-items-center justify-content-center text-center position-relative">
      <div className="container position-relative z-2">
        <motion.h1
          className="fw-bold display-5 mb-3"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Inventory management software designed <br />
          for Indian businesses
        </motion.h1>

        <motion.p
          className="lead mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Manage orders. Track inventory. Handle GST billing. Oversee warehouses.
          One inventory management software to run all your inventory operations.
        </motion.p>

        <motion.div
          className="d-flex justify-content-center flex-wrap gap-3"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="btn btn-primary custom-purple-btn px-4 py-2">
            ACCESS ZENVIC INVENTORY
          </button>
          <button className="btn btn-outline px-4 py-2">
            EXPLORE DEMO ACCOUNT
          </button>
        </motion.div>
      </div>

      <div className="hero-blur-bg"></div>
    </section>
  );
};

export default HeroSection;
