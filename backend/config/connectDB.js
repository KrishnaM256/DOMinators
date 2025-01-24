import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING)
    console.log('Database connected successfully!')
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

export default connectDB
