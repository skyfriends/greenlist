import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './component/app';
import Login from './component/login';

injectTapEventPlugin();

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: false };
    this.authenticate = this.authenticate.bind(this);
  }

  authenticate() {
    this.setState({ authenticated: true });
  }

  render() {
    return (
      <div>
        {this.state.authenticated ? (
          <App />
        ) : (
          <Login authenticate={this.authenticate} />
        )}
      </div>
    )
  }
}

ReactDOM.render(<AppContainer />, document.getElementById('root'));
