import express from "express";
import router from "./router";
import db from "./config/db";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger";
import colors from "colors";
//connect db

async function connectDB() {
  try {
    await db.authenticate();
    db.sync();
    // console.log(colors.bold.green("connection successful"));
  } catch (error) {
    console.log(error);
    // console.log(colors.red("connection refused"));
  }
}
connectDB();

const server = express();

//read forms
server.use(express.json());

server.use("/api/products", router);

server.get("/api", (req, res) => {
  res.json({ msg: "Desde API" });
});

server.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default server;
