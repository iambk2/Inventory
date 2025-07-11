import { motion } from "framer-motion";
import "./DashboardSection.css";

const DashboardSection = () => {
  return (
    <>
      <section className="dashboard-section position-relative">
        <div className="floating-bg-circles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="container position-relative z-2">
          <div className="row justify-content-center">
            <div className="col-md-10 text-center">
              <motion.div
                className="image-wrapper"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="/images/common-dashboard-2x.webp"
                  alt="Dashboard Preview"
                  className="img-fluid rounded shadow dashboard-image"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="red-section">
        <div className="container text-center text-white pt-5">
          <h3 className="mb-4">Download our mobile app for free</h3>
          <motion.div
            className="d-flex justify-content-center gap-5 flex-wrap"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <img
                src="/images/playstore.png"
                alt="Google Play"
                style={{ height: "70px" }}
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <img
                src="/images/appstore.png"
                alt="App Store"
                style={{ height: "70px" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default DashboardSection;
