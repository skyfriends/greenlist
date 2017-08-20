import React from 'react';
import { List, ListItem } from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const ShittyList = props =>
  <MuiThemeProvider>
    <List>
      {props.data.map((item, index) =>
        <ListItem key={item._id}>
          <h3>{`#${index + 1}`}</h3>
          <p>
            {item.a}
          </p>
          <p>{`${item.c}, ${item.s}`}</p>
          <p>
            {item.z}
          </p>
          <p>{`Builder: ${item.builder}`}</p>
          <p>{`Certification Type: ${item.certType}`}</p>
        </ListItem>
      )}
    </List>
  </MuiThemeProvider>;

export default ShittyList;
