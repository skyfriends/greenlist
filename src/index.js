import {} from 'dotenv/config';
import express from 'express';
import renderApp from './render-app';
import mongoose from 'mongoose';
// import cors from 'cors';
// import favicon from 'serve-favicon';

const app = express();

// app.use(cors({
//   origin: 'https://green-list.herokuapp.com/',
//   credentials: true,
// }));

app.use('/static', express.static('dist'));
app.use('/static', express.static('public'));
// app.use(favicon(path.join(__dirname, '..', '..', 'public', 'favicon.ico')));

const mongodb = `mongodb://${process.env.UNAME}:${process.env.PASS}@${process.env.LOC}:${process.env.MDBPORT}/greenlist`;
mongoose.connect(mongodb);

const MarkerSchema = new mongoose.Schema({ d: String });

const Marker = mongoose.model('Marker', MarkerSchema);

const formatMarkers = markers =>
  markers.filter((marker, index) => {
    const copy = (Object.assign({}, marker))._doc;
    const builderIndex = copy.d.indexOf("Builder") + 25;
    const certIndex = copy.d.indexOf("<\/div><div><span class='l'><b>Certification Type<\/b>");
    let endIndex = copy.d.indexOf("</div><div><span class='l'><b>County");
    const extraBullshitIndex = copy.d.indexOf("</div><div><span class='l'><b># Certifications");
    const anotherIndex = copy.d.indexOf("</div><div><span class='l'><b>Community</b>:</span>&#160")
    endIndex = endIndex !== -1 ? endIndex : extraBullshitIndex !== -1 ? extraBullshitIndex : anotherIndex;
    copy.builder = copy.d.slice(builderIndex, certIndex);
    copy.certType = copy.d.slice(certIndex + 66, endIndex);
    delete copy.d;
    return copy;
  });

app.get('/data', (req, res) =>
  Marker.find({'c': 'Seattle'}, (err, markers) =>
    res.json(formatMarkers(markers))));

app.listen(process.env.PORT || 8080);
