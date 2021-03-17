// Importing dependencies...
import { DataController } from './DataController';
import { SalireController } from './contollers/Salire.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { PASSWORD } from './private';

// Main Module (App.module.ts)
@Module({
  imports: [
    DataController,
    GraphQLModule.forRoot({ autoSchemaFile: 'scheam.gql' }),
    MongooseModule.forRoot(
      `mongodb+srv://Magomed:${PASSWORD}@cluster0.odi6d.mongodb.net/SalireDatabaseTest?retryWrites=true&w=majority`,
    ),
  ],
  controllers: [SalireController],
  providers: [AppService],
})
export class AppModule {}
