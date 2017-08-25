import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if ((this.state.username === 'peter') && (this.state.password === '3642')) {
      this.props.authenticate();
    } else {
      alert('incorrect username or password');
      this.setState({ username: '', password: '' });
    }
  }

  handleChange(e, type) {
    this.setState({ [type]: e.target.value })
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="Green List" style={{ backgroundColor: 'Green' }} />
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.username} onChange={e => this.handleChange(e, 'username')} type="text" placeholder="username" />
            <input value={this.state.password} onChange={e => this.handleChange(e, 'password')} type="password" placeholder="password" />
            <input type="submit" />
          </form>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Login;
