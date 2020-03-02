"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//make a handler for multiple kinds of db, with same types of methods
const common_1 = require("./lowdb/common");
const index_1 = require("../types/database/index");
/*
class DbController {
    
    constructor(){

    }
    get(key:string){

    }
    set(ket:string, value:any){

    }

}
class LowDbController extends DbController{
    public db: LowdbDatabase;
    constructor(){
        super();
        this.db = initLowdb("./db.json");
        this.db.setSomeonesName
    }
    get(key:string){
        return this.db.get(key);
    }
    set(key:string, value:any){
        this.db.set(key, value);
    }
}
*/
class DbHandler {
    constructor(dbEnum) {
        switch (dbEnum) {
            case index_1.DbEnum.lowdb: {
                this.dbController = common_1.initLowdb("./db.json"); //make db.json global variable
            }
            default: {
                this.dbController = common_1.initLowdb("./db.json"); //fallback
                break;
            }
        }
    }
    set(key, value) {
        this.dbController.set(key, value);
    }
}
exports.default = DbHandler;
//# sourceMappingURL=index.js.map