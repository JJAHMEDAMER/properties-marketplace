import { Apartment } from "../models";

export type GetApartmentsResponse =
  | {
      status: "success";
      data: Apartment[];
      metadata: {
        count: number;
        page: number;
        numberOfPages: number;
      };
    }
  | {
      status: "error";
      message: string;
    };
