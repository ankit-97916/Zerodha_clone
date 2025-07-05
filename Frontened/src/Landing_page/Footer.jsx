import React from "react";
import "./FooterCss.css";

const Footer = () => {
  return (
    <footer className="Footer mt-5 sticky">
      <div className="container">
        <div className="row between">
          <div className="col-4 columns">
            <div>
              <img
                style={{ width: "40%" }}
                src="/ZerodhaImages/zerodhaImg/17.jpg"
                alt=""
              />
            </div>
            <p>
              © 2010 - 2025, Zerodha Broking Ltd. <br /> All rights reserved.{" "}
            </p>
            <ul className="SocialIcons">
              <li>
                <a href="">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fa-brands fa-square-facebook"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fa-brands fa-x-twitter"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <hr />
              <li>
                <a href="">
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fa-brands fa-square-whatsapp"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fa-brands fa-telegram"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col ftl">
                <ul className="ul">
                  <h4>Account</h4>
                  <li>Open demat account</li>
                  <li>Minor demat account</li>
                  <li>NRI demat account</li>
                  <li>Commodity</li>
                  <li>Dematerialisation</li>
                  <li>Fund transfer</li>
                  <li>MTF</li>
                  <li>Referral program</li>
                </ul>
              </div>
              <div className="col ftl">
                <ul className="ul">
                  <h4>Support</h4>

                  <li>Contact us</li>
                  <li>Support portal</li>
                  <li>How to file a complaint?</li>
                  <li>Status of your complaints</li>
                  <li>Bulletin</li>
                  <li>Circular</li>
                  <li>Z-Connect blog</li>
                  <li>Downloads</li>
                </ul>
              </div>
              <div className="col ftl">
                <ul className="ul">
                  <h4>Company</h4>
                  <li>About</li>
                  <li>Philosophy</li>
                  <li>Press & media</li>
                  <li>Careers</li>
                  <li>Careers</li>
                  <li>Zerodha.tech</li>
                  <li>Open source</li>
                </ul>
              </div>
              <div className="col ftl">
                <ul className="ul">
                  <h4>Quick links</h4>
                  <li>Upcoming IPOs</li>
                  <li>Brokerage charges</li>
                  <li>Market holidays</li>
                  <li>Economic calendar</li>
                  <li>Calculators</li>
                  <li>Markets</li>
                  <li>Sector</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <p className="footerTheory">Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF <br />

Procedure to file a <a href="">complaint on SEBI SCORES</a> : Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances <br />

Smart Online Dispute Resolution | Grievances Redressal Mechanism

Investments in <a href="">securities market</a>  are subject to market risks; read all the related documents carefully before investing.
<br />

Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.

"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." 
<br />Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
      .
        </div>
        <div className="row footerBottom">
          <ul>
            <li><a href=""></a>NSE </li>
            <li><a href=""></a>BSE</li>
            <li><a href=""></a>MCX</li>
            <li><a href=""></a>terms&conditions</li>
            <li><a href=""></a>policy&procedure</li>
            <li><a href="a"></a>privacy policy</li>
            <li><a href=""></a>Disclose</li>
            <li><a href=""></a> investors</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
