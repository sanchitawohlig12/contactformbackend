const Customer = require("../../models/Customer");

module.exports = async (req, res, next) => {
    const key = req.body.key;
    const firstName = req.body.firstName
    console.log(req.body)
    const found = await Customer.findOne({ key: key, firstName: firstName })
    if (!found) return res.status(404).json({ message: "Customer not found" });

    res.json(found);
};
