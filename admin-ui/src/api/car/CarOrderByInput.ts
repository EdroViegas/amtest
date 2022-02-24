import { SortOrder } from "../../util/SortOrder";

export type CarOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  matricula?: SortOrder;
  updatedAt?: SortOrder;
};
