/* eslint-disable import/prefer-default-export */
import { Mongo } from 'meteor/mongo';

export const Posts = new Mongo.Collection('posts');
