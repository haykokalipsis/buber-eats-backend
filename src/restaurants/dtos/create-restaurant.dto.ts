// dto - data transfer object. Arguments for queries, mutations here because its sexy?

import {Args, ArgsType, Field} from "@nestjs/graphql";

@ArgsType()
export class CreateRestaurantDto {
    @Field( () => String)
    name: string;

    @Field( () => Boolean)
    isVegan: boolean;

    @Field( () => String)
    address: string;

    @Field( () => String)
    ownerName: string;
}