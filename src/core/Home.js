import React from 'react'
import { useState, useEffect, useRef } from "react";
import { API } from "../backend"
import Base from "./Base"
import Card from "./Card";
import { getAds } from "./helper/coreapicalls";
//This is the component which is displayed on the homepage.

export default function Home() {

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const inputEl = useRef("");
  const loadAllProduct = () => {
    getAds().then(data => {
      if (data?.error) {
        setError(data?.error);
      } else {
        setProducts(data);
      }
    });
  };
  //Search bar is implemented here
  const getSearchTerm = () => {
    searchHandler(inputEl.current.value);
  };
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newProductList = products.filter((product) => {
        return Object.values(product)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newProductList);
    } else {
      setSearchResults(products);
    }
  };



  useEffect(() => {
    loadAllProduct();
  }, []);



  return (
    <Base title="ResaleShack" description="Welcome to Home">


      <div >
        <div >
          <input
            ref={inputEl}
            type="text"
            placeholder="Search What You want"
            className="form-control "
            value={searchTerm}
            onChange={getSearchTerm}
          />
          <i className="search icon"></i>
        </div>
      </div>


      <div className="row text-center">
        <h1 className="text-white">Ads</h1>
        <div className="row">
          {searchTerm.length < 1 ? products?.map((product, index) => {
            return (
              <div key={index} className="col-3 mb-3">
                <Card product={product} />
              </div>
            );
          }) : searchResults?.map((product, index) => {
            return (
              <div key={index} className="col-3 mb-3">
                <Card product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </Base>
  );
}
