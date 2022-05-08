import express from "express";
import { Router } from "express";
const router = express.Router();
import SurveyController from "../controller/survey/survey";
import tokenValidator from "../middleware/decodeToken";

const survey = new SurveyController();

router.post("/survey/:userId", tokenValidator, survey.createSurvey);
router.get("/getSurvey/:surveyId", tokenValidator, survey.getSurvey);
router.get("/getAllSurveys", tokenValidator, survey.getAllSurvey);

export default router;
