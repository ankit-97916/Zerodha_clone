const {Schema} = require("mongoose");

const OrderSchema = new Schema ({
    name: String,
    qty: Number,
    price: Number,
    mode: String,
    created_At: {
        type: Date,
        default: new Date()
    }

});

module.exports =  {OrderSchema}

