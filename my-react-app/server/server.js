const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000; // 指定服务器端口
const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb://localhost:27017'; // MongoDB 连接字符串
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const apiRouter = require('./routes/api');
const cors = require('cors');

// 配置允许的域名
const corsOptions = {
    origin: 'http://localhost:3000', // 你的前端应用的域名和端口
};

// 连接到MongoDB数据库
mongoose.connect('mongodb://localhost:27017/myapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

app.use(cors());
app.use(express.json()); // 添加这行来解析 JSON 请求体
app.use('/api', apiRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

