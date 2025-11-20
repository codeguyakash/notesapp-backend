require('dotenv').config();
const express = require('express');
const app = express();
const userRouter = require('./routes/userRoutes');
const noteRouter = require('./routes/noteRoutes');
const cors = require('cors');
const mongoose = require('mongoose');

app.use(express.json());
app.use(cors());

app.use('/users', userRouter);
app.use('/note', noteRouter);

app.get('/', (req, res) => {
  res.send('Notes API Created by @codeguyakash!');
});
const PORT = process.env.PORT || 2000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
