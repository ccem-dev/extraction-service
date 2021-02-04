import App from "./app";
import { Application } from "express"
const listEndpoints = require('express-list-endpoints');

class Server {

  constructor() {
    this.listen();
  }

  listen() {
    App.listen(process.env.API_PORT, () => {
    });
    console.info(process.env.API_PORT);
    this.endpointsList();
  }

  endpointsList() {
    let endpoints = listEndpoints(App);
    console.table(endpoints);
  }

  public getApp(): Application {
    return App;
  }
}
export default new Server();