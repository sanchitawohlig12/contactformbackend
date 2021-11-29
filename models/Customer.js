const mongoose = require('mongoose')

const customerSchema = mongoose.Schema({
    firstName: String,
    middleName: String,
    surName: String,
    age: Number,
    mobile: Number,
    gender: String,
    key: { type: 'String', unique: true },
    village: String,
    address: String,
    bloodGroup: String


})

module.exports = mongoose.model('Customer', customerSchema)