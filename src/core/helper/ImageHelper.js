import React from "react";
import { API } from "../../backend";
//IT CALLS THE API TO GET THE IMAGE

const ImageHelper = ({ product, height = "100%" }) => {
  const imageurl = product
    ? `${API}/ad/image/${product._id}`
    : `https://upload.wikimedia.org/wikipedia/en/9/95/Test_image.jpg`;
  return (
    <div className="rounded border border-success p-2">
      <img
        src={imageurl}
        alt="photo"
        style={{ maxHeight: height, maxWidth: "100%" }}
        className="mb-3 rounded"
      />
    </div>
  );
};

export default ImageHelper;
