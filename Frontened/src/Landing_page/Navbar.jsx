import React from "react";
import "./NavbarCss.css";
import { Link } from "react-router-dom"; // for a tag replace

const Navbar = () => {
  return (
    // <div className='container-fluid'>
    <nav class="navbar navbar-expand-lg sticky-top border-bottom  bg-body-tertiary">
      <div class="container">
        <Link class="navbar-brand" to="/">
          <img
            style={{ width: "30%" }}
            src="/ZerodhaImages/zerodhaImg/17.jpg"
            alt=""
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 navLinks">
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/signup">
                SignUp
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/product">
                Products
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/pricing">
                Pricing
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/support">
                Support
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" href="#">
                <i class="fa-solid fa-bars"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    // </div>
  );
};

export default Navbar;
