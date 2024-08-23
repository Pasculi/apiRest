const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const dbConnect = require('./config/mongoose.config')
const Tracks = require('./routes/track.route')
app.use(cors());
app.use(express.json());
const { PORT } = process.env || 5001;


app.use('/api/v1', Tracks )

app.listen(PORT, () => {
  console.log(`***************************************************`);
  console.log(`Conexión al servidor http://localhost:${PORT}`)
})
dbConnect();