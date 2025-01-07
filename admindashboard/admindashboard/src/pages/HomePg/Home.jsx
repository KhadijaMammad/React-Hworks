import React from "react";
import {useEffect} from "react";
import {useState} from "react";
import { Link } from "react-router-dom";


export default function Home() {
  const [list, setlist] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true)
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setlist(data);
      });
  }, []);

  return (
    <>
      <div className="container">
        <h2 style={{color: "red", fontWeight: "bold"}} className="text-center">
          Product Cards
        </h2>
        <div className="row">
          {isloading ? (
            <h2>waiting</h2>
          ) : (
            list.map((product) => (
              <div className="card" style={{width: "18rem", height: "450px"}}>
                <img
                  src={product.image}
                  style={{width: "130px", height: "200px"}}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.category}</p>
                  <p className="card-price">{product.price}$</p>
                  <button className="btn btn-primary">
                    <Link style={{textDecoration: 'none', color: 'white'}} className="detail" to={`detail/${product.id}`}>
                      detail
                    </Link>
                  </button>
                  <button className="btn btn-success">basket</button>
                  <button className="btn btn-danger">favorite</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
