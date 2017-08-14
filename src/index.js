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
  Marker.find({}, (err, markers) => {
    markers.forEach(marker => {
      const builderIndex = str.indexOf("Builder") + 25;
      const certIndex = str.indexOf("<\/div><div><span class='l'><b>Certification Type<\/b>");
      const endIndex = str.indexOf("</div><div><span class='l'><b>County")
      const builder = marker.d.slice(builderIndex, certIndex);
      const certType = marker.d.slice(certIndex + 66, endIndex);
      marker = {
        lat: marker.lt,
        lon: marker.ln,
        index: marker.pos,
        address: marker.a,
        city: marker.c,
        state: marker.s,
        zip: marker.z,
        builder,
        certType,
      }
    })
    res.send(renderApp(markers));
  })
})
        d: "<div><span class='l'><b>ID #<\/b>:<\/span>&#160;2010SF366.2<\/div><div><span class='l'><b>Builder<\/b>:<\/span>&#160;Meydenbauer Construction<\/div><div><span class='l'><b>Certification Type<\/b>:<\/span>&#160;Single-Family house<\/div><div><span class='l'><b>County<\/b>:<\/span>&#160;King<\/div><div><span class='l'><b># of Units<\/b>:<\/span>&#160;1<\/div>",
        l: "3171 (lot 15) NE Harrison Dr<br/>Issaquah, WA 98029"

app.listen(process.env.PORT || 8080);
