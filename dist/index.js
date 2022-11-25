"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const mikro_orm_config_1 = __importDefault(require("./mikro-orm.config"));
const express_1 = __importDefault(require("express"));
const main = async () => {
    const orm = await core_1.MikroORM.init(mikro_orm_config_1.default);
    await orm.getMigrator().up();
    const fork = orm.em.fork();
    const app = (0, express_1.default)();
    app.get('/', (_, res) => {
        res.send("Hello Daniel. Keep going!");
    });
    app.listen(4000, () => {
        console.log("Server started on localhost:4000");
    });
};
main().catch(err => {
    console.log(err);
});
console.log("hello world");
//# sourceMappingURL=index.js.map