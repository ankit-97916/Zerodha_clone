// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import GeneralContext from "./GeneralContext";
// import "./BuyActionWindow.css";

// const SellActionWindow = ({ uid }) => {
//   const [stockQuantity, setStockQuantity] = useState(1);
//   const [stockPrice, setStockPrice] = useState(0.0);

//   const handleSellClick = async () => {
//     try {
//       const res = await axios.post("http://localhost:3000/newOrder", {
//         name: uid,                      // ✅ uid = stock name
//         qty: stockQuantity,
//         price: stockPrice,
//         mode: "SELL",
//       });


//       // Optional: Reset fields after success
//       setStockQuantity(1);
//       setStockPrice(0.0);

//       GeneralContext.closeBuyWindow();
//     } catch (err) {
//       console.error("Failed to place order:", err);
//       alert("Something went wrong while placing the order.");
//     }
//   };

//   const handleCancelClick = () => {
//     GeneralContext.closeBuyWindow();
//   };

//   return (
//     <div className="container" id="buy-window" draggable="true">
//       <div className="regular-order">
//         <div className="inputs">
//           <fieldset>
//             <legend>Qty.</legend>
//             <input
//               type="number"
//               name="qty"
//               id="qty"
//               onChange={(e) => setStockQuantity(Number(e.target.value))}
//               value={stockQuantity}
//             />
//           </fieldset>
//           <fieldset>
//             <legend>Price</legend>
//             <input
//               type="number"
//               name="price"
//               id="price"
//               step="0.05"
//               min="0"
//               onChange={(e) => setStockPrice(Number(e.target.value))}
//               value={stockPrice}
//             />
//           </fieldset>
//         </div>
//       </div>

//       <div className="buttons">
//         <span>Margin required ₹{(stockQuantity * stockPrice).toFixed(2)}</span>
//         <div>
//           <Link  className="btn btn-blue" onClick={handleSellClick}>
//             Sell
//           </Link>
//           <Link  className="btn btn-grey" onClick={handleCancelClick}>
//             Cancel
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SellActionWindow;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css"; // you can reuse the same CSS

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleSellClick = async () => {
    try {
      const res = await axios.post("http://localhost:3000/newOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "SELL", // 🔁 Changed to SELL
        created_At: new Date().toISOString(), // ✅ Add timestamp
      });

      console.log("Sell order placed successfully", res.data);

      setStockQuantity(1);
      setStockPrice(0.0);

      GeneralContext.closeSellWindow(); // 🔁 make sure this function exists in your context
    } catch (err) {
      console.error("Failed to place sell order:", err);
      alert("Something went wrong while placing the sell order.");
    }
  };

  const handleCancelClick = () => {
    GeneralContext.closeSellWindow();
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              min="0"
              onChange={(e) => setStockPrice(Number(e.target.value))}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin returned ₹{(stockQuantity * stockPrice).toFixed(2)}</span>
        <div>
          <Link to="#" className="btn btn-red" onClick={handleSellClick}>
            Sell
          </Link>
          <Link to="#" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
