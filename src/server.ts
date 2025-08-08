import dotenv from 'dotenv'

// import {connectDB} from './config/database'
import app from './app.ts'

dotenv.config()

const PORT = process.env.PORT || 3000

const startServer = async () => {
    // await connectDB()
    app.listen(PORT, ()=>{
        console.log(`Server running on port ${PORT}`)
    })
}

startServer();