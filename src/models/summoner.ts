import mongoose, { Schema } from "mongoose";

interface ISummoner {
  puuid: string;
  gameName: string;
  tagLine: string;
}

const summonerSchema = new Schema<ISummoner>({
  puuid: { type: String, required: true },
  gameName: { type: String, required: true },
  tagLine: { type: String, required: true },
});

const Summoner = mongoose.model("Summoner", summonerSchema);

export default Summoner;
