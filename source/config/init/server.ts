import App from "./app";
const listEndpoints = require('express-list-endpoints');
const mongoose = require("mongoose");

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  auth: {
    user: App.get("DATABASE_USER"),
    password: App.get("DATABASE_PASS")
  },
};

const url = `mongodb://${App.get("DATABASE_HOSTNAME")}:${App.get("DATABASE_PORT")}/${App.get("DATABASE")}?authSource=${App.get("DATABASE")}`;

connect()

function connect() {
  console.log("connecting to: " + url);
  mongoose.connect(url, options);
}

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

  endpointsList() {
    let endpoints = listEndpoints(App);
    console.table(endpoints)
  }
}
export default new Server();
