import { Request, Response } from 'express';
import { ibmentityService } from '../service/ibmentityService';
import { CustomLogger } from '../config/Logger'
let ibmentity = new ibmentityService();

export class ibmentityController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
ibmentity.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ibmentityController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ibmentityController.ts: GpCreate');
    })}


}