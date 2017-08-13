import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
  render() {
    return (
      <div id="front-menu" style={{ width: '100%' }}>
        <MuiThemeProvider>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn> Street </TableHeaderColumn>
                <TableHeaderColumn> City </TableHeaderColumn>
                <TableHeaderColumn> Zip </TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableRowColumn>123 Test Street</TableRowColumn>
                <TableRowColumn>Seattle</TableRowColumn>
                <TableRowColumn>98112</TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
