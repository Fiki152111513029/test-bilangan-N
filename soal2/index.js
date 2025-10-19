require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();
app.use(express.json());


connectDB();


app.use('/pengguna', require('./routes/penggunaRoutes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
