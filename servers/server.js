import express from 'express'
require('dotenv').config()
import cors from 'cors'
import initRouters from './src/routers'
import connectDatabase from './src/config/connectDB'

const app = express()
app.use(cors({
    origin : process.env.JWT_SECRET,
    methods:["POST","GET","PUT","DELETE"]
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

initRouters(app)
connectDatabase()

const port=process.env.PORT || 8888
const listener = app.listen(port,()=>{
    console.log(`server is running on the post ${listener.address().port}`)
})