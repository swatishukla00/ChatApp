import User from "../models/user.model.js"

export const getUsersForSidebar = async(req,res) =>{
    try {
        const loggedInUserId = req.user._id
        const filterAllUsers = await User.find({_id:{$ne: loggedInUserId}}).select("-password")
        res.status(200).json(filterAllUsers)
    } catch (error) {
        console.log("error in getUserForSidebar controller",error.message)
        res.status(500).json({error:"Internal server error"})
    }
}