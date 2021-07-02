const Joi = require('joi');

const updateSurvey = {
  params: Joi.object().keys({
    surveyId: Joi.string().required()
  }),
  body: Joi.object().keys({
    difficultyFallingAsleep: Joi.number().required(),
    difficultyStayingAsleep: Joi.number().required(),
    problemsWakingUp: Joi.number().required(),
    satisfaction: Joi.number().required(),
    noticeability: Joi.number().required(),
    worried: Joi.number().required(),
    interference: Joi.number().required(),
    name: Joi.string().required()
  })
};

module.exports = {
  updateSurvey,
};