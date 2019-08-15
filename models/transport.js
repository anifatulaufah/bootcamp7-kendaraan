/**
 * Transports Schema
 */

const mongoose = require("mongoose")
const Schema = mongoose.Schema

let transportSchema = new Schema({
    brand: String,
    type: String,
    cc: Number,
    user_id: String,
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
