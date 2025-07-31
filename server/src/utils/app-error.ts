import z from "zod";

export class AppError extends Error {
  statusCode: number;
  isOperational: boolean;

  constructor(message: string, statusCode: number = 500, isOperational = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;

    Error.captureStackTrace(this, this.constructor);
  }
}

export class ZodValidationError extends AppError {
  errors: ReturnType<typeof z.flattenError>;

  constructor(errors: any) {
    super("Validation Error", 400);
    this.errors = z.flattenError(errors);
  }
}
