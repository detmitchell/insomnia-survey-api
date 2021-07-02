const httpStatus = require('http-status');
const { Survey } = require('../models');
const ApiError = require('../utils/ApiError');

const createSurvey = async (body) => {
  const {name, ...numbers} = body;
  const totalScore = Object.values(numbers).reduce((a, b) => a + b);
  const survey = await Survey.create({totalScore, ...body});
  return survey;
}

const querySurveys = async (filter) => {
  const surveys = await Survey.find(filter);
  return surveys;
}

const getSurveyById = async (id) => {
  const survey = await Survey.findById(id);
  return survey;
}

const updateSurvey = async (id, body) => {
  const survey = await getSurveyById(id);
  if (!survey) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Survey not found');
  }
  const {name, ...numbers} = body;
  const totalScore = Object.values(numbers).reduce((a, b) => a + b);
  Object.assign(survey, body, {totalScore});
  await survey.save();
  return survey;
}

const deleteSurvey = async (id) => {
  const survey = await getSurveyById(id);
  if (!survey) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Survey not found');
  }
  await survey.remove();
  return survey;
}

module.exports = {
  createSurvey,
  querySurveys,
  getSurveyById,
  updateSurvey,
  deleteSurvey,
}