import React from "react";
import { useParams } from "react-router-dom";

const Img = () => {
  const { imageName } = useParams();
  const { imageUrl } = `/img/${imageName}`;
  return (
    <>
      <div>
        <h1>Image: {imageName}</h1>
        <img
          src={imageUrl}
          alt={imageName}
          width="500"
          height="500"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://bf1e8855-b19c-4ca1-9a64-29f2f219f4c5-00-3al7y3g4e276k.worf.replit.dev/img/not-found.png`; // Fallback image
          }}
        />
      </div>
    </>
  );
};

export default Img;
