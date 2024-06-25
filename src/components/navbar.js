import React from "react";
import "../styles/navbar.scss";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__links">
        <li className="navbar__link--hidden-mobile">
          <a className="navbar__link" href="#a-story">
            <div className="navbar__divider"></div>
            <span className="navbar__text">Our Story</span>
          </a>
        </li>
        <li>
          <a className="navbar__link" href="#the-plan">
            <div className="navbar__divider"></div>
            <div className="navbar__label">
              <span className="navbar__text">
                <span className="navbar__text--hidden-mobile">The</span> Plan
              </span>
            </div>
          </a>
        </li>
        <li>
          <a className="navbar__link" href="#the-venues">
            <div className="navbar__divider"></div>
            <div className="navbar__label">
              <span className="navbar__text">
                Venue{" "}
                <span className="navbar__text--hidden-mobile">Details</span>
              </span>
            </div>
          </a>
        </li>
        <li>
          <a className="navbar__link" href="/rsvp">
            <div className="navbar__divider"></div>
            <div className="navbar__label">
              <span className="navbar__text">RSVP</span>
            </div>
          </a>
        </li>
        <li>
          <a
            className="navbar__link"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="navbar__divider"></div>
            <div className="navbar__label">
              <span className="navbar__text">Registry</span>
            </div>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
