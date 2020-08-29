import React from 'react';
import './Header.css';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
    return (
      <div className="header text-white bg-dark">
        <nav>
          <a className="btn btn-info" href="/shop">
            Home
          </a>
          <a className="btn btn-info" href="/review">
            Courses
          </a>
          <a className="btn btn-info" href="/manage">
            New Course
          </a>
        </nav>
      </div>
    );
};

export default Header;