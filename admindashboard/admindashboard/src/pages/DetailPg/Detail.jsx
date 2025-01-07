import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

export default function Detail() {
  const [product, setProduct] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [product]);
  return (
    <>
      <div className="container">
        <div className="products">
          <div className="row">
            <div key={product.id} className="card" style={{width: "18rem"}}>
              <img
                src={product.image}
                style={{width: "250px", height: "150px"}}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.category}</p>
                <button className="btn btn-warning">add basket</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
