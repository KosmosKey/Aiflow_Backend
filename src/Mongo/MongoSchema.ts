// Importing everything as mongoose
import * as mongoose from 'mongoose';

// Creating a mongoose Schema...
export const MongoSchema = new mongoose.Schema({
  name: String,
  email: String,
  number: String,
  age: Number,
});
