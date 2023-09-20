const express = require('express');
const router = express.Router();

router.get('/data', (req, res) => {
    const db = client.db('your-database-name'); // 替换为您的数据库名称
    const collection = db.collection('your-collection-name'); // 替换为您的集合名称

    collection.find({}).toArray((err, data) => {
        if (err) {
            console.error('Error retrieving data:', err);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json(data);
        }
    });
});

module.exports = router;
