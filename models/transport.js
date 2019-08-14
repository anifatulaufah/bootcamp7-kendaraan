/**
 * Transports Schema
 */

const mongoose = require("mongoose")
const Schema = mongoose.Schema

let transportSchema = new Schema({
    user_id:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    brand: String,
    type: String,
    cc: Number,
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
})

let Transport = mongoose.model("Transportation", transportSchema)

module.exports = Transport
