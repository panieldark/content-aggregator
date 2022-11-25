import "reflect-metadata";
import { MikroORM } from "@mikro-orm/core";
import microConfig from './mikro-orm.config';
import express from 'express'
import {ApolloServer} from "apollo-server-express";
import {buildSchema} from "type-graphql";
import {HelloResolver} from "./resolvers/hello";
import {PostResolver} from "./resolvers/post";

const main = async () => {
    const orm = await MikroORM.init(microConfig);
    await orm.getMigrator().up();
    const fork = orm.em.fork();
    const app = express();
    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver, PostResolver],
            validate: false
        }),
        context: () => ({em: fork})
    })
    await apolloServer.start();
    apolloServer.applyMiddleware({app});

    app.listen(4000, () => {
        console.log("Server started on localhost:4000");
    })
}
main().catch(err => {
    console.log(err)
});
console.log("hello world");