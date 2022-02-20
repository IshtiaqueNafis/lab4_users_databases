const User = require("../models/UserModel");

exports.createUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({
            success: true,
            data: user
        });
    } catch (e) {
        res.status(400).json({success: false});
    }
}

exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            count: User.length,
            data: users
        });

    } catch (e) {
        res.status(400).json({success: false});
    }
}