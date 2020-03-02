//make a handler for multiple kinds of db, with same types of methods
import { initLowdb } from "./lowdb/common"
import { LowdbDatabase } from "./lowdb/common" // a type that will move...?
import {DbEnum} from "../types/database/index";
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
    public dbController: LowdbDatabase; // | otherdb
    constructor(dbEnum: DbEnum){
        switch(dbEnum){
            case DbEnum.lowdb: {
                this.dbController = initLowdb("./db.json");//make db.json global variable
            }
            default: {
                this.dbController = initLowdb("./db.json"); //fallback
                break;
            }
        }
    }
    public set(key: string, value: any){
        this.dbController.set(key,value);
    }
}
export default DbHandler;