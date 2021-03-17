// Importing dependencies...
import { ObjectType, Field, Int } from '@nestjs/graphql';

// This is a Object Type
// Making class which recieves different Fields
// Each Field has its own Type (name: String, age: Number) and etc...
@ObjectType()
export class dataSchemaObject {
  @Field()
  readonly id: String;
  @Field()
  readonly name: String;
  @Field()
  readonly email: String;
  @Field(() => Int)
  readonly number: Number;
  @Field()
  readonly age: Number;
}
