import React from "react";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav-container">
        {/* Left side: navigation links */}
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
            display: inline;
          </li>
          <li>
            <Link to="/SavedCandidates">Potential Candidates</Link>
            display: inline;
          </li>
        </ul>

        {/* Centered page title */}
        <h1 className="page-title">Candidate Search</h1>
      </nav>
    </header>
  );
};

export default Nav;
