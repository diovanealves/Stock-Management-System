import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import routes from "./routes";

const app = express();

mongoose
  .connect(`${process.env.MONGOOSE_URL}`)
  .then(() => {
    app.use(express.json());
    app.use(cors());
    app.use(routes);

    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server is running on port: ${process.env.PORT}`);
    });
  })
  .catch(() => console.warn("Erro ao conectar com o mongoDB"));
