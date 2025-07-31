import { Request, Response, NextFunction } from "express";
import { AppError, ZodValidationError } from "../utils/app-error";

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const statusCode = err.statusCode || 500;

  const message =
    process.env.NODE_ENV === "production"
      ? "Internal server error"
      : err.message || "Something went wrong!";

  const response: Record<string, any> = {
    status: "error",
    message,
    // ...(process.env.NODE_ENV !== "production" && { stack: err.stack }),
  };

  if (err instanceof ZodValidationError) {
    response.validation = err.errors;
  }

  return res.status(statusCode).json(response);
}
