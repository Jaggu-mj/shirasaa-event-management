import React from "react";
import "../Style/aboutUs.css";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Hero Section */}
      <section className="hero2">
        <div className="hero-text animated">
          <h1>About Us</h1>
          <p>
            Shirasaa Events is a premier event management firm based in
            <strong> Bangalore</strong>, Karnataka, dedicated to creating
            unforgettable experiences. Established with a passion for
            excellence, creativity, and meticulous attention to detail, we have
            become a trusted partner for individuals and businesses seeking
            seamless and memorable events.
          </p>
        </div>
        <div className="hero-image animated">
          <img
            src="/images/wedding-reception-1284245_640.jpg"
            alt="Shirasaa Events"
          />
        </div>
      </section>

      {/* Tagline Section */}
      <section className="tagline">
        <h2 className="animated">Our Tagline</h2>
        <p className="animated">
          <em>“YOUR EVENT IS OUR EVENT”</em>
        </p>
      </section>

      {/* Specialties Section */}
      <section className="specialties">
        <h2 className="animated">What Makes Us Special</h2>
        <div className="specialties-grid">
          <div className="specialty-item animated">
            <img
              src="/images/creativity-and-innovation.jpg"
              alt="Creativity and Innovation"
            />
            <h3>Creativity and Innovation</h3>
            <p>
              Our team constantly thinks outside the box to craft unique and
              memorable events.
            </p>
          </div>
          <div className="specialty-item animated">
            <img
              src="/images/Proff and reliability.jpg"
              alt="Professionalism and Reliability"
            />
            <h3>Professionalism and Reliability</h3>
            <p>
              A dedicated team ensures seamless execution with attention to
              detail and reliability.
            </p>
          </div>
          <div className="specialty-item animated">
            <img
              src="/images/dedicated-team.jpg"
              alt="Dedicated Team of Event Executors"
            />
            <h3>Dedicated Team</h3>
            <p>
              Our experienced event executors work tirelessly to deliver
              exceptional results.
            </p>
          </div>
          <div className="specialty-item animated">
            <img src="/images/attention.jpg" alt="Attention to Detailing" />
            <h3>Attention to Detailing</h3>
            <p>
              We ensure every aspect of your event is meticulously planned and
              executed.
            </p>
          </div>
        </div>
      </section>
      {/* <Footer/> */}
    </div>
  );
};

export default AboutUs;
