import User from "../models/User.js";
import genToken from "../utils/genToken.js";

export const googleAuth = async (req, res) => {

    try {

        const{name,email}=req.body;

        let user = await User.findOne({email});

        if(!user){
            user = await User.create({
                name,
                email
            })

            
        }

        let token = await genToken(user._id)
            res.cookie("token",token,{
                http:true,
                secure:false,
                sameSite:"strict",
                maxAge:7*24*60*60*1000
            }
            )

            return res.status(200).json({
                user
            })



}catch (error) { 
    return res.status(500).json({
        success:false,
        message:`error in google auth ${error.message}`,
    })
}

   }


  export const logOut = async (req, res) => {

    try{

         await res.clearCookie("token")
          return res.status(200).json({
            success:true,
            message:"user logged out successfully"
          })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:`error in logout ${error.message}`,
        })
    }
   }

