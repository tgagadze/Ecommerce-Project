// import User  from '../model/user';
const User = require('../model/user');
import bcrypt from 'bcrypt';

export const getUsers = async (req, res) => {
    try {
        let users = await User.find({}).exec();
        return res.status(201).json(users);
    }
    catch (error) {
        console.error(error)
        return res.status(400).json({ message: "Invalid Information" });
    }
};

export const storeUser = async (req, res) => {
    try {

        const user = await User.create(req.body.userDetails);
        res.status(200).json(user)
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ message: "couldnd add user" });
    }
}

export const deleteAllUsers = async (req, res) => {
    await User.remove({});
    res.status(200).json({ message: 'all items deleted' })
}


export const loginUser = async (req, res) => {
    try {
        console.log(req.body)
        const user = await User.findOne({email: req.body.login.email});
        const match = await bcrypt.compare(req.body.login.password, user.password);
        if (match) {
            res.status(200).json({ user });
        }
        else {
            res.status(400).json({
                message: 'User not Found'
            })
        }
    }
    catch(error){
        res.status(400).json({
            message: error.message
        })
    }
}