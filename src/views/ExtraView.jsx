import React from "react";
import "./ExtraView.css";

function ExtraView({ extra }) {
  return (
    <main id="extra-view-container">
      <div>
        <h1>{extra.name}</h1>
        <b>{extra.description}</b>
        {/* <img src={about.image} alt={about.name + "image"} /> */}
      </div>
    </main>
  );
}

export default ExtraView;
