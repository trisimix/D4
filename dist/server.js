"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const utils_1 = require("./utils");
const services_1 = __importDefault(require("./services"));
const middleware_1 = __importDefault(require("./middleware"));
const database_1 = __importDefault(require("./database"));
const index_1 = require("./types/database/index");
const uuid_1 = require("uuid");
const database = new database_1.default(index_1.DbEnum.lowdb);
database.set(uuid_1.v4(), 1);
//database.set(,2);
console.log(database.dbController.db.getState());
const router = express_1.default();
utils_1.applyMiddleware(middleware_1.default, router);
utils_1.applyRoutes(services_1.default, router);
const { PORT = 3000 } = process.env;
const server = http_1.default.createServer(router);
server.listen(PORT, () => console.log(`Server is running http://localhost:${PORT}...`));
//# sourceMappingURL=server.js.map