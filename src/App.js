import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import { InvoiceList, InvoiceEdit, InvoiceCreate, InvoiceShow } from './Invoices/index'

const HOST = process.env.HOST_NAME || 'http://localhost:5555'

const dataProvider = jsonServerProvider(HOST + '/api');
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="invoice" create={InvoiceCreate} list={InvoiceList} edit={InvoiceEdit} show={InvoiceShow} />
  </Admin>
);
export default App;