import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const AppContainer = () => <App />;

ReactDOM.render(<App />, document.getElementById('root'));
