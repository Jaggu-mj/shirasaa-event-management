import React, { useState } from "react";
import { motion } from "framer-motion";
import "../Style/services.css";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("Corporate Events");

  const categories = [
    "Corporate Events",
    "Personal Events",
    "Social Events",
    "Event Design and Decor",
    "End to End Event Support",
  ];

  const categoryContent = {
    "Corporate Events": {
      description: `Corporate events are organized gatherings or
 occasions sponsored by a company for its employees, clients,
 stakeholders, or the public. These events serve various purposes
 ranging from team building and networking to product launches
 and brand promotion. Here's a detailed description of corporate
 events:
         Business conferences/seminars
         Product launches
         Annual meets
         Themed corporate events
         CSR Events
         Corporate Sports Events
         Health and Wellness Event
         Team outings 
         Gala Business/Corporate Dinners & so on
      `,
      images: [
        "/images/Corp-event.jpg",
        "/images/corp-event 2.jpg",
        "/images/corp-event 3.jpg",
      ],
    },
    "Personal Events": {
      description: `
        Personal events encompass milestones and moments unique to an individual's life.
        These include traditional, cultural, and custom-based rituals with a modern touch.
        Birthdays
        Anniversaries
        Graduations
        Weddings (Sangeeth, Mehendi, Ring Ceremony)
        Housewarming ceremony
        Baby Showers/ Mom to be 
        Bachelorette Parties 
         Ring Ceremony & so on
      `,
      images: [
        "/images/personal1.jpg",
        "/images/personal2.jpg",
        "/images/personal3.jpg",
      ],
    },
    "Social Events": {
      description: `
        Social events are gatherings organized for socializing, networking, celebrating, or raising awareness.
        They foster connections and promote a sense of community.
         Award Ceremonies
         Charity Events
         Networking Events
         Concerts
        Concerts & Inaugural Events
         Sports Events
         Alumni Events
         Club/Association Events
      `,
      images: [
        "/images/social1.jpg",
        "/images/social2.jpg",
        "/images/social3.jpg",
      ],
    },
    "Event Design and Decor": {
      description: `
        We take intense detailing to client requirements for a successful and memorable event:
        Theme development
         Venue selection and styling
         Floral arrangements
         Photography
        Audio and visual equipments
        Lightings
        Skilled Artists (Makeup, Tattoo, Mehendi, Magicians etc.)
        Catering
        Party supplies
         Return gifts and gift hampers
          Cake and Desserts
           Hosting and entertainment

      `,
      images: [
        "/images/design1.jpg",
        "/images/design2.jpg",
        "/images/design3.jpg",
      ],
    },
    "End to End Event Support": {
      description: `
Whether it is a corporate affair, a social celebration, or a
 special occasion, choose Shirasaa Event Management to turn
 your ideas into extraordinary events
          Requirement gathering analysis
         Event planning and budgeting
         Pre-event preparation
         Event implemantation and Execution
         post-event Actions
      `,
      images: [
        "/images/support1.jpg",
        "/images/support2.jpg",
        "/images/support3.jpg",
      ],
    },
  };

  const { description, images } = categoryContent[selectedCategory];

  return (
    <div className="services">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Services
      </motion.h1>
      <motion.div
        className="categories"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            className={`category-button ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>
      <motion.div
        className="content"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>{selectedCategory}</h2>
        <p>{description}</p>
        <div className="images">
          {images.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`${selectedCategory} ${index + 1}`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
