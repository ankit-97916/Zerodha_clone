const {Schema} =  require("mongoose");


// Schema for 
const  HoldingSchema =  new Schema ({
   name: {
    type: String,
    required: true,
    trim: true
   },
    qty: {
        type : Number,
    },
    avg: {
        type: Number,
    },
    price: {
        type: Number,
    },
    net: {
        type: String,
    },
    day: {
        type: String,
    },

});

module.exports =  {HoldingSchema}