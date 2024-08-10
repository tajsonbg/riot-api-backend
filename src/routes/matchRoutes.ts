import { Router } from "express";
import { getMatchData, getMatchDetails } from "../controllers/matchController";

const router = Router();

router.get("/match-data", getMatchData);
router.get("/match-details", getMatchDetails);

export default router;
