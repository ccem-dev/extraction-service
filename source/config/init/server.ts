import App from "./app";
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
      auth: {
        user: App.get("DATABASE_USER"),
        password: App.get("DATABASE_PASS")
      },
    };

    const url = `mongodb://${App.get("DATABASE_HOSTNAME")}:${App.get("DATABASE_PORT")}/${App.get("DATABASE")}?authSource=${App.get("DATABASE")}`;

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
}
export default new Server();
