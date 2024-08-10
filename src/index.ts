import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import summonerRoutes from "./routes/summonerRoutes";
import matchRoutes from "./routes/matchRoutes";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => {
  console.log("Connected to mongodb database");
});

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api", summonerRoutes);
app.use("/api", matchRoutes);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server started on localhost:${process.env.SERVER_PORT}`);
});
