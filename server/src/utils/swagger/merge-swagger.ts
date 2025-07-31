// ./utils/swagger/swagger.ts
import fs from "fs";
import path from "path";
import YAML from "js-yaml";
import { globSync } from "glob";
import { version } from "../../../package.json";

interface SwaggerSpec {
  openapi: string;
  info: {
    title: string;
    version: string;
    description?: string;
  };
  servers?: Array<{ url: string; description?: string }>;
  tags?: Array<{ name: string; description?: string }>;
  paths?: Record<string, any>;
  components?: {
    schemas?: Record<string, any>;
    securitySchemes?: Record<string, any>;
  };
  security?: Array<Record<string, string[]>>;
}

const BASE_SWAGGER_PATH = path.resolve(__dirname, "base.swagger.yaml");
const SERVICES_DIR = path.resolve(__dirname, "../../services");

const loadYamlFile = (filePath: string): SwaggerSpec => {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  return YAML.load(fileContent) as SwaggerSpec;
};

export function getSwaggerSpecs(): SwaggerSpec {
  const baseSwagger = loadYamlFile(BASE_SWAGGER_PATH);
  const serviceSwaggers = globSync(SERVICES_DIR + "/**/*.swagger.yaml");

  serviceSwaggers.forEach((serviceSwaggerPath) => {
    const serviceSwagger = loadYamlFile(serviceSwaggerPath);
    baseSwagger.tags = [
      ...(baseSwagger.tags || []),
      ...(serviceSwagger.tags || []),
    ];
    baseSwagger.paths = {
      ...baseSwagger.paths,
      ...serviceSwagger.paths,
    };
    baseSwagger.components = {
      ...baseSwagger.components,
      ...serviceSwagger.components,
    };
  });

  return { ...baseSwagger, info: { ...baseSwagger.info, version } };
}

getSwaggerSpecs();
