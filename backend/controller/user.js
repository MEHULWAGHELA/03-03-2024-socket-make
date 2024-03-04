const User = require("../model/User")

const getUser = async (req, res) => {
    try {
        const userData = await User.find();
        return {
            success: true,
            message: 'User retrived successfully',
            data: userData
        }
    }
    catch (error) {
        return {
            success: false,
            message: error.message,
        }
    }
}
const addUser = async (req, res) => {
    try {
        const userData = await User.create(req)
        return {
            success: true,
            message: 'User Created successfully',
            data: userData
        }
    }
    catch (error) {
        return {
            success: false,
            message: error.message,
        }
    }
}
const deleteUser = async (req) => {
    try {
        const userData = await User.deleteOne({ _id: req.id })
        return {
            success: true,
            message: 'User Deleted successfully',
            data: userData
        }
    }
    catch (error) {
        return {
            success: false,
            message: error.message,
        }
    }
}
const updateUser = async (req) => {
    try {
        // const userData = await User.findByIdAndUpdate(req.id, req)
        /* by both method we can update */
        await User.findOneAndUpdate({_id:req.id},{...req})
        const userData = await User.findOne({_id:req.id})
        return {
            success: true,
            message: 'User updated successfully',
            data: userData
        }
    }
    catch (error) {
        return {
            success: false,
            message: error.message,
        }
    }
}

module.exports = { getUser, addUser, updateUser, deleteUser }