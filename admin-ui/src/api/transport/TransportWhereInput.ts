import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TransportWhereInput = {
  brand?: StringNullableFilter;
  id?: StringFilter;
  model?: StringNullableFilter;
};
