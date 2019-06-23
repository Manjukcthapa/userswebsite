const express = require("express");
const userRouter = require('./Api/usersRoute.js')
const countryRouter = require('./Api/countryRouter.js')
const communityRouter = require('./Api/communityRouter.js')
const childrenRouter = require('./Api/childrenRoute.js')
const personRouter = require('./Api/PersonInfo.js')
const server = express();

server.use(express.json());
server.use("/user", userRouter);
server.use("/api", countryRouter);
server.use("/api", communityRouter);
server.use("/api", childrenRouter);
server.use("/api", personRouter);

server.get("/", (req, res) => {
    res.status(200).json({ api: "is up and running" });
});

module.exports = server;