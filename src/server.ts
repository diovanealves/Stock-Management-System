import express from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

mongoose.connect(`${process.env.MONGOOSE_URL}`);

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server is running on port: ${process.env.PORT}`);
});
