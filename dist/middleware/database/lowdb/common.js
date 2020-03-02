"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lowdb_1 = __importDefault(require("lowdb"));
const FileAsync_1 = __importDefault(require("lowdb/adapters/FileAsync"));
class LowdbInstance {
    constructor(json) {
        this.initDatabase(json);
    }
    initDatabase(json) {
        return __awaiter(this, void 0, void 0, function* () {
            const adapter = new FileAsync_1.default(json);
            this.db = yield lowdb_1.default(adapter);
            //@ts-ignore FUCK
            this.db.defaults({ posts: [], user: {}, count: 0 });
        });
    }
    set(property, data) {
        return __awaiter(this, void 0, void 0, function* () {
            //@ts-ignore FUCK
            this.db.get(property).push(data).write();
        });
    }
    get(property) {
        //this can use .has to throw errors.
        //@ts-ignore FUCK
        return this.db.get(property).value();
    }
    setSomeonesName(fullname) {
        return __awaiter(this, void 0, void 0, function* () {
            //@ts-ignore FUCK
            yield this.db.set("user.fullname", fullname).write();
        });
    }
}
exports.initLowdb = (json) => {
    return new LowdbInstance(json);
};
/*
import lowdb from "lowdb";
import { default as FileAsync } from "lowdb/adapters/FileAsync";
type Schema = { //move to types safe place not here
    str: string;
}
class DbService {
    private db!: lowdb.LowdbAsync<any>;
    private dbfile: string = "./db.json";
    constructor() {
        this.initLowdb();
    }
    private async initLowdb() {
        const adapter = new FileAsync<Schema>(this.dbfile);
        this.db = await lowdb(adapter);
    }
    public async add(record: any, data: string) {
        const listData = await this.db.get(data).value()
        record.id = uuid.v1()
        listData.push(record)
        await this.db.set(data, listData).write()
    }
    private SetSome(fullname: string) {
        this.db.set("user.fullname", fullname).write();
    }
}*/ 
//# sourceMappingURL=common.js.map