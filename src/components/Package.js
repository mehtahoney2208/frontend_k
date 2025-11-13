import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./css/Package.css";

export default function Package() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const API = "http://localhost:5000/api/product/getproducts";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(API);
        setProducts(response.data.productList);
        setFilteredProducts(response.data.productList);
        console.log(response.data.productList);
      } catch (err) {
        setError("Failed to fetch products. Please try again later.");
        console.error(err);
      }
    }
    fetchData();
  }, []);

  function handleItem(e, id) {
    e.preventDefault();
    navigate(`/item/${id}`);
  }

  return (
    <div className="con">
      {error && <div className="alert alert-danger">{error}</div>}

      {/* Product Display */}
      <div className="row justify-content-center">
        {products.length > 0 ? (
          products.map((product, index) => (
            <div class="card col-md-3" style={{ width: "18rem" }} key={index}>
              <img src={`http://localhost:5000/${product.image}`} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{product.name}</h5>
                <p class="card-text">
                   {product.description}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
}
