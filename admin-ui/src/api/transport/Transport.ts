import { Car } from "../car/Car";

export type Transport = {
  brand: string | null;
  carId?: Array<Car>;
  createdAt: Date;
  id: string;
  model: string | null;
  updatedAt: Date;
};
