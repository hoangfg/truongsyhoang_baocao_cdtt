import React, { useState } from "react";
import ImageShow from "./ImageShow";
import ImageThumbnail from "./ImageThumbnail";
import FsLightbox from "fslightbox-react";

export default function ImageBox() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="item is_sticky">
      <div className="price">
        <div className="discount">
          32% <br />
          OFF
        </div>
      </div>
      <ImageShow currentImageIndex={currentImageIndex} />
      <ImageThumbnail onThumbnailClick={handleThumbnailClick} />
    </div>
  );
}
