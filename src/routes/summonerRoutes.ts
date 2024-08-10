import { Router } from "express";
import { getSummoner } from "../controllers/summonerController";

const router = Router();

router.get("/summoner", getSummoner);

export default router;
