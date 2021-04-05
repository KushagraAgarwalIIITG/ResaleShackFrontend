import React, { useState, useEffect } from "react";

import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import { getAdsByUser,deleteAd ,getAds} from "./helper/adminapicall";

const ManageUserProducts = () => {
  const [products, setProducts] = useState([]);
  const [userProducts,setUserProducts]=useState([]);
  const { user, token } = isAutheticated();

  const preload = (id) => {
    getAdsByUser(id).then(data => {
        console.log(data);
        setProducts(data);
      
    });
  };

  useEffect(() => {
   // preload(user._id,token);
  }, []);

  const deleteThisProduct = productId => {
    deleteAd(productId, user._id, token).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload(user._id,token);
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
          {/* <h2 className="text-center text-white my-3">Total 3 products</h2> */}
            {console.log(getAdsByUser(user._id,token))}
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
