import express from "express";
import router from "./router";
import db from "./config/db";
import colors from "colors";

//connect db

async function connectDB() {
  try {
    await db.authenticate();
    db.sync();
    console.log(colors.bold.green("connection successful"));
  } catch (error) {
    console.log(error);
    console.log(colors.red("connection refused"));
  }
}
connectDB();

const server = express();

server.use("/api/products", router);

export default server;
