import { Request, Response, NextFunction } from "express";
import { ibmentityController } from '../controller/ibmentityController';


export class Routes {
    private ibmentity: ibmentityController = new ibmentityController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/ibmentity/save').post(this.ibmentity.GpCreate);
     }

}