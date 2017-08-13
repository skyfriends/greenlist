import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './style/main.scss';
import App from './component/app';

injectTapEventPlugin();

const AppContainer = () => (
  <App />
);

ReactDom.render(<AppContainer />, document.getElementById('root'));
