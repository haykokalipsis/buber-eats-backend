import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { doc } from 'prettier';
import { join } from 'path';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { RestaurantsModule } from './restaurants/restaurants.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      // autoSchemaFile: join(process.cwd(), 'src/schema.gql'), will save schema in src folder
      autoSchemaFile: true, // will save schema in memory
    }),
    RestaurantsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
