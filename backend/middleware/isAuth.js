import jwt from "jsonwebtoken";

const userAuth = (req, res, next) => {
    try{
        let token = req.cookies.token;
        console.log(token,"token in auth middleware");
        if(!token){
            return res.status(400).json({
                success:false,
                message:"Access denied. No token provided."
            })
        }

        const verifyToken = jwt.verify(token, process.env.JWT_SECRET);

        console.log(verifyToken,"verify token in auth middleware");

        if(!verifyToken){
            return res.status(400).json({
                success:false,
                message:"Invalid token."
            })
        }   

        req.userId = verifyToken.userId;
        next();
    }catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:`error in auth middleware ${error.message}`,
        })
    }
}

export default userAuth;