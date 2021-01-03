import App from "../init/app";
import { Db, MongoClient } from "mongodb";

const mongodb = require("mongodb");

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  connectTimeoutMS: 1000, //todo: rollback to 10000
  keepAlive: 1,
  auth: {
    user: App.get("DATABASE_USER"),
    password: App.get("DATABASE_PASS")
  },
};

const url = `mongodb://${App.get("DATABASE_HOSTNAME")}:${App.get("DATABASE_PORT")}/${App.get("DATABASE")}?authSource=${App.get("DATABASE")}`;


class OtusConnection {
  db:Db
  client:MongoClient

  logDb(db:any) {
    console.log(db)
  }

  constructor() {
    console.log('construct')
    this.connect()
  }

  connect() {
    console.log(url, options)

    mongodb.connect(
      url,
      options,
      function (err: any, client: MongoClient) {
        this.db =client.db()
        this.client = client
      }, this
    )
  }

}

export default new OtusConnection();
