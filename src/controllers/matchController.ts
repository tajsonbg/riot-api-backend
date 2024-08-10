import axios from "axios";
import { Request, Response } from "express";

export const getMatchData = async (req: Request, res: Response) => {
  const { puuid } = req.query;

  try {
    const response = await axios.get(
      `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=15`,
      {
        headers: {
          "X-Riot-Token": process.env.RIOT_API_KEY,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching match data from Riot API",
      error: error,
    });
  }
};

export const getMatchDetails = async (req: Request, res: Response) => {
  const { matchId } = req.query;

  try {
    const response = await axios.get(
      `https://europe.api.riotgames.com/lol/match/v5/matches/${matchId}`,
      {
        headers: {
          "X-Riot-Token": process.env.RIOT_API_KEY,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching match details from Riot API",
      error: error,
    });
  }
};
