const {model} = require("mongoose");

const {HoldingSchema} =require("../schemas/HoldingsSchema");

const HoldingModels = new model("holding",HoldingSchema);

module.exports =  {HoldingModels};