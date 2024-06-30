import db from '../models'

export const getKhachsanByIdService = (id)=> new Promise(async(resolve,reject)=>{
    try{
        const response = await db.ViTriTinhThanh.findOne({where: { id },raw: true})
        console.log("response",response);
        resolve({
            err: response ? 0 :1,
            msg: response ? 'ok' : 'failed to get khach san',
            response
        })
    }
    catch(error){
        reject(error)
    }
})