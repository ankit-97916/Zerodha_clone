import React from "react";
import "./HomePageCss.css"


const Education = () => {
  return (
    <div className="container EducationSection">
      <div className="row">
        <div className="col-6">
          <div className="VarsityImg">
            <img src="/ZerodhaImages/zerodhaImg/24.jpg" alt="varsity" />
          </div>
        </div>
        <div className="col-6">
          <h2 className="mt-5">Free and open market education</h2>
          <p className="mt-5">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="lll">
            Varsity <i className="fa-solid fa-arrow-right"></i>
          </a>

          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>

          <a  href="mmm">
            TradingQ&A <i className="fa-solid fa-arrow-right"></i>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
