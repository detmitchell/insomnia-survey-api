const httpStatus = require('http-status');
const to = require('await-to-js').default;

const service = require('../services/survey.service');

const createSurvey = async (req, res, next) => {
  const [err, result] = await to(service.createSurvey(req.body));
  if(err) return next(err);
  res.status(httpStatus.CREATED).send(result);
};

const getSurveys = async (req, res, next) => {
  const filter = {};
  if (req.query.name) {
    filter.name = req.query.name;
  }
  if (req.query.totalScore) {
    filter.totalScore = {
      $gte: req.query.totalScore
    };
  }
  const [err, result] = await to(service.querySurveys(filter));
  if(err) return next(err);
  res.status(httpStatus.OK).send(result);
}

const getSurvey = async (req, res, next) => {
  const [err, result] = await to(service.getSurveyById(req.params.surveyId));
  if(err) return next(err);
  res.status(httpStatus.OK).send(result);
};

const updateSurvey = async (req, res, next) => {
  const [err, result] = await to(service.updateSurvey(req.params.surveyId, req.body));
  if(err) return next(err);
  res.status(httpStatus.OK).send(result);
};

const deleteSurvey = async (req, res, next) => {
  const [err, result] = await to(service.deleteSurvey(req.params.surveyId));
  if(err) return next(err);
  res.status(httpStatus.OK).send(result);
}

module.exports = {
  createSurvey,
  getSurveys,
  getSurvey,
  updateSurvey,
  deleteSurvey,
};
