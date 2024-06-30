import * as services from '../services/datphong';

export const getDatphong = async (req,res)=>{
   try {
    const response = await services.getDatphongByIdService(req.query.id)
    return res.status(200).json(response)

} catch (error) {
    return res.status(500).json({
        err: -1,
        msg: 'Failed at category controller: ' + error
    })
}
}