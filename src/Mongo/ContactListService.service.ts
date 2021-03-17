// Importing dependencies....
import { ListDataType } from './ListDataType';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// Injecting the MongoDB Modals
// This is where all the functions happens when it comes to Create Data and Get Data From MongoDB
@Injectable()
export class ContactListService {
  // Constructor accepts listModal which is a Model comes from Mongoose
  // Model will then have a Types of ListDataType which is an Object (name, age) and etc...
  constructor(
    @InjectModel('ListContact') private listModal: Model<ListDataType>,
  ) {}

  // Creating new mongoose schema
  // Accepts a createNewList createNewList
  // We use createNewList argument value in order to create a mongoose schema
  // We use create() function in the Resolver.ts.
  async create(createNewList) {
    const createdListContact = new this.listModal(createNewList);
    return createdListContact.save();
  }

  // Getting all the lists data
  // It has a promise which will be an array of ListData Object types
  async getAllList(): Promise<ListDataType[]> {
    return await this.listModal.find().exec();
  }

  // Deleting a Mongoose Schema
  // It has a promise which will return an object which has been deleted
  async deleteSchema(id: string): Promise<ListDataType> {
    return await this.listModal.findByIdAndDelete(id);
  }
}
