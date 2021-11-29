const router = require("express").Router();

const addCustomer = require("./addCustomer");
const getCustomer = require("./getcustomer");
// const deleteProduct = require("./deleteProduct");
// const updateProduct = require("./updateProduct");
const getAllCustomers = require("./getAllCustomers");

// validators
const addProductValidator = require("../../validator/customer/addCustomerValidator");
const updateProductValidator = require("../../validator/customer/updateCustomerValidator");

router.post("/customers", addProductValidator, addCustomer);
router.post("/customers/:key", getCustomer);
// router.delete("/customers/:nid", deleteProduct);
// router.put("/customers/:nid", updateProductValidator, updateProduct);
router.post("/customers", getAllCustomers);

module.exports = router;
