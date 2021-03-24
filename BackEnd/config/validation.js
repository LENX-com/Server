const joi = require("joi");

const registerValidations = (data) => {
  const schema = joi.object({
    name: joi.string().required(),
    email: joi.string().required().email(),
    password: joi.string().min(6).required(),
    // role: joi.string(),
  });
  return schema.validate(data);
};
const loginValidations = (data) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
  });
  return schema.validate(data);
};

module.exports = { registerValidations, loginValidations };
