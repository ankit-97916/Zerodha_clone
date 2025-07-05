import React, { useEffect, useState } from 'react';

const StockPrice = () => {
  const [prices, setPrices] = useState([]);
  const API_KEY = "d1gg75hr01qmqatv8hs0d1gg75hr01qmqatv8hsg"; // ✅ Use your real key here

  const globalCompanies = [
    { name: "Apple Inc.", symbol: "AAPL" },
    { name: "Microsoft Corporation", symbol: "MSFT" },
    { name: "Amazon.com Inc.", symbol: "AMZN" },
    { name: "Alphabet Inc. (Google)", symbol: "GOOGL" },
    { name: "Meta Platforms Inc. (Facebook)", symbol: "META" },
    { name: "Tesla Inc.", symbol: "TSLA" },
    { name: "NVIDIA Corporation", symbol: "NVDA" },
    { name: "Netflix Inc.", symbol: "NFLX" },
    { name: "Adobe Inc.", symbol: "ADBE" }
    // ⛔ Keep it short unless you're using backend or handling API rate limits
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
              change: data.d,
              percent: data.dp
            };
            console.log(fdata)
            return fdata
          })
        );
        setPrices(allData);
      } catch (err) {
        console.error("Error fetching data:", err.message);
      }
    };

    fetchPrices();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>📈 Global Stock Prices</h2>
      {prices.length === 0 ? (
        <p>Loading...</p>
      ) : (
        prices.map((stock) => (
          <div key={stock.symbol} style={{ marginBottom: "10px", padding: "10px", borderBottom: "1px solid #ddd" }}>
            <strong>{stock.name}</strong> — ${stock.price?.toFixed(2)}
            <span style={{ color: stock.change >= 0 ? 'green' : 'red', marginLeft: "10px" }}>
              {stock.change >= 0 ? "▲" : "▼"} {stock.change?.toFixed(2)} ({stock.percent?.toFixed(2)}%)
            </span>
          </div>
        ))
      )}
    </div>
  );
};

export default StockPrice;
