const express = require('express');
const router = express.Router();

let posts = [];

// 定时任务，每小时清理一次超过24小时的帖子
setInterval(() => {
  const now = new Date();
  posts = posts.filter(post => {
    const postTime = new Date(post.time);
    return (now - postTime) < 24 * 60 * 60 * 1000; // 24 hours in milliseconds
  });
}, 60 * 60 * 1000); // 每小时执行一次

// 获取所有帖子
router.get('/', (req, res) => {
  res.json(posts);
});

// 创建新帖子
router.post('/', (req, res) => {
  const { title, content } = req.body;
  const time = new Date().toLocaleString();
  const index = posts.length.toString().padStart(7, '0');
  const post = { type: 'thread', title, content, time, index };
  posts.push(post);
  res.status(201).json(post);
});

module.exports = router;