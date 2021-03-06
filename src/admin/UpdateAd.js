import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import {
  getCategories,
  getAd,
  updateAd
} from "./helper/adminapicall";
import { isAutheticated } from "../auth/helper/index";
//Component to display a form to update a particular ad
const UpdatetheAd = ({ match }) => {
  const { user, token } = isAutheticated(); //Protected route

  const [values, setValues] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
    categories: [],
    category: "",
    loading: false,
    error: "",
    createdProduct: "",
    getaRedirect: false,
    formData: ""
  });

  const {
    title,
    description,
    price,
    categories,
    category,
    loading,
    error,
    createdProduct,
    getaRedirect,
    formData
  } = values;

  const preload = productId => {
    console.log(productId)
    getAd(productId).then(data => {
      console.log(data);
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        preloadCategories();
        setValues({
          ...values,
          title: data.title,
          description: data.description,
          price: data.price,
          category: data.category._id,
          formData: new FormData()
        });
      }
    });
  };
  //preload categories 
  const preloadCategories = () => {
    getCategories().then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          categories: data,
          formData: new FormData()
        });
      }
    });
  };
  //match.params.productId has product id for the product to be updated
  useEffect(() => {
    console.log(match.params);
    preload(match.params.productId);
  }, []);

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });

    updateAd(match.params.productId, user._id, token, formData).then(
      data => {
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({
            ...values,
            title: "",
            description: "",
            price: "",
            image: "",
            loading: false,
            createdProduct: data.title
          });
        }
      }
    );
  };

  const handleChange = name => event => {
    const value = name === "image" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const successMessage = () => (
    <div
      className="alert alert-success mt-3"
      style={{ display: createdProduct ? "" : "none" }}
    >
      <h4>{createdProduct} updated successfully</h4>
    </div>
  );

  const createProductForm = () => (
    <form>
      <span>Post image</span>
      <div className="form-group">
        <label className="btn btn-block btn-success">
          <input
            onChange={handleChange("image")}
            type="file"
            name="image"
            accept="image"
            placeholder="choose a file"
          />
        </label>
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("title")}
          name="image"
          className="form-control"
          placeholder="Name"
          value={title}
        />
      </div>
      <div className="form-group">
        <textarea
          onChange={handleChange("description")}
          name="image"
          classtitle="form-control"
          placeholder="Description"
          value={description}
        />
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("price")}
          type="number"
          className="form-control"
          placeholder="Price"
          value={price}
        />
      </div>
      <div className="form-group">
        <select
          onChange={handleChange("category")}
          className="form-control"
          placeholder="Category"
        >
          <option>Select</option>
          {categories &&
            categories.map((cate, index) => (
              <option key={index} value={cate._id}>
                {cate.name}
              </option>
            ))}
        </select>
      </div>
      <button
        type="submit"
        onClick={onSubmit}
        className="btn btn-outline-success mb-3"
      >
        Update Product
      </button>
    </form>
  );

  return (
    <Base
      title="Add a product here!"
      description="Welcome to product creation section"
      className="container bg-info p-4"
    >
      <Link to="/user/dashboard" className="btn btn-md btn-dark mb-3">
        Go Back
      </Link>
      <div className="row bg-dark text-white rounded">
        <div className="col-md-8 offset-md-2">
          {successMessage()}
          {createProductForm()}
        </div>
      </div>
    </Base>
  );
};

export default UpdatetheAd;
