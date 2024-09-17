import React from "react";
import "../styles/alt.scss";
import "add-to-calendar-button";
// import horizontal from "../images/horizontal.jpg";

const Alt = () => {
  return (
    <div className="container">
      {/* <img src={horizontal} class="wave-img" /> */}

      <div className="save-the-date-text">
        <div className="header-text"> cean & evelyn</div>
        <div className="subtitle-text">we're getting married!</div>
        <div className="venue-text">
          {/* Save the Date:
          <div className="divider"></div> */}
          <div className="date-text"> September 27, 2025 </div>
          <div className="divider"></div>
          <div> The Wythe Hotel</div>
          <div className="address-text">
            Address: {"  "}
            <a className="venue-address" href="https://g.co/kgs/mo9U1ps">
              80 Wythe Ave, Brooklyn, NY 11249
            </a>
          </div>
          <div className="cal-button">
            <add-to-calendar-button
              name="Cean and Evelyn's Wedding"
              options="'Apple','Google','iCal'"
              location="80 Wythe Ave, Brooklyn, NY 11249"
              startDate="2025-09-27"
              endDate="2025-09-27"
              startTime="17:00"
              endTime="23:30"
              timeZone="America/New_York"
              buttonsList
              hideTextLabelButton
              buttonStyle="round"
            ></add-to-calendar-button>
          </div>
          <span className="invitations">Invitations to follow</span>
        </div>
      </div>
    </div>
  );
};

export default Alt;
