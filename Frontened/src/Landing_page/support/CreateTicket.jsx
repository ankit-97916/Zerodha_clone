import React from "react";

const CreateTicket = () => {
  return (
    <div className="container mt-5">
      <p className="fs-5" style={{color: "grey"}}>To create a ticket, select a relevant topic</p>
      <div className="row mt-4 createTicketRow">
        <div className="col">
          <h4> <i class="fa-solid fa-circle-plus"></i> &nbsp; Account Opening </h4>
          <ul className="lh-lg createTicketSecUl">
            <li className="li">
              <a href="">Resident individual</a>
            </li>
            <li  className="li">
              <a href="">Minor</a>
            </li>
            <li  className="li">
              <a href="">Non Resident Indian (NRI)</a>
            </li>
            <li  className="li">
              <a href="">Company, Partnership, HUF and LLP</a>{" "}
            </li>
            <li  className="li">
              <a href="">Glossary</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h4> <i class="fa-solid fa-address-book"></i> &nbsp; Your Zerodha Account </h4>
          <ul className="lh-lg createTicketSecUl">
            <li  className="li">
              <a href="">Your Profile</a>
            </li>
            <li  className="li">
              <a href="">Account modification</a>
            </li>
            <li  className="li">
              <a href="">Client Master Report (CMR) and Depository (NRI)</a>
            </li>
            <li  className="li">
              <a href="">Nomination (DP)</a>{" "}
            </li >
            <li  className="li">
              <a href="">Nomination</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h4> <i class="fa-solid fa-arrow-trend-up"></i> &nbsp; Kite </h4>
          <ul className="lh-lg createTicketSecUl">
            <li  className="li">
              <a href="">IPO</a>
            </li>
            <li  className="li">
              <a href="">Treading FAQs</a>
            </li>
            <li  className="li">
              <a href="">Margin Trading Facility (MTF) and Margins (NRI)</a>
            </li>
            <li  className="li">
              <a href="">Alerts and Nudges</a>{" "}
            </li>
            <li  className="li">
              <a href="">Alerts and Nudges</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row createTicketRow">
        <div className="col">
                    <h4> <i class="fa-solid fa-file"></i> &nbsp; Funds </h4>
          <ul className="lh-lg createTicketSecUl">
            <li  className="li">
              <a href="">Add money</a>
            </li>
            <li  className="li">
              <a href="">Withdraw money</a>
            </li>
            <li  className="li">
              <a href="">Add bank accounts</a>
            </li>
            <li  className="li">
              <a href="">eMandates</a>
            </li>
          </ul>

        </div>
        <div className="col">
                    <h4> <i class="fa-solid fa-coins"></i> &nbsp; Console </h4>
          <ul className="lh-lg createTicketSecUl">
            <li  className="li">
              <a href="">Portfolio</a>
            </li>
            <li  className="li">
              <a href="">Corporate actions</a>
            </li>
            <li  className="li">
              <a href="">Reports</a>
            </li>
            <li  className="li">
              <a href="">Profile</a>
            </li>
            <li  className="li">
              <a href="">Profile</a>
            </li>
          </ul>

        </div>
        <div className="col">
          <h4>&nbsp; Coin </h4>
          <ul className="lh-lg createTicketSecUl">
            <li  className="li">
              <a href="">IPO</a>
            </li>
            <li  className="li">
              <a href="">Treading FAQs</a>
            </li>
            <li  className="li">
              <a href="">Margin Trading Facility (MTF) and Margins (NRI)</a>
            </li>
            <li  className="li">
              <a href="">Alerts and Nudges</a>{" "}
            </li>
            <li  className="li">
              <a href="">Alerts and Nudges</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
