import mongoose, { connect } from "mongoose";


const connectmongoDB =async()=>{
try {
    await mongoose.connect(process.env.MONGO_DB_URI)
    console.log("Connect to MongoDB")
} catch (error) {
    console("Something went wrong to connect MongoDB",error.message)
}
}
export default connectmongoDB;