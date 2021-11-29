const Customer = require('../../models/Customer')

module.exports = async (req, res, next) => {
    const data = await Customer.find({})

    res.json(data)
}