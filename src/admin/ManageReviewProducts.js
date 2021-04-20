import React, { useState, useEffect } from "react";

import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import { getAdsByUser, deleteAd, getAllReviewAds, deleteReviewAd } from "./helper/adminapicall";
import ImageHelper from "../core/helper/ImageHelper"
// Component to render dashboard to manage reported ads

const ManageReviewProducts = () => {
  const [products, setProducts] = useState([]);
  const [reviewProducts, setReviewProducts] = useState([]);
  const { user, token } = isAutheticated(); //Protected route

  const preload = (id, token) => {
    getAllReviewAds(id, token).then(data => {
      console.log(data);
      setReviewProducts(data);

    });
  };
  //To rerender updated list of review ads on the dashboard.
  useEffect(() => {
    preload(user._id, token);
  }, []);
  //Function to delete the product
  const deleteThisProduct = productId => {
    deleteAd(productId, user._id, token).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload(user._id, token);
      }
    });
  };

  return (
    <Base title="Welcome admin" description="Manage the reported ads here">
      <h2 className="mb-4">Reported Ads</h2>
      <Link className="btn btn-info" to={`/admin/dashboard`}>
        <span className="">Admin Home</span>
      </Link>
      <div className="row">
        <div className="col-12">
          {console.log(getAdsByUser(user._id, token))}
          {

            reviewProducts.map((product, index) => {
              return (
                <div key={index} className="row text-center mb-2 ">

                  <div className="col-3">
                    <ImageHelper product={product.ad} height="30vh" />

                  </div>
                  <div className="col-3">

                    <h6 className="text-white text-left ">{product?.ad?.title}</h6>
                    <p className="text-white text-left ">{product?.ad?.description}</p>
                  </div>
                  <div className="col-3">
                    <button
                      onClick={() => {
                        deleteReviewAd(product?.ad?._id, user?._id, token);
                        window.location.reload();
                      }}
                      className="btn btn-info"
                    >
                      Discard
                  </button>
                  </div>
                  <div className="col-3">
                    <button
                      onClick={() => {
                        deleteThisProduct(product.ad?._id);
                        deleteReviewAd(product?.ad?._id, user?._id, token);
                        window.location.reload();
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                  </button>
                  </div>

                </div>
              );
            })}
        </div>
      </div>
    </Base>
  );
};

export default ManageReviewProducts;
