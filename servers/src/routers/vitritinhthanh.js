import express from 'express'
import * as controllers from '../controllers/vitritinhthanh'


const router=express.Router()

router.get('/vitri', controllers.getViTris)

export default router
