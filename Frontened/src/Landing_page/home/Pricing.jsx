import React from "react";
import "./HomePageCss.css"

const Pricing = () => {
  return (
    <div className="container PricingContainer mt-5">
      <div className="row">
        <div className="col-5">
          <h2>Unbeatable pricing</h2>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href=""> See Pricing</a>
        </div>
        <div className="col-7 Pricing-Images">
          <div className="ImagesPrice" >
            <img  src="/ZerodhaImages/zerodhaImg/22.jpg" alt="0 rs img" />
            <p>free account opening</p>
          </div>
          <div className="ImagesPrice">
            <img src="/ZerodhaImages/zerodhaImg/22.jpg" alt=" 0 rs img" />
            <p>free equity deleivery <br /> and direct mutual funds </p>

          </div>
          <div className="ImagesPrice">
            <img  src="/ZerodhaImages/zerodhaImg/20r.jpg" alt=" 20 rs img" />
            <p>infraday and F&O</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
