import { Router } from "express";
import {
  addApartment,
  deleteApartment,
  getApartment,
  getApartments,
  updateApartment,
} from "./apartments.controllers";
import { upload } from "../../middlewares/multer.middleware";

export const apartmentsRouter = Router();

apartmentsRouter.get("/", getApartments);
apartmentsRouter.post("/", upload, addApartment);
apartmentsRouter.get("/:apartmentId", getApartment);
apartmentsRouter.delete("/:apartmentId", deleteApartment);
apartmentsRouter.put("/:apartmentId", updateApartment);
