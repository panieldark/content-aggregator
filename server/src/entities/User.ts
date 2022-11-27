import {Field, ObjectType} from "type-graphql";
import {Entity, PrimaryKey, Property} from "@mikro-orm/core";

@ObjectType()
@Entity()
export class User {
    @Field()
    @PrimaryKey()
    id: number;

    @Field(() => String)
    @Property({type: Date()})
    createdAt = new Date();

    @Field(() => String)
    @Property({type: Date()})
    updatedAt = new Date();

    @Field()
    @Property({type: "text", unique: true})
    username!: string;

    @Property({type: "text"})
    password!: string;
}