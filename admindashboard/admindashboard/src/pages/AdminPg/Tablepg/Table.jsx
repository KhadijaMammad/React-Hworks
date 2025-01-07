import React from "react";
import {useState, useEffect} from "react";

export default function Table() {
  const [list, setlist] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setlist(data));
  }, []);
  return (
    <>
      <div className="container">
        <div className="product-table">
          <table className=" table table-striped table-danger">
            <thead>
              <tr className="text-center">
                <th>ID</th>
                <th>Image</th>
                <th>Title</th>
                <th>Category</th>
                <th>Price</th>
                <th className="text-center">Services</th>
              </tr>
            </thead>
            <tbody>
              {list.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>
                    <img style={{width: "100px"}} src={product.image} />
                  </td>
                  <td>{product.title}</td>
                  <td>{product.category}</td>
                  <td>{product.price}$</td>
                  <td>
                    <div className="buttons d-flex gap-3">
                      <button className="btn btn-danger">delete</button>
                      <button className="btn btn-warning">edit</button>
                      <button className="btn btn-primary">fav</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
