// Importing Document Type in mongoose
import { Document } from 'mongoose';

// Schema interface for Contact List Service
// ListDataType should extend as (Document) which comes from mongoose library
export interface ListDataType extends Document {
  id: string;
  name: string;
  email: string;
  number: string;
  age: number;
}
