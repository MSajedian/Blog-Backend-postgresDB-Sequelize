import express from "express";
const route = express.Router();

import authorsRoute from "./authors/index.js";
import blogpostsRoute from "./blogposts/index.js";
route.use("/author", authorsRoute);
route.use("/blog", blogpostsRoute);

export default route;
