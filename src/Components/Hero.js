import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div>
      <div className="on">
        <img
          src="https://redefinestatus.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1568736772245-26914aae0b09%3Fixlib%3Drb-4.0.3%26q%3D80%26fm%3Djpg%26crop%3Dentropy%26cs%3Dtinysrgb&w=3840&q=75"
          className="picture"
        ></img>
      </div>
      <div className="star">🌟</div>
      <h1 className="notion-title">
        <b>Redefine Status</b>
      </h1>

      <div className="title-space">&nbsp;</div>
      <div className="notion-text">
        How We Can Correct
        <b> Mankind's Leaderboard </b>
      </div>

      <div className="notation-blank">&nbsp;</div>
    </div>
  );
}

export default Hero;
