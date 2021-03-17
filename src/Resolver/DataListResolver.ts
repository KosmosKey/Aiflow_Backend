// Importing dependencies
import { InputValues } from './InputValues';
import { dataSchemaObject } from '../Mongo/DataSchemaObject';
import { ContactListService } from '../Mongo/ContactListService.service';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

// Making resolver to create different Query for graphql API
@Resolver()
export class DataListResolver {
  // Constructor for getting the ContactListService
  // ContactListService is Injecting Mongoose Schema (Create and Get)
  constructor(private dataList: ContactListService) {}

  // Mutation for GraphQL API when making a new Mongoose Schema
  // It accepts argument input and input argument needs to have Types of InputValues which is an Object

  // Mutation is a function which will respond with dataSchemaObject type
  // dataSchemaObject is an object of different types such as name: String, age: Number and etc..
  @Mutation(() => dataSchemaObject)
  async createList(@Args('input') input: InputValues) {
    return await this.dataList.create(input);
  }

  // Query for GraphQL for getting all of the Mongoose Schemas
  // Getting all the data from MongoDB
  @Query(() => [dataSchemaObject])
  async getAllData() {
    return this.dataList.getAllList();
  }

  // Mutation for GraphQL APi
  // Deleting the Data by finding the ID of the argument/parameter
  @Mutation(() => dataSchemaObject)
  async deleteSchemaData(@Args('id') id: string) {
    return this.dataList.deleteSchema(id);
  }
}
