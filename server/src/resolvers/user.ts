import {Arg, Ctx, Field, InputType, Mutation, ObjectType, Query, Resolver} from "type-graphql";
import {MyContext} from "../types";
import {User} from "../entities/User";
import argon2, {hash} from 'argon2';
import {EntityManager} from "@mikro-orm/postgresql";

@InputType()
class UsernamePasswordInput {
    @Field()
    username: string
    @Field()
    password: string
}

@ObjectType()
class FieldError {
    @Field()
    field: string;

    @Field()
    message: string;
}

@ObjectType()
class UserResponse {
    @Field(() => [FieldError], {nullable: true})
    errors?: FieldError[];

    @Field(() => User, {nullable: true})
    user?: User;
}

@Resolver()
export class UserResolver {
    @Query(() => UserResponse)
    async me(@Ctx() {em, req}: MyContext) {
        if (!req.session.userId) {
            return {
                errors: [{
                    field: "User",
                    message: "You are not logged in"
                }]
            }
        }
        const user = await em.findOne(User, {id: req.session.userId})
        return { user };
    }

    @Mutation(() => UserResponse)
    async register(
        @Arg('options') options: UsernamePasswordInput,
        @Ctx( ) {req, em}: MyContext
    ): Promise<UserResponse> {
        if (options.username.length <= 2) {
            return {
                errors: [{
                    field: "username",
                    message: "Must be greater than 2"
                }]
            }
        }
        if (options.password.length <= 3) {
            return {
                errors: [{
                    field: "password",
                    message: "Must be greater than 3"
                }]
            }
        }
        const hashedPassword = await argon2.hash(options.password);
        let user;
        try {
            console.log("Up in here")
            const result = await (em as EntityManager)
                .createQueryBuilder(User)
                .getKnexQuery()
                .insert({
                username: options.username,
                password: hashedPassword,
                created_at: new Date(),
                updated_at: new Date()
            }).returning("*");
            console.log("RESULT", result)
            const repo = em.getRepository(User);
            user = repo.map(result[0]);
        } catch (err) {
            console.log("WTF")
            console.log(err)
            if (err.code === '23505') {
                return  {
                    errors: [{
                        field: "username",
                        message: "That username's already taken!"
                    }]
                }
            }
            console.log(err.message);
        }

        req.session.userId = user.id;

        return {
            user
        };
    }

    @Mutation(() => UserResponse)
    async login(
        @Arg('options') options: UsernamePasswordInput,
        @Ctx( ) {em, req}: MyContext
    ): Promise<UserResponse> {
        const user = await em.findOne(User, {username: options.username});
        if (!user) {
            return {
                errors: [{
                    field: 'username',
                    message: "User does not exist"
                }]
            }
        }
        const isValidPassword = await argon2.verify(user.password, options.password);
        if (!isValidPassword) {
            return {
                errors: [{
                    field: 'password',
                    message: "Password is incorrect"
                }]
            }
        }
        req.session.userId = user.id;
        return {
            user
        };
    }
}