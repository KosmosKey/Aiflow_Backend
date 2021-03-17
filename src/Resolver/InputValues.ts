// Importing dependencies...
import { InputType, Field, Int } from '@nestjs/graphql';

// Input types for resolver when creating a list
// Input type is being used in the argument called input in createList(input) function.
@InputType()
export class InputValues {
  @Field()
  readonly name: String;
  @Field()
  readonly email: String;
  @Field(() => Int)
  readonly number: Number;
  @Field(() => Int)
  readonly age: Number;
}
