"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("mongodb");
const router = express_1.default.Router();
const uri = 'mongodb+srv://great_guy96:<password>@baddle-dev.coexs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new mongodb_1.MongoClient(uri, {
    serverApi: mongodb_1.ServerApiVersion.v1
});
client.connect((err) => {
    const collection = client.db('test').collection('devices');
    // perform actions on the collection object
    client.close();
});
router.use('/', () => { });
exports.default = router;
//# sourceMappingURL=index.js.map