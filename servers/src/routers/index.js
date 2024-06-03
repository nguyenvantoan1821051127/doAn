import authRouter from './auth'

const initRouters =(app)=>{
    const cors = require('cors');
    app.use(cors());
    app.use('/api/vi/auth',authRouter)
    
    return app.use('/',(req,res)=>{
        res.send('server on')
    })
}

export default initRouters