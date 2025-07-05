import React from 'react';
const Hero = () => {
  
  return (
    <>
   
    <div className="container p-5">
      
      <div className="row text-center">
        
        <img
          src="/ZerodhaImages/zerodhaImg/14.jpg"
          alt="HeroIMg"
          className="mb-5"
        />
        <h1 className="pt-5">Invest in everything</h1>
        <p className="fs-5 fw-normal mt-2">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>

        <div className="col mt-2">
          <a href="signup" 
            style={{ width: "20%", margin: "0 auto" }}
            type="button"
            class="btn btn-primary fs-5 p-2"
          >
            Signup for free
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default Hero;
