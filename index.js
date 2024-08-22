const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Routes
const authRoutes = require('./routes/authRoutes');
const comicRoutes = require('./routes/comicRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
 

mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api', authRoutes);
app.use('/api', comicRoutes);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
