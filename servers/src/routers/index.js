import authRouter from './auth'
import phongRouter from './phong'

const initRouters =(app)=>{
    const cors = require('cors');
    app.use(cors());
    app.use('/api/vi/auth',authRouter)
    app.use('/api/vi/phong',phongRouter)
    
    return app.use('/',(req,res)=>{
        res.send('server on')
    })
}

export default initRouters