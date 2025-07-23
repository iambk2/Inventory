import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axiosInstance from "../../api/axiosInstance";
import "./Pricing.css";
import { FaUsers, FaBox, FaSpinner } from "react-icons/fa";

// const Pricing = () => {
//   const pricingPlans = [
//     {
//       name: 'Free',
//       yearlyPrice: '0',
//       monthlyPrice: '0',
//       cta: 'GET STARTED',
//       popular: false,
//     },
//     {
//       name: 'Standard',
//       yearlyPrice: '12,999',
//       monthlyPrice: '2,299',
//       cta: 'GET STARTED',
//       popular: false,
//     },
//     {
//       name: 'Professional',
//       yearlyPrice: '26,999',
//       monthlyPrice: '5,499',
//       cta: 'GET STARTED',
//       popular: false,
//     },
//     {
//       name: 'Enterprise',
//       yearlyPrice: '89,999',
//       monthlyPrice: '17,499',
//       cta: 'GET STARTED',
//       popular: true,
//     }
//   ];

//   return (
//     <section className="pricing-container">
//       <div className="pricing-header">
//         <h2>Simple pricing. No surprises.</h2>
//       </div>

//       <div className="pricing-grid">
//         {pricingPlans.map((plan, index) => (
//           <motion.div
//             key={index}
//             className={`pricing-card ${plan.popular ? 'popular' : ''}`}
//             whileHover={{ scale: 1.03 }}
//           >
//             {plan.popular && <span className="popular-badge">MOST POPULAR</span>}
//             <h3 className="plan-name">{plan.name}</h3>
//             <div className="price">
//               <span>₹{plan.yearlyPrice}</span>
//               <small>per organization / year</small>
//               <span>₹{plan.monthlyPrice}</span>
//               <small>per organization / month</small>
//             </div>
//             <button className="cta-button">{plan.cta}</button>
//             {plan.demo && <button className="demo-button">{plan.demo}</button>}
//           </motion.div>
//         ))}
//       </div>

//       <p className="footer-note">
//         * Prices are exclusive of GST.
//         <br />
//         <a href="/pricing">Check out our Pricing page for complete details →</a>
//       </p>
//     </section>
//   );
// };

const Pricing = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await axiosInstance.get("/access/plans/list/");
        setPlans(response.data);
        console.log("API Response:", response.data);
      } catch (err) {
        console.error("Error fetching Plans :", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPlans();
  }, []);

  return (
    <section className="pricing-container">
      <div className="pricing-header">
        <h2>Choose the Best Plan for You</h2>
      </div>

      {loading ? (
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="pricing-grid ">
          {plans.map((plan) => (
            <motion.div
              key={plan.uuid}
              className="pricing-card"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="plan-name">{plan.identity.toUpperCase()}</h3>
              <div className="price">
                <span>₹{plan.price}</span>
                <small>valid for {plan.validity} days</small>
              </div>


              {plan.features && (
                <ul className="list-group mt-3">
                  <li className="list-group-item d-flex align-items-center">
                    <FaUsers className="me-2 text-primary" />
                    <strong className="me-1">Users Allowed:</strong>{" "}
                    {plan.features.user_count}
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <FaBox className="me-2 text-success" />
                    <strong className="me-1">Products Allowed:</strong>{" "}
                    {plan.features.product_count}
                  </li>
                </ul>
              )}

              <button className="cta-button" disabled={plan.disabled}>
                {plan.disabled ? "Unavailable" : "Choose Plan"}
              </button>
            </motion.div>
          ))}
        </div>
      )}

      <p className="footer-note">
        * All plans are subject to availability and terms.
        <br />
        <a href="/pricing">View full pricing details →</a>
      </p>
    </section>
  );
};

export default Pricing;
