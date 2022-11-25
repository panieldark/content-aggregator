import { MikroORM } from "@mikro-orm/core"
import {Post} from "./entities/Post";
import microConfig from './mikro-orm.config';

const main = async () => {
    const orm = await MikroORM.init(microConfig);
    await orm.getMigrator().up();
    const fork = orm.em.fork();
}
main().catch(err => {
    console.log(err)
});
console.log("hello world");