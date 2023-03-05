import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <header>
      <h2>Devmountain Eatery</h2>
      <nav>
        <Link to='/homeScreen'>
          <button className="nav-btn">Home</button>
        </Link>
        <Link to='/newRecipeScreen'>
          <button className="nav-btn">Add Recipe</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
