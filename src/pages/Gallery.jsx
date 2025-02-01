import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../Style/gallery.css";
import Footer from "../components/Footer";

const Gallery = () => {
  const categories = ["All", "Personal", "Corporate", "Social"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: "/images/wedding-1937022_640.jpg", category: "Personal" },
    { src: "/images/beach-1854076_640.jpg", category: "Personal" },
    { src: "/images/istockphoto-530685719-1024x1024.jpg", category: "Corporate" },
    { src: "/images/corp-event 2.jpg", category: "Corporate" },
    { src: "/images/corp-event 3.jpg", category: "Corporate" },
    { src: "/images/wedding-reception-1284245_640.jpg", category: "Social" },
    { src: "/images/concert-974418_640.jpg", category: "Social" },
  ];

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((image) => image.category === selectedCategory);

  return (
    <div className="gallery">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Photo Gallery
      </motion.h1>

      {/* Category Navigation */}
      <div className="categories">
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
      </div>

      {/* Image Grid */}
      <div className="image-grid">
        {filteredImages.map((image, index) => (
          <motion.div
            key={index}
            className="image-item"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImage(image.src)}
          >
            <img src={image.src} alt={`Category ${image.category}`} />
            <div className="overlay">
              {/* <p>{image.category}</p> */}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="zoom-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Zoomed"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* <Footer/> */}
    </div>
  );
};

export default Gallery;
