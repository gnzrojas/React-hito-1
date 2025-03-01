import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const total = 25000;
  const token = false;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white"
                to="/">
                Pizzeria Mamma Mia
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white border border-white rounded mx-2"
                to = "/">
                🍕Home
              </Link>
            </li>
            {token ? (
              <>
                <li className="nav-item">
                  <a className="nav-link text-white border border-white rounded mx-2" href="#">
                    🔓Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white border border-white rounded mx-2" href="#">
                    🔒Logout
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white border border-white rounded mx-2"
                    to="/login">
                    🔐Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white border border-white rounded mx-2"
                  to="/register">
                    🔐Register
                  </Link>
                </li>
              </>
            )}
          </ul>
          
            <Link to="/cart">
          <button className="btn border border-white text-white">
            🛒 Total: ${total.toLocaleString()}
          </button>
            </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;