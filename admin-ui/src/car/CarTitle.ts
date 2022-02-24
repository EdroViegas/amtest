import { Car as TCar } from "../api/car/Car";

export const CAR_TITLE_FIELD = "matricula";

export const CarTitle = (record: TCar): string => {
  return record.matricula || record.id;
};
