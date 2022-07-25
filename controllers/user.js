
import User from '../models/user'

export const userById = async (req,res,next,id)=>{
    try {
        const user = await User.findById(id).exec()
        if (!user) {
            return res.status(400).json({
                message:"User không tồn tại"
            })
        }
        req.profile = user;
        req.profile.password = undefined;
        next()
    } catch (error) {
        
    }
}
export const getUser = async (req,res)=>{
    try {
        const user = await User.find({}).exec()
        res.json(user)
    } catch (error) {
        res.status(400).json({
            message:"Không lấy được danh sách User"
        })
    }
}
export const getOneUser = async (req,res)=>{
    try {
        const user = await User.findOne({_id:req.params.id}).exec()
        res.json(user)
    } catch (error) {
        res.status(400).json({
            message:"Không lấy được danh sách User"
        })
    }
}
export const updateInfo = async (req,res)=>{
    try {
        const user = await User.findOneAndUpdate({_id:req.params.id},req.body,{new:true}).exec();
        res.json(user);
    } catch (error) {
        res.status(400).json({message:"Không sửa  được"})
    }
}
export const removeUser = async (req,res)=>{
    try {
        const user = await User.findOneAndDelete({_id:req.params.id}).exec()
        res.json(user)
    } catch (error) {
        res.status(400).json({
            message:"Không xóa được"
        })
    }
}