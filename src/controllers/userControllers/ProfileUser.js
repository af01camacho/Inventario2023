import cookieParser from "cookie-parser"
import userModel from "../../models/userModel/userModel.js"


export const profileUser = async (req, res) => {
    const ProfileUser = await userModel.findById(req.user.id)
    if(!ProfileUser){
        res.status(401).json({ message:  '¡Usuario no encontrado'})
    }
    return res.status(200).json({ id : ProfileUser._id })
}