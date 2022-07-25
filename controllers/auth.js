import User from '../models/user'
import jwt from 'jsonwebtoken'

export const signup = async (request, response)=>{
    const {email, name, password} = request.body
    try {
        const exitUser = await User.findOne({email}).exec()
        if (exitUser) {
            return  response.status(400).json({
                message:"Email đã tồn tại"
            })
        }
        const exitName = await User.findOne({name}).exec()
        if (exitName) {
            return  response.status(400).json({
                message:"Tên user đã tồn tại"
            })
        }
        const user = await User({email,password}).save()
        response.json({
            user:{
                _id:user._id,
                name:user.name,
                phone:user.phone,
                address:user.address,
                email:user.email
            }
        })
    } catch (error) {
        response.status(400).json({
            message:"Lỗi"
        })
    }
}
export const signin = async (request,response)=>{
    const {email,  password} = request.body
    try {
        const user = await User.findOne({email}).exec();
        if(!user){
            response.status(400).json({
                message: "Sai email or password"
            })
        }
        if (user.status !==0 && user.role !== 1) {
            response.status(400).json({
                message: "Tài khoản của bạn chưa kích hoạt"
            })
        }
        if(!user.authenticate(password)){
            response.status(400).json({
                message: "Sai email or password"
            })
        }
        const token = jwt.sign({_id:user._id},"123456",{expiresIn:"12h"})
        response.json({
            token,
            user:{
                _id:user._id,
                name:user.name,
                phone:user.phone,
                address:user.address,
                email:user.email,
                role:user.role
            }
        })
    } catch (error) {
        response.status(400).json({
            message:"Lỗi"
        })
    }
}
