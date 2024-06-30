import express from 'express'
import * as controllers from '../controllers/phong'


const router=express.Router()

router.get('/phong', controllers.getPhong)

export default router
