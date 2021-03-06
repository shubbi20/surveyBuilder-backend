"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const survey_1 = __importDefault(require("../controller/survey/survey"));
const decodeToken_1 = __importDefault(require("../middleware/decodeToken"));
const survey = new survey_1.default();
router.post("/survey", decodeToken_1.default, survey.createSurvey);
router.get("/getSurvey/:surveyId", decodeToken_1.default, survey.getSurvey);
router.get("/getAllSurveys", decodeToken_1.default, survey.getAllSurvey);
router.post("/attemptSurvey", decodeToken_1.default, survey.attemptSurvey);
router.get("/getSurveys", decodeToken_1.default, survey.getSurveyForAttempt);
router.get("/getUserSurveys", decodeToken_1.default, survey.getSurveyForUserId);
router.delete("/deleteSurvey", decodeToken_1.default, survey.deleteSurvey);
router.get("/getSurveyResponse/:surveyName", decodeToken_1.default, survey.getSurveyResponse);
exports.default = router;
