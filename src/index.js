import {} from 'dotenv/config';
import express from 'express';
import renderApp from './render-app';
import mongoose from 'mongoose';
import cors from 'cors';
// import favicon from 'serve-favicon';

const app = express();

app.use(cors({
  origin: 'http://localhost:8081',
  credentials: true,
}));

app.use('/static', express.static('dist'));
app.use('/static', express.static('public'));
// app.use(favicon(path.join(__dirname, '..', '..', 'public', 'favicon.ico')));

const mongodb = `mongodb://${process.env.UNAME}:${process.env.PASS}@${process.env.LOC}:${process.env.MDBPORT}/greenlist`;
mongoose.connect(mongodb);

const MarkerSchema = new mongoose.Schema({ d: String });

const Marker = mongoose.model('Marker', MarkerSchema);

const formatMarkers = markers =>
  markers.map(marker => {
    const copy = (Object.assign({}, marker))._doc;
    const builderIndex = copy.d.indexOf("Builder") + 25;
    const certIndex = copy.d.indexOf("<\/div><div><span class='l'><b>Certification Type<\/b>");
    const endIndex = copy.d.indexOf("</div><div><span class='l'><b>County");
    const builder = copy.d.slice(builderIndex, certIndex);
    const certType = copy.d.slice(certIndex + 66, endIndex);
    copy.builder = builder;
    copy.certType = certType;
    delete copy.d;
    return copy;
  });

app.get('/data', (req, res) =>
  Marker.find({'c': 'Seattle'}, (err, markers) =>
    res.json(formatMarkers(markers))));

app.listen(process.env.PORT || 8080);
