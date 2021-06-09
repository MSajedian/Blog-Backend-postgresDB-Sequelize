import express from "express";
import endpointsList from "express-list-endpoints";
import cors from "cors";
import models from "./db/index.js";
import services from "./services/index.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", services);
const port = process.env.PORT || 5000;

models.sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(port, () => console.log("server is running: " + port));
    app.on("error", (error) => console.info(" ❌ Server is not running due to : ", error) );
    console.table(endpointsList(app));
  })
  .catch((e) => { console.log(e); });
