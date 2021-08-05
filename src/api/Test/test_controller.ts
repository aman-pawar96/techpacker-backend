import {Response} from 'express';
import service from './test_service'

export const getThumbNails=async(
    req:any,
    res:Response
)=>{
    try{
        const {db} = req.app.locals;
        const thumbNails = await service.getThumbNails(parseInt(req.query.page));
        res.send({
            status:200,
            body:thumbNails,
            message:'Record Retrived Successfully'
        })
    }
    catch (e) {
        res.status(e.status || 500).send({
          status: e.status || 500,
          code: e.status ? e.code : 'UNKNOWN_ERROR',
          error: e.status ? e.message : 'Something went wrong'
        });
    }
};