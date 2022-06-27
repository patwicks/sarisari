const Joi = require("joi");

exports.productReqValidator = (data) => {
  const schema = Joi.object({
    item_code: Joi.string().min(12).max(12).required(),
    // image: Joi.string().uri().required(),
    name: Joi.string().min(2).max(255).required(),
    stock: Joi.number().required(),
    category: Joi.string().required(),
    purchasePrice: Joi.number().min(1).required(),
    sellPrice: Joi.number().min(1).required(),
  });

  return schema.validate(data);
};
