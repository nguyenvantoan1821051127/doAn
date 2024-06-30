import authRouter from './auth'
import phongRouter from './phong'
import vitriRouter from './vitritinhthanh'
import userRouter from './nguoidung'
import khachsanRouter from './khachsan'
import datphongRouter from './datphong'

const initRouters =(app)=>{
    const cors = require('cors');
    app.use(cors());
    app.use('/api/vi/auth',authRouter)
    app.use('/api/vi/vitri',vitriRouter)
    app.use('/api/v1/user', userRouter)
    app.use('/api/vi/khachsan', khachsanRouter)
    app.use('/api/vi/phong', phongRouter)
    app.use('/api/vi/datphong', datphongRouter)
    
    return app.use('/',(req,res)=>{
        res.send('server on')
    })
}

export default initRouters