import {Field, InputType, ObjectType} from "@nestjs/graphql";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {IsBoolean, IsOptional, IsString, Length} from "class-validator";

@ObjectType() // @ObjectType decorator for graphql
@Entity() // @Entity decorator for TypeOrm
export class Restaurant
{
    @PrimaryGeneratedColumn()
    @Field(() => Number)
    id: number

    @Field(() => String) // @Field decorator of graphql
    @Column() // @Field decorator of TypeORM
    @IsString() // validators
    @Length(5)
    name: string;

    @Field( () => Boolean, {nullable: true})
    @Column({default: true})
    @IsOptional()
    @IsBoolean()
    isVegan: boolean;

    @Field(() => String, {defaultValue: 'no address'})
    @Column()
    @IsString()
    address: string;

    @Field(() => String)
    @Column()
    @IsString()
    ownersName: string;

    @Field(() => String)
    @Column()
    @IsString()
    categoryName: string
}