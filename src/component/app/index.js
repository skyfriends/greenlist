import React from 'react';
import superagent from 'superagent';
import DataTable from '../data-table';
import ShittyList from '../shitty-list';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from 'material-ui/AppBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    superagent
      .get('http://localhost:8080/data')
      .then(res => this.setState({ data: JSON.parse(res.text) }));
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="Green List" style={{ backgroundColor: 'Green' }} />
          {this.state.data
            ? <ShittyList data={this.state.data} />
            : <h1>Loading...</h1>}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
