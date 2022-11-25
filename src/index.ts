import { MikroORM } from "@mikro-orm/core"
import {Post} from "./entities/Post";
import microConfig from './mikro-orm.config';
import express from 'express'

const main = async () => {
    const orm = await MikroORM.init(microConfig);
    await orm.getMigrator().up();
    const fork = orm.em.fork();
    const app = express();
    app.get('/', (_, res) => {
        res.send("Hello Daniel. Keep going!")
    })
    app.listen(4000, () => {
        console.log("Server started on localhost:4000");
    })
}
main().catch(err => {
    console.log(err)
});
console.log("hello world");