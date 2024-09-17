import React from "react";
import "../styles/main.scss";
import "add-to-calendar-button";
import engagement from "../images/engagement.jpg";

const Main = () => {
  return (
    <div className="container">
      <div className="save-the-date-text">
        <div className="header-text">
          cean park <div className="script-text"> and </div> evelyn kang
        </div>
        <div className="subtitle-text">we're getting married!</div>
        <img src={engagement} class="main-img" alt="couple holding hands" />
        <div className="venue-text">
          <div className="date-text"> September 27, 2025 </div>
          <div className="divider"></div>
          <div>
            <a className="venue-address-text" href="https://g.co/kgs/mo9U1ps">
              The Wythe Hotel
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
          <span className="invitations">RSVP Coming Soon!</span>
        </div>
      </div>
    </div>
  );
};

export default Main;
