import * as mongoose from 'mongoose';
import ibmentityModel from '../models/ibmentity';
import { CustomLogger } from '../config/Logger'


export class ibmentityDao {
    
    constructor() { }
    
    public GpCreate(ibmentityData, callback){
new CustomLogger().showLogger('info', 'Enter into ibmentityDao.ts: GpCreate')
let temp = new ibmentityModel(ibmentityData);
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from ibmentityDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}