import React from 'react';
import { List, Datagrid, TextField, DateField, } from 'react-admin';
import { TextInput, DateInput, BooleanInput, NumberInput, ArrayInput, SimpleForm, SimpleFormIterator, Edit } from 'react-admin';
import { Show, SimpleShowLayout, NumberField, BooleanField, ArrayField } from 'react-admin';
import { EditButton, } from 'react-admin';
import { Create, } from 'react-admin';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { underline } from 'ansi-colors';
export const InvoiceList = props => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="invoiceNumber" />
            <TextField source="jobNumber" />
            <DateField source="invoiceDate" />
            <TextField source="customer.companyName" />
            <TextField source="paymentTerms" />

        </Datagrid>
    </List>
);

export const InvoiceEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <DateInput source="invoiceDate" />

        </SimpleForm>
    </Edit>
);
export const InvoiceCreate = props => {
    console.log(props)
    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="invoiceNumber" />
                <TextInput source="jobNumber" />
                <TextInput source="invoiceTitle" />
                <ArrayInput source="items"><SimpleFormIterator><TextInput source="description" />
                    <NumberInput source="quantity" />
                    <TextInput source="unit" />
                    <NumberInput source="unitPrice" />
                </SimpleFormIterator></ArrayInput>
                <TextInput source="customer.companyName" />
                <TextInput source="customer.addressLine1" />
                <TextInput source="customer.attn" />
                <TextInput source="customer.attnAdditional" />

                {/* <TextInput source="refNumber" />
                <BooleanInput source="customerInDb" />
                <BooleanInput source="itemInDb" />
                <ArrayInput source="items"><SimpleFormIterator><TextInput source="description" />
                    <NumberInput source="quantity" />
                    <TextInput source="unit" />
                    <NumberInput source="unitPrice" /></SimpleFormIterator></ArrayInput>
                <NumberInput source="totalLess" />
                <TextInput source="currency" />
                <TextInput source="invoiceNumber" />
                <DateInput source="invoiceDate" />
                <TextInput source="jobNumber" />
                <TextInput source="paymentTerms" />
                <TextInput source="invoiceTitle" />
                <NumberInput source="__v" />
                <TextInput source="id" /> */}
            </SimpleForm>
        </Create>
    )
};




const cardActionStyle = {
    zIndex: 2,
    display: 'inline-block',
    float: 'right',
};
const PostShowActions = ({ basePath, data, resource }) => {

    const id = data !== undefined ? data.id : ''
    return (<CardActions style={cardActionStyle}>
        <EditButton basePath={basePath} record={data} />

        <Button download href={"http://localhost:5555/api/invoice/" + id + "/export"} color="primary" onClick={() => console.log(data)}>Export Excel</Button>
        {/*  <a download href=""></a> */}
    </CardActions>)
}
    ;

export const InvoiceShow = props => (
    <Show actions={<PostShowActions />} {...props}>
        <SimpleShowLayout>
            <TextField source="refNumber" />
            <BooleanField source="customerInDb" />
            <BooleanField source="itemInDb" />
            <ArrayField source="items"><Datagrid><TextField source="description" />
                <NumberField source="quantity" />
                <TextField source="unit" />
                <NumberField source="unitPrice" /></Datagrid></ArrayField>
            <NumberField source="totalLess" />
            <TextField source="currency" />

            <TextField source="invoiceNumber" />
            <DateField source="invoiceDate" />
            <TextField source="jobNumber" />
            <TextField source="paymentTerms" />
            <TextField source="invoiceTitle" />
            <NumberField source="__v" />
            <TextField source="id" />
        </SimpleShowLayout>
    </Show>
);