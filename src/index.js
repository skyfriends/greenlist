import {} from 'dotenv/config';
import express from 'express';
import renderApp from './render-app';
import mongoose from 'mongoose';
// import favicon from 'serve-favicon';

const app = express();

app.use('/static', express.static('dist'));
app.use('/static', express.static('public'));
// app.use(favicon(path.join(__dirname, '..', '..', 'public', 'favicon.ico')));

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

app.listen(process.env.PORT || 8080);
