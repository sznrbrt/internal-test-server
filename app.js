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

// Do not allow cors in dev?!
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", 'true');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE');
  next();
});

// General purpose middlewares and configurations
app.use(logger('dev'));

// Entry point for data routes (API)
app.use('/data', (req, res) => {
  res.send(orders);
});

//  404 Handler
app.use((req, res) => {
  res.status(404).render('404');
});

export default app;

let orders = [
      { "id": 1,
        "price": 1000,
        "deliveryAddress": "Budapest, Hunyadi tér 2. 4/4, 1067",
        "restaurant": "W35",
        "restaurantAddress": "Budapest, Wesselényi u. 35, 1072",
        "time": "11:30"
      },
      { "id": 2,
        "price": 1000,
        "deliveryAddress": "Budapest, Hunyadi tér 2. 4/4, 1067",
        "restaurant": "W35",
        "restaurantAddress": "Budapest, Wesselényi u. 35, 1072",
        "time": "11:30"
      },
      { "id": 3,
        "price": 1000,
        "deliveryAddress": "Budapest, Hunyadi tér 2. 4/4, 1067",
        "restaurant": "W35",
        "restaurantAddress": "Budapest, Wesselényi u. 35, 1072",
        "time": "11:30"
      },
      { "id": 4,
        "price": 1000,
        "deliveryAddress": "Budapest, Hunyadi tér 2. 4/4, 1067",
        "restaurant": "W35",
        "restaurantAddress": "Budapest, Wesselényi u. 35, 1072",
        "time": "11:30"
      },
    ];
