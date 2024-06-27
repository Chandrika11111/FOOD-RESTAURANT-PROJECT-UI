import React, { useState, useEffect } from "react";
import { API_URL } from "../api";
import { useParams } from "react-router-dom";
import TopBar from "./TopBar";

const ProductMenu = () => {
  const [products, setProducts] = useState([]);
  const { firmId,firmName } = useParams();
  const productHandler = async () => {
    try {
      const response = await fetch(`${API_URL}/product/firmproducts/${firmId}`);
      const newProductData = await response.json();
      setProducts(newProductData.products);
      console.log(newProductData);
    } catch (error) {
      console.log("product failed to fetch", error);
    }
  };
  useEffect(() => {
    productHandler();
  }, []);
  return (
    <>
      <TopBar />
      <div className="productsection">
        <h3>{firmName}</h3>
        {products.map((item) => {
          return (
            <div className="productBox">
              <div>

                <div><strong>{item.productName}</strong></div>
                <div>₹{item.price}</div>
                <div>{item.description}</div>
              </div>
              <div className="productImage">
                <img src={`${API_URL}/uploads/${item.image}`} />
                <div className="addButton">ADD</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductMenu;
