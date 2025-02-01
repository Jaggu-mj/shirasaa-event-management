import React from "react";
import { motion } from "framer-motion";
import "../Style/contactUs.css";
import Footer from "../components/Footer";

const ContactUs = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
    <div className="contact-us">
      {/* Hero Section */}
      <motion.section
        className="hero"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 1 }}
      >
        {/* <h1>Your Event is Our Event</h1> */}
      </motion.section>

      {/* Contact Details Section */}
      <motion.section
        className="contact-details"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="details">
          <h2>Contact Us</h2>
          <p>
            <strong>Address:</strong> No 532, 2nd Floor, 18th Main, 23rd Cross,
            Judicial Layout, Yelahanka, Bangalore, Karnataka - 560065
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:shirasaa.events@gmail.com">
              SHIRASAA.EVENTS@GMAIL.COM
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+916366554992">+91 63665 54992</a>
          </p>
          <p>
            <strong>Social:</strong> <span>SHIRASAA.EVENTS</span>
          </p>
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        className="contact-form"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 1, delay: 1 }}
      >
        <h2>Send Us a Message</h2>
        <form>
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            whileFocus={{ scale: 1.02, boxShadow: "0 0 8px #f39c12" }}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            whileFocus={{ scale: 1.02, boxShadow: "0 0 8px #f39c12" }}
          />
          <motion.textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            whileFocus={{ scale: 1.02, boxShadow: "0 0 8px #f39c12" }}
          ></motion.textarea>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.section>

    </div>
    {/* <Footer/> */}
    </>
  );
};

export default ContactUs;
