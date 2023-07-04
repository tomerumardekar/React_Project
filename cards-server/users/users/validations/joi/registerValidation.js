const Joi = require("joi");
const { schema } = require("../../models/mongodb/User");

const registerValidation = (user) => {
  const schema = Joi.object({
    name: Joi.object().keys({
      first: Joi.string().min(2).max(256).required(),
      middle: Joi.string().min(2).max(256).allow(""),
      last: Joi.string().min(2).max(256).required(),
    }),
    isBusiness: Joi.boolean().required(),
    phone: Joi.number().required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .required(),
    password: Joi.string()
      .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*-]).{9,20}$/)
      .required()
      .messages({
        "string.pattern.base":
          'User "password" must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number, and one of the following characters: !@#$%^&*-',
      }),
    image: Joi.object()
      .keys({
        url: Joi.string().uri().allow(""),
        alt: Joi.string().min(2).max(256).allow(""),
      })
      .required(),
    address: Joi.object()
      .keys({
        state: Joi.string().min(2).max(256).required(),
        country: Joi.string().min(2).max(256).required(),
        city: Joi.string().min(2).max(256).required(),
        street: Joi.string().min(2).max(256).required(),
        houseNumber: Joi.number().min(1).required(),
        zip: Joi.string().min(4).required(),
      })
      .required(),
  });

  return schema.validate(user);
};

module.exports = registerValidation;
