const Validator = require("jsonschema").Validator;
// changed using 'period' "." on vsgit

const v = new Validator();

const preValidateProperty = require("../../config/preValidateProperty");

const schema = {
    id: "/Customer",
    type: "object",
    properties: {
        firstName: { type: "string" },
        middleName: { type: "string" },
        surName: { type: "string" },
        age: {
            type: "number",
            minLength: 2,
            maxLength: 2,
            pattern: /[a-zA-Z0-9]/,
        },
        gender: { enum: ["male", "female", "other", "MALE", "FEMALE"] },
        village: { type: "string" },
        address: { type: "string" },
        bloodGroup: { type: "string" },

        mobile: {
            type: "number",
            minLength: 10,
            maxLength: 10,
            pattern: /[a-zA-Z0-9]/,
        }

    },
    required: ["firstName", "middleName", "surName", "age", "gender", "village", "address", "bloodGroup", "mobile"],
};

module.exports = (req, res, next) => {
    const validationResult = v.validate(req.body, schema, {
        preValidateProperty,
    });
    if (validationResult.valid) {
        next();
    } else {
        res.status(400).json({
            error: `${validationResult.errors[0].path} ${validationResult.errors[0].message}`,
        });
    }
};
