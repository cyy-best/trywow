const express = require('express');
const app = express();
const port = 3000; // 指定服务器端口
const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb://localhost:27017'; // MongoDB 连接字符串
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const apiRouter = require('./routes/api');

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
client.connect((err) => {
    if (err) {
        console.error('MongoDB connection error:', err);
    } else {
        console.log('Connected to MongoDB');
    }
});
app.use('/api', apiRouter);
