import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {Restaurant} from "./entities/restaurant.entity";
import {CreateRestaurantDto} from "./dtos/create-restaurant.dto";

@Resolver(() => Restaurant)
export class RestaurantsResolver {

    @Query( () => [Restaurant])
    restaurants(
        @Args('veganOnly') veganOnly: boolean
    ): Restaurant[] {
        return [];
    }

    @Mutation(() => Boolean)
    createRestaurant(
        // @Args('name') name: string,
        // @Args('isVegan') isVegan: boolean,
        // @Args('address') address: string,
        // @Args('ownerName') ownerName: string,

        @Args() createRestaurantDto: CreateRestaurantDto
    ): boolean {
        console.log(createRestaurantDto);
        return true;
    }
}