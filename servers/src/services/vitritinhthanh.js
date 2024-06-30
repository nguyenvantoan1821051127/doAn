import { where } from 'sequelize'
import db from '../models'

//get all category
export const getAllViTriService = ()=> new Promise(async(resolve,reject)=>{
    try{
        const response = await db.ViTriTinhThanh.finAll({raw: true})
        resolve({
            err: response ? 0 :1,
            msg: response ? 'ok' : 'failed to get phong',
            response
        })
    }
    catch(error){
        reject(error)
    }
})

