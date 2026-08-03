import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import authRouter from './routes/auth.route.js'
import { connectDB } from './config/db.js'

const app = express()

app.use(cors())    
app.use(express.json())

const PORT = process.env.PORT || 3000

app.use("/api/auth", authRouter)

app.listen(PORT, () => {
    connectDB()
    console.log(`App is running on PORT ${PORT}`)
})