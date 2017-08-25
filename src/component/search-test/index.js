import _ from 'lodash';
import React from 'react';
import { Search, Grid, Header } from 'semantic-ui-react';

export default class SearchTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    const source = {
      title: this.props.data[0].a
    };
  }
  componentWillMount() {
    this.resetComponent();
  }

  resetComponent() {
    this.setState({ isLoading: false, results: [], value: '' });
  }

  handleResultSelect(e, { result }) {
    this.setState({ value: result.title });
  }

  handleSearchChange(e, { value }) {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = result => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch)
      });
    }, 500);
  }

  render() {
    const { isLoading, value, results } = this.state;
    console.log(this.props.data[0].a);
    return (
      <Grid>
        <Grid.Column width={8}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={this.handleSearchChange}
            results={results}
            value={value}
            {...this.props}
          />
        </Grid.Column>
      </Grid>
    );
  }
}
