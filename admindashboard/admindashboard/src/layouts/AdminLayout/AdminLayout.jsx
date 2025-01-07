import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./adminlayout.css"

export default function AdminLayout() {
  return (
    <>
      <div className="container">
        <div className="header">
          <ul className="admin-navbar">
            <Link className="list-admin">Add product</Link>
            <Link to={"/admin/table"} className="list-admin">Table</Link>
            <Link to={"/"} className="list-admin">Home</Link>
          </ul>
        </div>
      </div>
      <Outlet/>
      <div className="container">
        <div className="footer-page">
            <div style={{backgroundColor: 'purple'}} className="left">
                <h2>This page made in Colorlib <i style={{color: 'red'}} class="fa-solid fa-heart "></i></h2>
            </div>
        </div>
    </div>
    </>
  );
}
