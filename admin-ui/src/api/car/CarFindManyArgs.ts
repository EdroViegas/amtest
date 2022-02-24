import { CarWhereInput } from "./CarWhereInput";
import { CarOrderByInput } from "./CarOrderByInput";

export type CarFindManyArgs = {
  where?: CarWhereInput;
  orderBy?: CarOrderByInput;
  skip?: number;
  take?: number;
};
