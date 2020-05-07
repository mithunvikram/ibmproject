
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ibmentitySchema = new Schema({
   firstname: String,
   lastname: String,
   age: Number
})

const ibmentityModel = mongoose.model('ibmentity', ibmentitySchema, 'ibmentity');
export default ibmentityModel;
