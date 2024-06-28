import express from 'express'
import * as controllers from '../controllers/phong'


const router=express.Router()

router.get('/all', controllers.getPhongs)

export default router
