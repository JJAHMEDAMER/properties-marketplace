import express from "express";
import { config } from "./config/base";
import { apartmentsRouter } from "./services/apartments/apartments.routes";
import { setUpSwagger } from "./utils/swagger";
import { prismaConnect } from "./config/prisma.config";
import { errorHandler } from "./middlewares/error-handlers";
import { corsMiddleware } from "./middlewares/cors.middleware";
import { healthRouter } from "./services/health/health.router";

const app = express();
app.use(corsMiddleware);

app.use(express.json());

app.use("/apartments", apartmentsRouter);
app.use("/health", healthRouter);
app.use(errorHandler);

app.listen(config.port, async () => {
  console.log(`listening on port ${config.port}`);
  await prismaConnect();
  setUpSwagger(app);
});
