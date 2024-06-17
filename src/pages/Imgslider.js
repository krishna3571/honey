import React, { useState } from "react";
import p1 from "../productimg/p-2.jpg";
import p2 from "../productimg/p-3.jpg";
import p3 from "../productimg/p-4.jpg";
import p4 from "../productimg/p-6.jpg";
import "./Slider.css";

const App = () => {
  const images = [
    { id: 1, src: p1, category: "Nature", info: "Information about image 1" },
    { id: 2, src: p2, category: "City", info: "Information about image 2" },
    { id: 3, src: p3, category: "Nature", info: "Information about image 3" },
    { id: 4, src: p4, category: "City", info: "Information about image 4" },
    // Add more images with categories and information as needed
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div>
      {/* Category filter buttons */}
      <div>
        <button onClick={() => handleCategoryChange("All")}>All</button>
        <button onClick={() => handleCategoryChange("Nature")}>Nature</button>
        <button onClick={() => handleCategoryChange("City")}>City</button>
        {/* Add more category buttons as needed */}
      </div>

      {/* Gallery of images */}
      <div className="gallery">
        {images.map((image) => {
          // Filter images based on selected category
          if (
            selectedCategory === "All" ||
            image.category === selectedCategory
          ) {
            return (
              <div
                key={image.id}
                className="image-container"
                onMouseEnter={() => setHoveredImage(image)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <img src={image.src} alt={image.category} className="image" />
                {hoveredImage && hoveredImage.id === image.id && (
                  <div className="info-container">
                    <p className="info">{image.info}</p>
                  </div>
                )}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default App;
