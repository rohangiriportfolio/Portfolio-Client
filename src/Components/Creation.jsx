import React from "react";
import Lottie from 'lottie-react';
import animationData1 from '../web.json';
import animationData2 from '../app.json';
import animationData3 from '../ml.json';

const animations = [animationData1, animationData2, animationData3]; // Store animations in an array

const Creation = () => {
  const handleMouseOver = (event) => {
    const img = event.currentTarget.querySelector(".hover-img"); 
    const text = event.currentTarget.querySelector(".hover-text");

    img.style.transform = "rotate(75deg)";
    img.style.transition = "transform 0.5s ease-in-out";
    img.style.transformOrigin = "bottom left";

    text.style.opacity = "1";
  };

  const handleMouseLeave = (event) => {
    const img = event.currentTarget.querySelector(".hover-img");
    const text = event.currentTarget.querySelector(".hover-text");

    setTimeout(() => {
      img.style.transform = "rotate(0deg)";
      text.style.opacity = "0";
    }, 100);
  };

  return (
    <div id="Creation-sec">
      <p id="Creation-banner">
        <i className="fa fa-cogs"></i>
      </p>
      <span id='Creation-banner-text'>∼ Creation.</span>

      <div id="Creation">
        {animations.map((animation, index) => ( // Map over animations
          <div
            className="Creation-div"
            key={index}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          >
            <div style={{ height: "99%", width: "99%"}}>
              <div className="hover-img" style={{
                
              }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: "80%", width: '80%', border: '2px solid white', borderRadius: '20px' }}>
                  <Lottie className="Creation-div-img" 
                    animationData={animation} // Use different animation for each card
                    loop={true}
                    autoplay={true}
                  />
                </div>
              </div>

              {/* Text (hidden by default, appears on hover) */}
              <p className="hover-text">
                {index === 0 ? "Web Development" : index === 1 ? "App Development" : "Machine Learning"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Creation;
