import lowdb from "lowdb";
import { default as FileSync } from "lowdb/adapters/FileSync";
import { Schema } from "../../types/database/index"

class LowdbInstance {
    public db: lowdb.LowdbSync<Schema>;
    constructor(json: string) {
        const adapter = new FileSync<Schema>(json);
        this.db = lowdb(adapter);
        let schem: Schema = {theMap: new Map};
        this.db.setState(schem);
    }
    public set(property: string, data: any){
        let schem: Schema = this.db.getState();
        schem.theMap.set(property,data);
        this.db.setState(schem);
    }
    public get(property: string) {
        //this can use .has to throw errors.
        return this.db.getState().theMap.get(property);
    }
}
export const initLowdb = (json: string) => {
    return new LowdbInstance(json);
}
export type LowdbDatabase = LowdbInstance;
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