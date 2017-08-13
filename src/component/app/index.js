import React from 'react';
import DataTable from '../data-table';
import NewDocument from '../pdf-generator';

class App extends React.Component {
  render() {
    return (
      <div>
        <DataTable />
        <NewDocument />
      </div>
    );
  }
}

export default App;
