import {EntityManager} from "@mikro-orm/core";
import {Request, Response} from "express";
import session from 'express-session';

export type MyContext = {
    em: EntityManager,
    req: Request & {session: session.Session },
    res: Response
}

declare module "express-session" {
    interface Session {
        userId: number;
    }
}
