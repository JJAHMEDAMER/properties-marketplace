import express from "express";
import { config } from "./config/base";
import { apartmentsRouter } from "./services/apartments/apartments.routes";

const app = express();
app.use(express.json());

app.use("/apartments", apartmentsRouter);

app.listen(config.port, () => {
  console.log(`listening on port ${config.port}`);
});
