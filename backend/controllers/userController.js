import User from "../models/userModel.js";

export const getUser = async (req, res) => {
    try{
        const userId = req.userId;  

        const user = await User.findById(userId)
        if(!user){
            return res.status(404).json({
                success:false,
                message:"User not found."
            })}
            return res.status(200).json({
                success:true,
                user
            })
    
        } catch (error) {
        return res.status(500).json({
            success:false,
            message:`error in get user ${error.message}`,
        })
    }
}
