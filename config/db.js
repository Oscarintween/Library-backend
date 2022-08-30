const mongoose = require('mongoose')
const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.URL)
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline
        )
    }catch(error){
        process.exit(1)
    }
}

module.exports = connectDB