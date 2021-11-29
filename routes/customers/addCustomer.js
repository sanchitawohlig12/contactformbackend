const Customer = require("../../models/Customer");
var voucher_codes = require('voucher-code-generator');
// voucher_codes = require("voucher-code-generator")
// var constants = require('../../common/constants');

// var getRandomKey = function () {
//     return Math.floor(Math.random() * Math.floor(constants.MAX));
// };

module.exports = async (req, res, next) => {
    const alreadyExists = await Customer.findOne(req.body);
    if (alreadyExists)
        return res.status(409).json({ error: "Customer already exists" });
    let code = voucher_codes.generate({
        length: 8,
        charset: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()+?{}abcdefghijklmnopqrstuvwxyz",
        unique: true

    })[0]

    req.body.key = code
    // console.log(code)
    const customer = new Customer(req.body);

    // console.log(code)
    customer
        .save()
        .then(() => res.json({ message: "Customer successfully added" }))
        .catch((err) => res.status(400).json({ error: err }));
};
