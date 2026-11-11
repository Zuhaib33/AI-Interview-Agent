import jwt from "jsonwebtoken";

const genToken = async (userid) => {

    try{
        const token = jwt.sign({userid}, process.env.JWT_SECRET_KEY, {expiresIn: "7d"});
    return token;
    }catch (error) {
        console.log(error);
    }

}

export default genToken;