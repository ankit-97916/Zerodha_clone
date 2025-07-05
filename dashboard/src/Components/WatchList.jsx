import React, { useState, useContext, useEffect } from "react";

// import axios from "axios";

import GeneralContext from "./GeneralContext";

import { Tooltip, Grow } from "@mui/material";

import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import { DoughnutChart } from "./DoughnoutChart";

// const labels = watchlist.map((subArray) => subArray["name"]);

const WatchList = () => {
  let [watchlist, setWatchList] =  useState([])
    const API_KEY = import.meta.env.VITE_API_KEY; // ✅ Use your real key here
  
const globalCompanies = [
  { name: "Apple Inc.", symbol: "AAPL" },
  { name: "Microsoft Corporation", symbol: "MSFT" },
  { name: "Amazon.com Inc.", symbol: "AMZN" },
  { name: "Alphabet Inc. (Google)", symbol: "GOOGL" },
  { name: "Meta Platforms Inc. (Facebook)", symbol: "META" },
  { name: "Tesla Inc.", symbol: "TSLA" },
  { name: "NVIDIA Corporation", symbol: "NVDA" },
  { name: "Netflix Inc.", symbol: "NFLX" },
  { name: "Adobe Inc.", symbol: "ADBE" },
  { name: "Intel Corporation", symbol: "INTC" },
  { name: "Advanced Micro Devices", symbol: "AMD" },
  { name: "PayPal Holdings", symbol: "PYPL" },
  { name: "Salesforce Inc.", symbol: "CRM" },
  { name: "Uber Technologies Inc.", symbol: "UBER" },
  { name: "Zoom Video Communications", symbol: "ZM" },
  { name: "Snowflake Inc.", symbol: "SNOW" },
  { name: "Shopify Inc.", symbol: "SHOP" },
  { name: "Walt Disney Company", symbol: "DIS" },
  { name: "Johnson & Johnson", symbol: "JNJ" },
  { name: "Coca-Cola Company", symbol: "KO" }
];
  
    useEffect(() => {
      const fetchPrices = async () => {
        try {
          const allData = await Promise.all(
            globalCompanies.map(async (company) => {
              const res = await fetch(`https://finnhub.io/api/v1/quote?symbol=${company.symbol}&token=${API_KEY}`);
              const data = await res.json();
               let fdata = {
                name: company.name,
                symbol: company.symbol,
                price: data.c,
                change: data.d <0,
                percent: data.dp
              };
              return fdata
            })
          );
          setWatchList(allData);
        } catch (err) {
          console.error("Error fetching data:", err.message);
        }
      };
  
      fetchPrices();
    }, []);
  
  const data = {
    labels: watchlist.map((subArray) => subArray["name"]),
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };


  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>

      <DoughnutChart data={data} />
    </div>
  );
};

export default WatchList;

// watchlistitem component- 

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = (e) => {
    setShowWatchlistActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.change ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent?.toFixed(2)}%</span>
          {stock.change ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">${stock.price?.toFixed(2)}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.symbol} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };
    const handleSellClick = () => {
    generalContext.openSellWindow(uid);
  };


  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleBuyClick}
        >
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleSellClick}
        >
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};