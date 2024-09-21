import React from "react";
import "./ImageGrid.css"; // Import the CSS file

const ImageGrid = ({ images }) => {
  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <div key={index} className="grid-item">
          <div className="image-container">
            <img src={image} alt={`grid-item-${index}`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
