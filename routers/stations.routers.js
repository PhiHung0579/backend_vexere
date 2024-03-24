const express = require("express");
const { createStation, getAllStation, getDetailStaion, updateStation, deleteStation } = require("../controllers/station.controllers");
const { Station } = require("../models")
const {checkExist}=require("../middlewares/validation/checkExist");
const { authenticate } = require("../middlewares/auth/authenticate");
const { autherize } = require("../middlewares/auth/authorize");
const stationRouter = express.Router();


stationRouter.post("/",authenticate,autherize(["AMIN","SUPER_ADMIN"]), createStation);
stationRouter.get("/", getAllStation);
stationRouter.get("/:id", getDetailStaion);
stationRouter.put("/:id",checkExist(Station), updateStation);
stationRouter.delete("/:id",checkExist(Station) ,deleteStation)

module.exports = {
    stationRouter,
}   