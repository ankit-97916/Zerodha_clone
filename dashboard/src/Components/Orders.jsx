import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

const Orders = () => {
const [order, setOrder] = useState([]);
useEffect(()=> {
  axios.get("http://localhost:3000/order")
  .then((res)=> {
    setOrder(res.data)
  })
},[])

  return (
    <div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>
        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
       <table>
          <tr>
            <th>name</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>mode</th>
            <th>Date/time</th>
          </tr>
          {order.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price.toFixed(2)}</td>
                <span className={`${
                  stock.mode === "BUY" ? "badge text-bg-primary" : "badge text-bg-danger" 
                }`}>
                  {stock.mode}
                </span>
                <td>
                  {new Date(stock.created_At).toLocaleString("en-IN", {
                    dateStyle: "medium",
                    timeStyle: "short"
                  })}
                </td>
              </tr>
            );
          })}
        </table>
    </div>
  );
};

export default Orders;