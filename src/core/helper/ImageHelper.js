import React from "react";
import { API } from "../../backend";

const ImageHelper = ({ product ,height="100%"}) => {
  const imageurl = product
    ? `${API}/ad/image/${product._id}`
    : `https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;
  return (
    <div className="rounded border border-success p-2">
    {/* {console.log(imageurl)} */}
      <img
        src={imageurl}
        alt="photo"
        style={{ maxHeight: height , maxWidth: "100%" }}
        className="mb-3 rounded"
      />
    </div>
  );
};

export default ImageHelper;