const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const GeoData = require('./models/layerModel');
require('dotenv').config();


const layerRoutes = require('./routes/layerRoutes')

const app = express();
const port = process.env.PORT || 5000;

// Middleware

app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next()
})

// Routes

// app.get('/api/geodata/:layer', async (req, res) => {
//   try {
//     const layer = req.params.layer;
//     const geoData = await GeoData.find({ layer: layer });
//     res.json(geoData);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });


// Routes
app.use(cors());

app.use('/api/layers',layerRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>{
    // listen for requests
    app.listen(port, () => {
      console.log(`Connected to DB & listeming running on port ${port}`);
    });
  })
  .catch(err => console.log(err));





