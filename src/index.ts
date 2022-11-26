import "reflect-metadata";
import { MikroORM } from "@mikro-orm/core";
import microConfig from './mikro-orm.config';
import express from 'express'
import {ApolloServer} from "apollo-server-express";
import {buildSchema} from "type-graphql";
import {HelloResolver} from "./resolvers/hello";
import {PostResolver} from "./resolvers/post";
import {UserResolver} from "./resolvers/user";
import redis from 'redis';
import session from 'express-session';
import connectRedis from 'connect-redis';
import {__prod__} from "./constants";
import {MyContext} from "./types";

const main = async () => {
    const orm = await MikroORM.init(microConfig);
    await orm.getMigrator().up();
    const fork = orm.em.fork();
    const app = express();

    const RedisStore = connectRedis(session);
    const redisClient = redis.createClient();
    app.use(
        session({
            name: 'qid',
            store: new RedisStore({
                client: redisClient,
                disableTouch: true
            }),
            cookie: {
                maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
                httpOnly: true,
                sameSite: "none", // CSRF
                secure: true, // Secure Cookie only working in prod
            },
            proxy: true,
            saveUninitialized: false,
            secret: 'keyboard cat',
            resave: false
        })
    )

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver, PostResolver, UserResolver],
            validate: false
        }),
        context: ({req, res}): MyContext => ({em: fork, req, res})
    })
    await apolloServer.start();

    const cors = { credentials: true, origin: 'https://studio.apollographql.com' }
    apolloServer.applyMiddleware({ app, cors })

    app.listen(4000, () => {
        console.log("Server started on localhost:4000");
    })
}
main().catch(console.error);
console.log("hello world");