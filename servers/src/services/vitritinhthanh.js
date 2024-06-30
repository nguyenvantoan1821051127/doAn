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

export const getNewVitriService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.ViTriTinhThanh.findOrCreate({
            raw: true,
            nest: true,
            offset: 0,
            // order: [['createdAt', 'DESC']],
            // limit: +process.env.LIMIT,
            // include: [
            //     { model: db.Image, as: 'images', attributes: ['image'] },
            //     { model: db.Attribute, as: 'attributes', attributes: ['price', 'acreage', 'published', 'hashtag'] },
            // ],
            // attributes: ['id', 'title', 'star', 'createdAt']
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Getting posts is failed.',
            response
        })

    } catch (error) {
        reject(error)
    }
})

