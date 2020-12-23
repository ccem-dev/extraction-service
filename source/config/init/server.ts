import App from "./app";
const mongoose = require("mongoose");
const listEndpoints = require('express-list-endpoints');

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  connectTimeoutMS: 10000,
  keepAlive: 1,
  useCreateIndex: true,
  auth: {
    user: App.get("DATABASE_USER"),
    password: App.get("DATABASE_PASS")
  },
};

const url = `mongodb://${App.get("DATABASE_HOSTNAME")}:${App.get("DATABASE_PORT")}/${App.get("DATABASE")}?authSource=${App.get("DATABASE")}`;

class Server {

  constructor() {
    this.listen()
  }

  listen() {
    App.listen(process.env.API_PORT, () => {
    });
    console.info(process.env.API_PORT)
    this.endpointsList();
  }

  connect() {
    console.log("connecting to: " + url);
    mongoose.connection
      .on('error', console.log)
      .on('disconnected', this.connect)
      .once('open', this.listen);
    mongoose.connect(url, options);
  }

  endpointsList() {
    let endpoints = listEndpoints(App);
    console.table(endpoints)
  }
}
export default new Server();
