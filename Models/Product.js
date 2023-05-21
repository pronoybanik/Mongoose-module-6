const mongoose = require("mongoose")


// 1. schema design
const productSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "please provide a name is this product"],
        trim: true,
        unique: [true, "Name mast be unique"],
        minLength: [3, "Name mast be at least  3 character"],
        maxLength: [100, "Name is to large"]
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: [0, "price can't br negative"]
    },
    unit: {
        type: String,
        required: true,
        enum: {
            values: ["kg", "liter", "pcs"],
            message: "unit value cant br {value}, must br kg/liter/pcs"
        }
    },
    quantity: {
        type: Number,
        required: true,
        min: [0, "quantity cant br negative"],
        validate: {
            validator: (value) => {
                const isInteger = Number.isInteger(value);
                if (isInteger) {
                    return true;
                }
                else {
                    return false;
                }
            }
        },
        message: "Quantity mast be an integer "
    },
    status: {
        type: String,
        required: true,
        enum: {
            values: ["in-stock", "out-of-stock", "discontinued"],
            message: "status con't be {VALUE}"
        }
    },

    // supplier: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Supplier",
    // },
    // categories: [{
    //   name: {
    //     type: String,
    //     required: true,
    //   },
    //   _id: mongoose.Schema.Types.ObjectId
    // }]


}, {
    timestamps: true,
})

// 2. model
const Product = mongoose.model("Product", productSchema)

module.exports = Product;  