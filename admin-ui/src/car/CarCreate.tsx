import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CarCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="matricula" source="matricula" />
      </SimpleForm>
    </Create>
  );
};
