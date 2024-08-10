import { Request, Response } from "express";
import axios from "axios";
import Summoner from "../models/summoner";

export const getSummoner = async (req: Request, res: Response) => {
  const { gameName, tagLine } = req.query;

  if (!gameName || !tagLine) {
    return res.status(400).json({
      message:
        "Missing required query parameters: riotId and tagLine are required.",
    });
  }

  try {
    const response = await axios.get(
      `https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`,
      {
        headers: {
          "X-Riot-Token": process.env.RIOT_API_KEY,
        },
      }
    );

    const summonerData = response.data;

    // Save the summoner data to MongoDB
    const newSummoner = new Summoner({
      puuid: summonerData.puuid,
      gameName: summonerData.gameName,
      tagLine: summonerData.tagLine,
    });

    await newSummoner.save();

    res.json(summonerData);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching data from Riot API",
      error: error,
    });
  }
};
