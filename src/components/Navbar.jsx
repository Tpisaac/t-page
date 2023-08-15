import { Link } from "react-router-dom";

import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="text-2xl font-medium relative top-15 z-30 px-10">
        <ul className="flex gap-12">
          <Link to="/t-page">
            <li>Home</li>
          </Link>

          <Link to="/t-page/contact">
            <li>Contact</li>
          </Link>

          <Link to="/t-page/about">
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
