const Joi = require("joi");

const transactionValidation = (data) => {
  const schema = Joi.object({
    cart: Joi.required(),
    grandTotal: Joi.number().required(),
  });

  return schema.validate(data);
};

module.exports = transactionValidation;
