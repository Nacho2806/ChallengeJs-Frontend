import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/"><i class="fas fa-hand-holding-usd"></i> Personal Budget Management</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/"><i class="fas fa-wallet "></i> PBM</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about"><i class="fas fa-address-card"></i> About</Link>
              </li>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" 
                aria-expanded="false"><i class="far fa-money-bill-alt"></i> ABM </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/home">Home</Link>
                  <Link className="dropdown-item" to="/create">Add A New Operation</Link>
                  <Link className="dropdown-item" to="/moves">All Your Operations</Link>
                <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/signin">Logout</Link>
                </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signin"><i class="fas fa-sign-in-alt"></i> Sign in</Link>
                </li> 
                <li className="nav-item">
                  <Link className="nav-link" to="/signup"><i class="fas fa-user-plus"></i> Sign up</Link>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </nav>
        )
    }
}