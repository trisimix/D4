"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lowdb_1 = __importDefault(require("lowdb"));
const FileSync_1 = __importDefault(require("lowdb/adapters/FileSync"));
class LowdbInstance {
    constructor(json) {
        const adapter = new FileSync_1.default(json);
        this.db = lowdb_1.default(adapter);
        let schem = { theMap: new Map };
        this.db.setState(schem);
    }
    set(property, data) {
        let schem = this.db.getState();
        schem.theMap.set(property, data);
        this.db.setState(schem);
    }
    get(property) {
        //this can use .has to throw errors.
        return this.db.getState().theMap.get(property);
    }
}
exports.initLowdb = (json) => {
    return new LowdbInstance(json);
};
/* ///BROKEN ASYNC ATTEMPT, TYPINGS ARE BONKED
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