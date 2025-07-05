import React from "react";

const Stats = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-5 sm-12">
          <h1 className="mb-5">Trust With the Confidence</h1>
          <div className="mb-5">
            <h3>Customer-first always</h3>
            <p className="text-muted">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments and contribute to 15% of daily retail
              exchange volumes in India.
            </p>
          </div>
          <div className="mb-5">
            <h3>No spam or gimmicks</h3>
            <p  className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like. <a href="">Our
              philosophies.</a>.
            </p>
          </div>
          <div className="mb-5">
            <h3>The Zerodha universe</h3>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>
          <div>
            <h2>Do better with money</h2>
            <p className="text-muted">
              With initiatives like <a href="">Nudge</a> and{" "}
              <a href="">Kill Switch,</a> Kill Switch, we don't just facilitate
              transactions, but actively help you do better with your money. The
              Zerodha Universe Explore our products Try Kite demo
            </p>
          </div>
        </div>
        <div className="col-lg-7 sm-12">
          <img
            style={{ width: "90%" }}
            src="/ZerodhaImages/zerodhaImg/16.jpg"
            alt="stats img"
          />
          <p className="text-center fs-5">
            <a style={{textDecoration: "none"}} href="">
              Explore our products <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a style={{textDecoration: "none"}} className="m-5" href="">
              Try kit Demo <i class="fa-solid fa-arrow-right"></i>
            </a>
          </p>

        </div>
      </div>
                <div className="text-center mt-5">
            <img src="/ZerodhaImages/zerodhaImg/9.jpg" alt="" />
          </div>

    </div>
  );
};

export default Stats;
