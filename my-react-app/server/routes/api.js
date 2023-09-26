const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user'); // 导入用户模型

mongoose.connect('mongodb://localhost:27017/myapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

router.get('/api/data', async (req, res) => {
    try {
        const data = await User.find({}); // 使用 Mongoose 模型来查询数据
        res.json(data);
    } catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


router.post('/register', async (req, res) => {
    try {
        // 从请求体中获取用户提交的数据
        const { name, email, password } = req.body;

        // 创建一个新用户对象
        const newUser = new User({
            name,
            email,
            password,
        });

        // 保存新用户到数据库
        await newUser.save();

        // 返回成功响应
        res.json({ success: true, message: 'User registered successfully.' });
    } catch (error) {
        // 处理错误情况
        console.error('Error registering user:', error);
        res.status(500).json({ success: false, message: 'Registration failed.' });
    }
});

module.exports = router;
