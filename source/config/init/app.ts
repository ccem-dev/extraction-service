import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import ExtrationRouter from "../../app/routes/ExtrationRouter";

class App {

  express: express.Application;

  constructor() {
    this.express = express();
    this.middlewares();
  }

  middlewares() {
    this.express.set("DATABASE_USER", process.env.DATABASE_USER);
    this.express.set("DATABASE_PASS", process.env.DATABASE_PASS);
    this.express.set("DATABASE_HOSTNAME", process.env.DATABASE_HOSTNAME);
    this.express.set("DATABASE_PORT", process.env.DATABASE_PORT);
    this.express.set("DATABASE", process.env.DATABASE);
    this.express.set("API_PORT", process.env.API_PORT);
    this.express.use(express.static('public'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.all('*', function (req, res, next) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header('Content-Type', 'application/json');
      next();
    });

    ExtrationRouter.initialize(this.express);
  }

}

export default new App().express;
