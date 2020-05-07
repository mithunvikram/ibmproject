import { Request, Response } from 'express';
import {ibmentityDao} from '../dao/ibmentityDao';
import { CustomLogger } from '../config/Logger'


export class ibmentityService {
    
    constructor() { }
    
    public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ibmentityService.ts: GpCreate')
     const  ibmentityData = req.body;
     ibmentity.GpCreate(ibmentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ibmentityService.ts: GpCreate')
         callback(response);
         });
    }


}