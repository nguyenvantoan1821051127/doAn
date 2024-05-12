import db from '../models'
import bcrypt from 'bcryptjs'
import { response } from 'express'
import jwt from 'jsonwebtoken'
import{v4} from 'uuid'
require('dotenv').config()

const hashPassword= password=>bcrypt.hashSync(password,bcrypt.genSaltSync(10))

export const registerService=({phone,password,name})=> new Promise(async(resolve,reject)=>{
    try{
        const respone= await db.NguoiDung.findOrCreate({
            where:{phone},
            default:{
                phone,
                name,
                password:hashPassword(password),
                id:v4()
            }
        })
        const token= respone[1] && jwt.sign({id:response[0].id,phone:respone[0].phone},process.env.SECRFT_KEY,{expiresIn:'20d'})
        resolve({
            err: token ? 0 :2,
            msg: token ? 'register is successfulyy': 'phone number has been aldryeady userd',
            token: token || null
        })
    
    }catch(error){
        reject(error)
    }
})


export const loginService=({phone,password})=> new Promise(async(resolve,reject)=>{
    try{
        const respone= await db.NguoiDung.findOne({
            where:{phone},
            raw:true
            }
        )
        const isCrrectPassword= respone && bcrypt.compareSync(password,respone.password)
        const token= isCrrectPassword && jwt.sign({id:response[0].id,phone:respone[0].phone},process.env.SECRFT_KEY,{expiresIn:'20d'})
        resolve({
            err: token ? 0 :2,
            msg: token ? 'login is successfulyy': respone ? 'password is wrong !': 'phone number has been aldryeady userd',
            token: token || null
        })
    
    }catch(error){
        reject(error)
    }
})