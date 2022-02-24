import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CarWhereInput = {
  id?: StringFilter;
  matricula?: StringNullableFilter;
};
