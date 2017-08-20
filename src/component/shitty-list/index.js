import React from 'react';
import { List, ListItem } from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';

const ShittyList = props =>
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>Address</Table.HeaderCell>
        <Table.HeaderCell>City/State</Table.HeaderCell>
        <Table.HeaderCell>Zip</Table.HeaderCell>
        <Table.HeaderCell>Builder</Table.HeaderCell>
        <Table.HeaderCell>Type</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {props.data.map((item, index) =>
        <Table.Row key={item._id}>
          <Table.Cell>{`#${index + 1}`}</Table.Cell>
          <Table.Cell>
            {item.a}
          </Table.Cell>
          <Table.Cell>{`${item.c}, ${item.s}`}</Table.Cell>
          <Table.Cell>
            {item.z}
          </Table.Cell>
          <Table.Cell>{`Builder: ${item.builder}`}</Table.Cell>
          <Table.Cell>{`Certification Type: ${item.certType}`}</Table.Cell>
        </Table.Row>
      )}
    </Table.Body>
  </Table>;

export default ShittyList;
