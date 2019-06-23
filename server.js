const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const userRouter = require('./Api/usersRoute.js')
const countryRouter = require('./Api/countryRouter.js')
const communityRouter = require('./Api/communityRouter.js')
const childrenRouter = require('./Api/childrenRoute.js')
const personRouter = require('./Api/PersonInfo.js')
const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan("dev"));
server.use(cors());

server.use("/user", userRouter);
server.use("/api", countryRouter);
server.use("/api", communityRouter);
server.use("/api", childrenRouter);
server.use("/api", personRouter);

server.get("/", (req, res) => {
    res.status(200).json({ api: "is up and running" });
});

module.exports = server;