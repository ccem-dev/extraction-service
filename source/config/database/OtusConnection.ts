import App from "../init/app";
import { Db, MongoClient } from "mongodb";

const mongodb = require("mongodb");

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  connectTimeoutMS: 1000, //todo: rollback to 10000
  keepAlive: 1,
  auth: {
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS
  },
};

const url = `mongodb://${process.env.DATABASE_HOSTNAME}:${process.env.DATABASE_PORT}/${process.env.DATABASE}?authSource=${process.env.DATABASE}`;


class OtusConnection {
  db:Db
  client:MongoClient

  logDb(db:any) {
    console.log(db)
  }

  constructor() {
    console.log('construct');
    this.connect();
  }

  connect() {
    console.log(url, options);

    mongodb.connect(
      url,
      options,
      function (err: any, client: MongoClient) {
        this.db = client.db();
        this.client = client;
        if(err){
          console.error(err);
        }
      }, this
    )
  }

}

export default new OtusConnection();
