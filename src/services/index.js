import express from "express";
const route = express.Router();

import authorsRoute from "./authors/index.js";
import blogpostsRoute from "./blogposts/index.js";
import commentsRoute from "./comments/index.js";
import categoriesRoute from "./categories/index.js";
route.use("/author", authorsRoute);
route.use("/blog", blogpostsRoute);
route.use("/comment", commentsRoute);
route.use("/category", categoriesRoute);

export default route;
