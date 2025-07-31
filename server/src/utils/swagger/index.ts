import { Express } from "express";
import swaggerUi from "swagger-ui-express";
import { getSwaggerSpecs } from "./merge-swagger";
import { config } from "../../config/base";

export async function setUpSwagger(app: Express) {
  const swaggerSpec = getSwaggerSpecs();
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.use("/swagger", (_req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(swaggerSpec);
  });

  console.log(
    `Swagger docs available on http://localhost:${config.port}/api-docs`
  );
}
