import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const TransportCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="brand" source="brand" />
        <TextInput label="model" source="model" />
      </SimpleForm>
    </Create>
  );
};
