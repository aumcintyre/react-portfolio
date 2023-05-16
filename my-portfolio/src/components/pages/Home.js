import React from "react";

export default function Home() {
  return (
    <div>
      <div className="home-container row">
        <div>
          <h1 className="home-row col-md-12" style={{ fontSize: "70px" }}>
            Hi, I'm Austin McIntyre!
          </h1>
          <img src="images/home-logo.png" className="home-logo" />
          <p
            className="home-row container"
            style={{ padding: "28px", fontSize: "24px" }}
          >
            Thank you for taking the time to stop by my portfolio. Above, you
            will find links to learn more about myself and my current works.
            Below, you can navigate directly to my LinkedIn or GitHub pages.
            Enjoy!
          </p>
        </div>
      </div>
    </div>
  );
}
