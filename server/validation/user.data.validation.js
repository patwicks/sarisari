const Joi = require("joi");

exports.requestBodyValidator = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(5).max(20).required(),
    password: Joi.string().min(8).required(),
    profile: Joi.string().required(),
  });
  return schema.validate(data);
};

exports.loginReqBodyValidator = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(5).max(20).required(),
    password: Joi.string().min(8).required(),
  });

  return schema.validate(data);
};
