import mongoose from 'mongoose'


export const connectDB = async (req,res) => {
    try {
        const connect = await mongoose.connect(process.env.DB_URL)
        console.log(`DB Connected ${connect.connection.host}`)
    } catch (error) {
        console.log(error.message)
    }
}