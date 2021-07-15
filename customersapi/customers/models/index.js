const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    name: String,
    age: Number
});

const Customer = mongoose.model('customers', CustomerSchema);

module.exports= Customer;

