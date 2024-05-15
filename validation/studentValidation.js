const Joi = require("joi");

//create Validation
const createValidation = (data) => {
  const studentSchema = Joi.object({
    npm: Joi.number().required(),
    nama: Joi.string().required(),
    jurusan: Joi.string().required(),
  });

  return studentSchema.validate(data);
};

module.exports = {
  createValidation,
};
