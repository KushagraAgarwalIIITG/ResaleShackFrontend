import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import { getAdsByUser, deleteAd, getAds } from "./helper/adminapicall";
//Component to manage ads published by a user
const ManageUserProducts = () => {
  const [products, setProducts] = useState([]);
  const [userProducts, setUserProducts] = useState([]); // userProducts has the ad published by the user
  const { user, token } = isAutheticated(); // Protected route
  //getAdsByUser gets all the ads published by the user
  const preload = async (id, token) => {
    await getAdsByUser(id, token).then(data => {
      console.log("Data", data);
      setUserProducts(data);

    });
  };

  useEffect(() => {
    preload(user._id, token);
  }, []);

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
    <Base title="Welcome" description="Manage products here">
      <h2 className="mb-4">All products:</h2>
      <Link className="btn btn-info" to={`/user/dashboard`}>
        <span className=""> Dashboard </span>
      </Link>
      <div className="row">
        <div className="col-12">
          {
            userProducts.map((product, index) => {
              return (
                <div key={index} className="row text-center mb-2 ">
                  <div className="col-4">
                    <h4 className="text-white text-left ">{product.title}</h4>
                  </div>
                  <div className="col-4">
                    <Link
                      className="btn btn-success"
                      to={`/admin/product/update/${product._id}`}
                    >
                      <span className="">Update</span>
                    </Link>
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

export default ManageUserProducts;
