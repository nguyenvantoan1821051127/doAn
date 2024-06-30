import express from 'express'
import * as controllers from '../controllers/khachsan'


const router=express.Router()

router.get('/khachsan', controllers.getKhachsan)

export default router
