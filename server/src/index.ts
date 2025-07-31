import express from "express";
import { config } from "./config/base";
import { apartmentsRouter } from "./services/apartments/apartments.routes";
import { setUpSwagger } from "./utils/swagger";
import { prismaConnect } from "./config/prisma.config";

const app = express();
app.use(express.json());

app.use("/apartments", apartmentsRouter);

app.listen(config.port, async () => {
  console.log(`listening on port ${config.port}`);
  await prismaConnect();
  setUpSwagger(app);
});
