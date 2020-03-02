"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//make a handler for multiple kinds of db, with same types of methods
const common_1 = require("./lowdb/common");
var DbType;
(function (DbType) {
    DbType[DbType["lowdb"] = 0] = "lowdb";
})(DbType || (DbType = {}));
class DbController {
    constructor() {
    }
    get(key) {
    }
    set(ket, value) {
    }
}
class LowDbController extends DbController {
    constructor() {
        super();
        this.db = common_1.initLowdb("./db.json");
        this.db.setSomeonesName;
    }
    get(key) {
        return this.db.get(key);
    }
    set(key, value) {
        this.db.set(key, value);
    }
}
class DbHandler {
    constructor(dbType) {
        this.initDbController(dbType);
    }
    initDbController(dbType) {
        switch (dbType) {
            case DbType.lowdb: {
                this.dbController = new LowDbController;
            }
            default: {
                this.dbController = new DbController;
                break;
            }
        }
    }
}
exports.DbHandler = DbHandler;
//# sourceMappingURL=index.js.map