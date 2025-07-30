import React from "react";
import Lottie from 'lottie-react';
import animationData1 from '../web.json';
import animationData2 from '../app.json';
import animationData3 from '../ml.json';

const animations = [animationData1, animationData2, animationData3]; // Store animations in an array

const Creation = () => {
  return (
    <div id="Creation-sec">
      <p id="Creation-banner">
        <i className="fa fa-cogs" style={{ margin: "0.3vh 0.6vh", padding: "0.2vh", color: "#074fe1", fontSize: "90%" }}></i>
      </p>
      <span id='Creation-banner-text'>∼ Creation.</span>

      <div id="Creation">
        {animations.map((animation, index) => (
          <div className="Creation-card" key={index}>
            <div className="Creation-sub-card">
              {/* Front of the card */}
              <div className="Card-front">
                <div className="Card-front-div">
                  <Lottie 
                    className="Creation-card-img"
                    animationData={animation}
                    loop
                    autoplay
                  />
                </div>
              </div>

              {/* Back of the card */}
              <div className="Card-back">
                <p style={{ fontSize: '18px', color: 'white', textAlign: 'center', padding: '10px' }}>
                  {index === 0 ? "Web Development" : index === 1 ? "App Development" : "Machine Learning"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Creation;
