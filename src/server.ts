import http from "http";
import express from "express";
import { applyMiddleware, applyRoutes } from "./utils";
import routes from "./services";
import middleware from "./middleware";
import DbHandler from "./database";
import {DbEnum} from "./types/database/index";
import {v4 as uuid} from "uuid";
const database = new DbHandler(DbEnum.lowdb);
database.set(uuid(),1);
//database.set(,2);
console.log(database.dbController.db.getState());
 
const router = express();
applyMiddleware(middleware, router);
applyRoutes(routes, router);

const { PORT = 3000 } = process.env;
const server = http.createServer(router);

server.listen(PORT, () =>
  console.log(`Server is running http://localhost:${PORT}...`)
);