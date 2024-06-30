import * as services from '../services/vitritinhthanh'

export const getViTris =async(req,res)=>{
    try{
        const response = await services.getAllViTriService()
        return res.status(200).json(response)
    }
    catch(error){
        return res.status(500).json({
            err: -1,
            msg:'fales at vitri controller'+ error
        })
    }
}