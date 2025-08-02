import { Apartment } from "../models";

export type ApartmentForm = Apartment & { image?: FileList | null };
