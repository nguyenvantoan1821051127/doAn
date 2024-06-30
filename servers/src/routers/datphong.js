import express from 'express'
import * as controllers from '../controllers/datphong'


const router=express.Router()

router.get('/datphong', controllers.getDatphong)

export default router
