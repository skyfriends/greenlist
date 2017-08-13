import express from 'express';
import renderApp from './render-app';
import mongoose from 'mongoose';
import {} from 'dotenv/config';

const app = express();

app.use('/static', express.static('dist'));
app.use('/static', express.static('public'));

const mongodb = `mongodb://${process.env.UNAME}:${process.env.PASS}@${process.env.LOC}:${process.env.MDBPORT}/greenlist`;
mongoose.connect(mongodb);

app.get('*', (req, res) => res.send(renderApp()));

app.listen(process.env.PORT);
