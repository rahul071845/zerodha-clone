import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav
            className="navbar sticky-top navbar-expand-lg border-bottom shadow-sm"
            style={{ backgroundColor: "white" }}
        >
            <div className="container p-1">
                <Link className="navbar-brand" to='/'>
                    <img
                        src="media/images/logo.svg"
                        alt="logo"
                        style={{ width: "18%", marginLeft: "6.5rem" }}
                    />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{ marginRight: '6.25rem' }}>
                    <form className="d-flex" role="search">
                        <ul className="navbar-nav mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/signup">
                                    Signup
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/products">
                                    Products
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/pricing">
                                    Pricing
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/support">
                                    Support
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">
                                    <i class="fa fa-bars fa-lg" aria-hidden="true"></i>
                                </Link>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
