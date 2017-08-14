import express from 'express';
import renderApp from './render-app';
import mongoose from 'mongoose';
import {} from 'dotenv/config';

const app = express();

app.use('/static', express.static('dist'));
app.use('/static', express.static('public'));

const mongodb = `mongodb://${process.env.UNAME}:${process.env.PASS}@${process.env.LOC}:${process.env.MDBPORT}/greenlist`;
mongoose.connect(mongodb);

const MarkerSchema = new mongoose.Schema({});

const Marker = mongoose.model('Marker', MarkerSchema);

app.get('*', (req, res) => {
  // Marker.find({}, (err, markers) => {
  //   if (markers)
      res.send(renderApp());
  //   else
  //     console.log('no markers')
  //     res.end()
  // })
})

app.listen(8080);
