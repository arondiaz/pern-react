import express from "express";
import router from "./router";
import db from "./config/db";

//connect db

async function connectDB() {
  try {
    await db.authenticate();
    db.sync();
    console.log("connection successful");
  } catch (error) {
    console.log(error);
  }
}
connectDB();

const server = express();

server.use("/api/products", router);

export default server;
