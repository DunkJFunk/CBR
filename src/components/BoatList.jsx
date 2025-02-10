import { Datagrid, DateField, List, TextField } from 'react-admin';

export const BoatList = () => (
    <List>
        <Datagrid>
            <TextField source="serialnum" />
            <TextField source="name" />
            <TextField source="images" />
            <TextField source="tags" />
            <DateField source="created_at" />
        </Datagrid>
    </List>
);