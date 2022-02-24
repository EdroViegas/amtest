import { Transport } from "../transport/Transport";

export type Car = {
  createdAt: Date;
  id: string;
  matricula: string | null;
  transports?: Array<Transport>;
  updatedAt: Date;
};
