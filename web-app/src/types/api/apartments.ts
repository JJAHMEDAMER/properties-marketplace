import { Apartment } from "../models";

export type GetApartmentsResponse =
  | {
      status: "success";
      data: Apartment[];
      metadata: {
        count: number;
        page: number;
        numberOfPages: number;
        priceRange: { min: number; max: number };
      };
    }
  | {
      status: "error";
      message: string;
    };
