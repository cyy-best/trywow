const { MongoClient } = require('mongodb');

// MongoDB 连接字符串
const url = 'mongodb://localhost:27017'; // 默认端口号为 27017
const dbName = 'myapp'; // 数据库名称

// 创建 MongoDB 客户端
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// 连接到数据库
async function connectToDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');

        // 返回连接的数据库
        return client.db(dbName);
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}

module.exports = connectToDB;
