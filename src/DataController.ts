// Importing dependencies...
import { ContactListService } from './Mongo/ContactListService.service';
import { DataListResolver } from './Resolver/DataListResolver';
import { MongoSchema } from './Mongo/MongoSchema';
import { SalireController } from './contollers/Salire.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';

// AppController for creating Name for the MongoDB Schema (Connecting Schema...)

// 1. ContactListService is where the mutation and queries happens with GraphQL API
// 2. Providers accepts a ContactListService (MongoDB) which is setting up Get data and create data with Mongoose.
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'ListContact', schema: MongoSchema }]),
  ],
  providers: [DataListResolver, ContactListService],
})
export class DataController {}
