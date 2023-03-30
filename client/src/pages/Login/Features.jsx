import React from "react";
import "./Features.css";
import NavIntro from "../../components/NavIntro";

function Features() {
  return (
    <div className="feature-container">
      <NavIntro activePage={"features"} />
      <div className="feature-title">
        All the features you need for
        <br /> succeeding with your investment.
      </div>
    </div>
  );
}

export default Features;
