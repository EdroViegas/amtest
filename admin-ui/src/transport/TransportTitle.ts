import { Transport as TTransport } from "../api/transport/Transport";

export const TRANSPORT_TITLE_FIELD = "brand";

export const TransportTitle = (record: TTransport): string => {
  return record.brand || record.id;
};
