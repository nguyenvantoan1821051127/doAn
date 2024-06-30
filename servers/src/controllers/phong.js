import * as services from '../services/phong';

export const getPhong = async (req,res)=>{
   try {
    const response = await services.getPhongByIdService(req.query.id)
    return res.status(200).json(response)

} catch (error) {
    return res.status(500).json({
        err: -1,
        msg: 'Failed at category controller: ' + error
    })
}
}