import React, { useEffect, useState } from "react";
import { add } from "../Store/cartSlice";
import { useDispatch } from "react-redux";
import Card from "./Card";

export const Products = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchApi() {
      setLoading(true);
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
        });
      setLoading(false);
    }

    fetchApi();
  }, []);

  const dispatch = useDispatch()
  const handleAdd = (product) => {
    console.log(product);
    dispatch(add(product));
  };

  return (
    <div className="product-list">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        product.map((item, i) => (
          <Card
            key={i}
            image={item.image}
            handleAdd={handleAdd}
            title={item.title}
            price={Math.floor(item.price * 62)}
          />
        ))
      )}
    </div>
  );
};
