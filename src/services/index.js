import express from "express";
const route = express.Router();

import authorsRoute from "./authors/index.js";
import blogpostsRoute from "./blogposts/index.js";
import commentsRoute from "./comments/index.js";
route.use("/author", authorsRoute);
route.use("/blog", blogpostsRoute);
route.use("/comment", commentsRoute);

export default route;
