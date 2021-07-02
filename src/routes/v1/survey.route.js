const express = require('express');
const controller = require('../../controllers/survey.controller');
const validator = require('../../validators/survey.validator');
const validate = require('../../middlewares/validate');

const router = express.Router();

router
  .route('/')
  .get(controller.getSurveys)
  .post(controller.createSurvey);

router
  .route('/:surveyId')
  .get(controller.getSurvey)
  .put(validate(validator.updateSurvey), controller.updateSurvey)
  .delete(controller.deleteSurvey);

module.exports = router;