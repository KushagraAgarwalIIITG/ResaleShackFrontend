import React, { useState, useEffect } from "react";
import ImageHelper from "./helper/ImageHelper";
import { Redirect } from "react-router-dom";
import { addItemToCart } from "./helper/cartHelper";
import { getUserforAd, addToReview } from "./helper/coreapicalls";


const Card = ({ product, addtoCart = true, removeFromCart = false }) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);
  const [owner, setOwner] = useState('');

  const category = product.category ? product.category.name : "DEFAULT";
  const cartTitle = product ? product.title : "A photo from pexels";
  const cartDescrption = product ? product.description : "Default description";
  const cartPrice = product ? product.price : "DEFAULT";
  var date1 = new Date().toISOString();
  var date2 = product.createdAt;
  // console.log(category);
  var unitmapping = {
    "days": 24 * 60 * 60 * 1000,
    "hours": 60 * 60 * 1000,
    "minutes": 60 * 1000,
    "seconds": 1000
  };

  function floor(value) {
    return Math.floor(value)
  }

  function getHumanizedDiff(diff) {
    return floor(diff / unitmapping.days) + " days " +
      floor((diff % unitmapping.days) / unitmapping.hours) + " hours " +
      floor((diff % unitmapping.hours) / unitmapping.minutes) + " minutes";

  }

  const days_difference = getHumanizedDiff(new Date(date1) - new Date(date2));


  const addToCart = () => {
    addToReview(product._id, () => setRedirect(true));
  };
  const getARedirect = redirect => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };
  useEffect(() => {
    getUserforAd(product.user).then(data => {

      setOwner(data);

    });
  }, []);

  const showAddToCart = addtoCart => {
    return (
      addtoCart && (
        <button
          onClick={addToCart}
          className="btn btn-block btn-outline-success mt-2 mb-2"
        >
          Report
        </button>
      )
    );
  };

  const showRemoveFromCart = removeFromCart => {
    return (
      removeFromCart && (
        <button
          onClick={() => { }}
          className="btn btn-block btn-outline-danger mt-2 mb-2"
        >
          unReport
        </button>
      )
    );
  };
  return (
    <div className="card text-white bg-dark border border-info ">
      <div className="card-header lead">{cartTitle}</div>
      <div className="card-body">
        {getARedirect(redirect)}
        <ImageHelper product={product} />
        <p className="  font-weight-normal text-wrap">
          {cartDescrption}
        </p>


        <p className="btn btn-success rounded  btn-sm px-4"> Price: Rs{cartPrice}</p>

        <p className=" font-weight-normal text-wrap">
          {days_difference} ago
        </p>
        <p className=" font-weight-normal text-wrap">
          {/* {getUserAd(product.user)} */}
          <div>{`By : ${owner.name}`}</div>
          <div>{`Contact At : ${owner.email} `}</div>
          <div>{`Contact At : ${owner.phonenumber} `}</div>
          <div>{`Room Number : ${owner.roomnumber}`}</div>
          <div>{`Category : ${category}`}</div>

        </p>

        <div className="row">
          <div className="col-12">{showAddToCart(addtoCart)}</div>
          <div className="col-12">{showRemoveFromCart(removeFromCart)}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
