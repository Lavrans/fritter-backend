import type {Types, PopulatedDoc, Document} from 'mongoose';
import {Schema, model} from 'mongoose';
import type {User} from '../user/model';
import ReplyModel from '../reply/model';

/**
 * This file defines the properties stored in a Freet
 * DO NOT implement operations here ---> use collection file
 */

// Type definition for Freet on the backend
export type Freet = {
  _id: Types.ObjectId; // MongoDB assigns each object this ID on creation
  authorId: Types.ObjectId;
  dateCreated: Date;
  content: string;
  dateModified: Date;
  friendsOnly: boolean;
};

export type PopulatedFreet = {
  _id: Types.ObjectId; // MongoDB assigns each object this ID on creation
  authorId: User;
  dateCreated: Date;
  content: string;
  dateModified: Date;
  friendsOnly: boolean;
};

// Mongoose schema definition for interfacing with a MongoDB table
// Freets stored in this table will have these fields, with the
// type given by the type property, inside MongoDB
const FreetSchema = new Schema<Freet>({
  // The author userId
  authorId: {
    // Use Types.ObjectId outside of the schema
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  // The date the freet was created
  dateCreated: {
    type: Date,
    required: true
  },
  // The content of the freet
  content: {
    type: String,
    required: true
  },
  // The date the freet was modified
  dateModified: {
    type: Date,
    required: true
  },
  friendsOnly: {
    type: Boolean,
    required: true
  }
});
FreetSchema.pre('deleteOne', async function (this: any, next) {
  const query = this.getQuery();
  await ReplyModel.deleteMany({
    parent: query._id,
    parentType: 'Freet'
  }).exec();
  next();
});
FreetSchema.pre('deleteMany', async function (this: any, next) {
  const query = this.getQuery();
  const freets = await FreetModel.find({authorId: query.authorId});
  freets.forEach(async f => {
    await ReplyModel.deleteMany({
      parent: f._id,
      parentType: 'Freet'
    }).exec();
  });
  next();
});

const FreetModel = model<Freet>('Freet', FreetSchema);
export default FreetModel;
