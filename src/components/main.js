import React from "react";
import "../styles/main.scss";
// import horizontal from "../images/horizontal.jpg";

const Main = () => {
  return (
    <div className="container">
      {/* <img src={horizontal} class="wave-img" /> */}

      <div className="save-the-date-text">
        <div className="header-text"> cean & evelyn</div>
        <div className="subtitle-text">we're getting married!</div>
        <div className="venue-text">
          Save the Date
          <div className="divider"></div>
          <div> September 27, 2025 </div>
          <div className="divider"></div>
          <div> The Wythe Hotel</div>
          <div>Address: 80 Wythe Ave, Brooklyn, NY 11249</div>
          {/* <button> Add to Calendar </button> */}
        </div>
      </div>
    </div>
  );
};

export default Main;
