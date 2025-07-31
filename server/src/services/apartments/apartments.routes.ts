import { Router } from "express";
import {
  addApartment,
  deleteApartment,
  getApartment,
  getApartments,
  updateApartment,
} from "./apartments.controllers";

export const apartmentsRouter = Router();

apartmentsRouter.get("/", getApartments);
apartmentsRouter.post("/", addApartment);
apartmentsRouter.get("/:apartmentId", getApartment);
apartmentsRouter.delete("/:apartmentId", deleteApartment);
apartmentsRouter.put("/:apartmentId", updateApartment);
