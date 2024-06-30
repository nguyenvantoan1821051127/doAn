import express from 'express'
import * as controllers from '../controllers/nguoidung'


const router=express.Router()

router.get('/user', controllers.getNguoiDungs)

export default router
