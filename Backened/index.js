 
  require('dotenv').config();
  // require express-
const express = require("express");
const app =  express();
const cors =  require("cors")


const allowedOrigins = 'http://localhost:5174';

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS: " + origin));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
 

// cookie parser
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(express.json());

// require body-parser
const bodyParsar =  require('body-parser');
app.use(bodyParsar.json());

const authRoute = require("./Routes/AuthRoute");
app.use("/", authRoute);
// require cors

const {OrderModel} = require("./models/orderModels.js")
const {PositionModels} = require("./models/positionModel");
const {HoldingModels} = require("./models/HoldingsModel");


const Port = process.env.PORT || 3000; 
const mongoUrl = process.env.MONGO_URL;

// require monoose;
const mongoose =  require('mongoose');


// listening server
app.listen(Port, async () => {
    console.log("port was listening");
    await mongoose.connect(mongoUrl);
    console.log("dbconnnn")
});
// app.get('/addPosition', async (req, res) => {
//    let tempHoldings = [
//       {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },

//    ];

//    tempHoldings.forEach((items)=> {
//      let newHolding =  new PositionModels({
//       product: items.product,
//     name: items.name,
//     qty: items.qty,
//     avg: items.avg,
//     price: items.price,
//     net: items.net,
//     day: items.day,
//     isLoss: items.isLoss,
//  });
//     //  newHolding.save();
//    });
//    res.send("done")
// });

app.get('/', (req, res) => {
 res.send("port is working  home hai ")
});


// 
app.get("/allHoldings" , async (req,res) => {
  let allHoldings =  await HoldingModels.find({});
  res.json(allHoldings);
  console.log(res.data)
});

// find Order
app.get('/order', async (req,res) => {
  let allOrders =  await OrderModel.find({})
  res.json(allOrders);
})

// 
app.post("/newOrder", async (req, res) => {
try{
    let newOrder = await  new OrderModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
    created_At: req.body.created_At

  });
    await newOrder.save();

} catch(err){
  console.error(err);
  res.status(500).send("server Errror")
}
})

//
 app.get("/allPositions" , async (req,res) => {
  let allPositions =  await PositionModels.find({});
  res.json(allPositions);
});



// ✅ Universal Route (must be at the end)
app.use("/",(req, res) => {
  res.status(404).send('404 Page Not Found!');
});

app.get('/favicon.ico', (req, res) => {
  res.status(204).end(); // No Content
});






