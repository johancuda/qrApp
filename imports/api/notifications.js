/* eslint-disable import/prefer-default-export */
import { Mongo } from 'meteor/mongo';

export const Notifications = new Mongo.Collection('notifications');
