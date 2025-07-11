import React from 'react';
import { motion } from 'framer-motion';
import './Pricing.css';

const Pricing = () => {
  const pricingPlans = [
    {
      name: 'Free',
      yearlyPrice: '0',
      monthlyPrice: '0',
      cta: 'GET STARTED',
      popular: false,
    },
    {
      name: 'Standard',
      yearlyPrice: '12,999',
      monthlyPrice: '2,299',
      cta: 'GET STARTED',
      popular: false,
    },
    {
      name: 'Professional',
      yearlyPrice: '26,999',
      monthlyPrice: '5,499',
      cta: 'GET STARTED',
      popular: false,
    },
    {
      name: 'Enterprise',
      yearlyPrice: '89,999',
      monthlyPrice: '17,499',
      cta: 'GET STARTED',
      popular: true,
    }
  ];

  return (
    <section className="pricing-container">
      <div className="pricing-header">
        <h2>Simple pricing. No surprises.</h2>
      </div>
      
      <div className="pricing-grid">
        {pricingPlans.map((plan, index) => (
          <motion.div 
            key={index}
            className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            whileHover={{ scale: 1.03 }}
          >
            {plan.popular && <span className="popular-badge">MOST POPULAR</span>}
            <h3 className="plan-name">{plan.name}</h3>
            <div className="price">
              <span>₹{plan.yearlyPrice}</span>
              <small>per organization / year</small>
              <span>₹{plan.monthlyPrice}</span>
              <small>per organization / month</small>
            </div>
            <button className="cta-button">{plan.cta}</button>
            {plan.demo && <button className="demo-button">{plan.demo}</button>}
          </motion.div>
        ))}
      </div>
      
      <p className="footer-note">
        * Prices are exclusive of GST.
        <br />
        <a href="/pricing">Check out our Pricing page for complete details →</a>
      </p>
    </section>
  );
};

export default Pricing;