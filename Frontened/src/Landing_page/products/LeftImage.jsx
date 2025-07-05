import React from "react";

const LeftImage = ({
  imgUrl,
  productName,
  productDescription,
  tryDemo,
  learnmore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-7 ">
          <img style={{ width: "90%" }} src={imgUrl} alt="" />
        </div>
        <div className="col-5 mt-3">
          <div className="row">
            <h2>{productName}</h2>
            <p>{productDescription}</p>
            <div className="row">
              <div className="col">
                <a href="">{tryDemo}</a>
              </div>
              <div className="col">
                {" "}
                <a href="">{learnmore}</a>{" "}
              </div>
            </div>
            <div className="row mt-5">
              <div className="col">
                <img style={{ width: "80%" }} src={googlePlay} alt="imhmh" />
              </div>
              <div className="col">
                <img style={{ width: "85%" }} src={appStore} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftImage;
