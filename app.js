// Load dependencies
import express from 'express';
import mongoose from 'mongoose';
import logger from 'morgan';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.load();

// Initialize mongoDB connection
const MONGOURL = process.env.MONGODB_URI || 'mongodb://localhost/internal-test';
mongoose.Promise = global.Promise;
mongoose.connect(MONGOURL, err => {
  console.log(err || `MongoDB connected to ${MONGOURL}`);
});

// Create an express instance
const app = express();

// General purpose middlewares and configurations
app.use(logger('dev'));

// Entry point for data routes (API)
app.use('/data', (req, res) => {
  res.send('/data is UP 👻 \n');
});

//  404 Handler
app.use((req, res) => {
  res.status(404).render('404');
});

export default app;
