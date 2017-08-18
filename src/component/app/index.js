import React from 'react';
import superagent from 'superagent';
import DataTable from '../data-table';
import ShittyList from '../shitty-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    superagent.get('http://localhost:8080/data')
      .then(res => this.setState({ data: JSON.parse(res.text) }));
  }

  render() {
    return (
      <div>
        {this.state.data ? (
          <ShittyList data={this.state.data} />
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    );
  }
}

export default App;
