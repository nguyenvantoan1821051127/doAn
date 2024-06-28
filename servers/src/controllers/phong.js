import * as services from '../services/phong'

export const getPhongs =async(req,res)=>{
    try{
        const response = await services.getAllPhongService()
        return res.status(200).json(response)
    }
    catch(error){
        return res.status(500).json({
            err: -1,
            msg:'fales at phong controller'+ error
        })
    }
}