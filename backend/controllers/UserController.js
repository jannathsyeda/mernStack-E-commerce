import asyncHandler from 'express-async-handler'
import Users from '../Models/UserModel.js'

// const getAllUsers=asyncHandler(async(req,res)=>{
//     const ALLUsers=await User.find({})

//     res.json(ALLUsers)
   
    
// })

const authUsers=asyncHandler(async(req,res)=>{
    const {email,password}=req.body
    const user=await Users.findOne({email})

    if(user && (await user.matchPassword(password))){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:null


        })
    }else{
        res.status(401)
        throw new Error('Invalid email or password')
    }
   

    
})

export {authUsers}