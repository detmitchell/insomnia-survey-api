const mongoose = require('mongoose');

const surveySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
      minLength: 2,
      maxLength: 40,
    },
    difficultyFallingAsleep: {
      type: Number,
      required: true,
      min: 0,
      max: 4
    },
    difficultyStayingAsleep: {
      type: Number,
      required: true,
      min: 0,
      max: 4
    },
    problemsWakingUp: {
      type: Number,
      required: true,
      min: 0,
      max: 4
    },
    satisfaction: {
      type: Number,
      required: true,
      min: 0,
      max: 4
    },
    noticeability: {
      type: Number,
      required: true,
      min: 0,
      max: 4
    },
    worried: {
      type: Number,
      required: true,
      min: 0,
      max: 4
    },
    interference: {
      type: Number,
      required: true,
      min: 0,
      max: 4
    },
    totalScore: {
      type: Number,
      required: true,
      min: 0,
      max: 28
    }
  }
);

const Survey = mongoose.model('Survey', surveySchema);
module.exports = Survey;