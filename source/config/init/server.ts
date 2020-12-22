import App from "./app";
const listEndpoints = require('express-list-endpoints');

class Server{

  constructor() {
    this.listen()
  }

  listen(){
    App.listen(process.env.API_PORT, () => {
    });
    console.info(process.env.API_PORT)
    this.endpointsList();
  }

  endpointsList(){
    let endpoints = listEndpoints(App);
    console.table(endpoints)
  }
}
export default new Server();