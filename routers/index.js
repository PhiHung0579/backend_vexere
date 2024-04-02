const express = require("express");
const { stationRouter } = require("./stations.routers");
const { userRouter } = require("./user.router");
const { tripRouter } = require("./trips.router");

const rootRouter = express.Router();

rootRouter.use("/stations", stationRouter);
rootRouter.use("/users", userRouter);
rootRouter.use("/trips",tripRouter)


module.exports = {
    rootRouter,
}