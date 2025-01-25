import express from 'express'
import { configDotenv } from 'dotenv'
import connectDB from './config/connectDB.js'
import cookieParser from 'cookie-parser'
import path from 'path'
import userRoutes from './routes/userRoutes.js'
import profileRoutes from './routes/profileRoutes.js'
import imageRoute from './routes/imageRoute.js'

import postRoutes from './routes/postRoutes.js'
import cors from 'cors'

configDotenv()
connectDB()

const app = express()
app.use(express.static('uploads'))
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
const port = process.env.PORT || 5000

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/users', userRoutes)
app.use('/api/profile', profileRoutes)
app.use('/api/posts', postRoutes)
app.use('/api/earn', imageRoute)

app.listen(port, () => {
  console.log(`Running on server http://localhost:${port}`)
})
