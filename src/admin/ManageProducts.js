import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import { getAds, deleteAd } from "./helper/adminapicall";
//This component is used to render a dashboard for the admin to see and delete from all the products

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  const { user, token } = isAutheticated(); // Protected route
  const preload = () => {
    getAds().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setProducts(data);
      }
    });
  };
  //To rerender updated list of ads on the dashboard.
  useEffect(() => {
    preload();
  }, []);
  //Function to delete the product.
  const deleteThisProduct = productId => {
    deleteAd(productId, user._id, token).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  };

  return (
    <Base title="Welcome admin" description="Manage products here">
      <h2 className="mb-4">All products:</h2>
      <Link className="btn btn-info" to={`/admin/dashboard`}>
        <span className="">Admin Home</span>
      </Link>
      <div className="row">
        <div className="col-12">

          {products.map((product, index) => {
            return (
              <div key={index} className="row text-center mb-2 ">
                <div className="col-4">
                  <h4 className="text-white text-left ">{product.title}</h4>
                </div>
                <div className="col-4">
                </div>
                <div className="col-4">
                  <button
                    onClick={() => {
                      deleteThisProduct(product._id);
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

export default ManageProducts;
