import express from 'express';
import renderApp from './render-app';

const app = express();

app.use('/static', express.static('dist'));
app.use('/static', express.static('public'));

app.get('*', (req, res) => res.send(renderApp()));

app.listen(process.env.PORT);
