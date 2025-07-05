import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import LeftImage from "./LeftImage";
import RightImage from "./RightImage";
import Universe from "./Universe";
import Footer from "../Footer";

const ProductPage = () => {
  return (
    <>
      <Hero />
      <LeftImage
        imgUrl={"/ZerodhaImages/zerodhaImg/5.jpg"}
        productName={"Kite"}
        productDescription={
          "Our ultra-fast flagship trading platform with streaming marketdata, advanced charts, an elegant UI, and more. Enjoy the Kiteexperience seamlessly on your Android and iOS devices."
        }
        tryDemo={"try demo"}
        learnmore={"learnmore"}
        googlePlay={"/ZerodhaImages/zerodhaImg/19.jpg"}
        appStore={"/ZerodhaImages/zerodhaImg/appleplay.jpg"}
      />
      <RightImage
        productName={"Console"}
        productDescription={
          "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        }
        learnmore={"learn more"}
        imgUrl={"/ZerodhaImages/zerodhaImg/3.jpg"}
      />
      <LeftImage
        imgUrl={"/ZerodhaImages/zerodhaImg/1.jpg"}
        productName={"Coin"}
        productDescription={
          "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.."
        }
        tryDemo={"Coin"}
        googlePlay={"/ZerodhaImages/zerodhaImg/19.jpg"}
        appStore={"/ZerodhaImages/zerodhaImg/appleplay.jpg"}
      />
      <RightImage
        productName={"Kite Connect API"}
        productDescription={
          "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        }
        learnmore={"Kite connect"}
        imgUrl={"/ZerodhaImages/zerodhaImg/11.jpg"}
      />
      <LeftImage
        imgUrl={"/ZerodhaImages/zerodhaImg/2.jpg"}
        productName={"Varsity Mobile"}
        productDescription={
          "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.."
        }
        tryDemo={""}
        learnmore={"learn more"}
        googlePlay={"/ZerodhaImages/zerodhaImg/19.jpg"}
        appStore={"/ZerodhaImages/zerodhaImg/appleplay.jpg"}
      />

      <Universe />
    </>
  );
};

export default ProductPage;
