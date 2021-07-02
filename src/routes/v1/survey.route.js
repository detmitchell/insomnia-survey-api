const express = require('express');
const controller = require('../../controllers/survey.controller');

const router = express.Router();

router
  .route('/')
  .get(controller.getSurveys)
  .post(controller.createSurvey);

router
  .route('/:surveyId')
  .get(/*TODO: validator.getSurvey,*/ controller.getSurvey)
  .put(/*TODO: validator.updateSurvey,*/ controller.updateSurvey)
  .delete(/*TODO: validator.deleteSurvey,*/ controller.deleteSurvey);

module.exports = router;