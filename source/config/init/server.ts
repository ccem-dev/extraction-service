import App from "./app";
import { Application } from "express"
import mongoose from "mongoose"
const listEndpoints = require('express-list-endpoints');

class Server {

  constructor() {
    this.connect()
    this.listen()
  }

  connect() {
    const options = {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      connectTimeoutMS: 1000,
      auth: {
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASS
      },
    };

    const url = `mongodb://${process.env.DATABASE_HOSTNAME}:${process.env.DATABASE_PORT}/${process.env.DATABASE}?authSource=${process.env.DATABASE}`;

    console.log("connecting to: " + url);

    mongoose.connect(url, options)
      .then(response => console.info("mongodb connected"))
      .catch(error => console.info(error))
  }

  listen() {
    App.listen(process.env.API_PORT, () => {
    });
    console.info(process.env.API_PORT)
    this.endpointsList();
  }

  endpointsList() {
    let endpoints = listEndpoints(App);
    console.table(endpoints)
  }

  public getApp(): Application {
    return App
  }
}
export default new Server();
