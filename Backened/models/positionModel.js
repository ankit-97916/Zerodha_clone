const {model} = require("mongoose");

const {PositionsSchema} =require("../schemas/positionSchema");

const PositionModels = new model("position",PositionsSchema);

module.exports =  {PositionModels};