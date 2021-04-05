import React from 'react'
import  { useState, useEffect } from "react";
import { API} from "../backend"
import Base from "./Base"
import Card from "./Card";
import { getAdsByCategory } from "./helper/coreapicalls";

export default function CategoryPage(props) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

   console.log(props.match);
  const loadAllProduct = () => {
    getAdsByCategory(props.match.params.categoryId).then(data => {
      if (data.error) {
        setError(data.error);
      } else  {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadAllProduct();
  }, []);

  return (
    <Base title={products[0]?.category.name} description="Welcome to ResaleShack">
      <div className="row text-center">
        <h1 className="text-white">Ads</h1>
        <div className="row">
          {products.map((product, index) => {
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
