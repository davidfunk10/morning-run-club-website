const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { date, password } = JSON.parse(event.body);

  if (password !== 'runclub123') {
    return { statusCode: 401, body: 'Unauthorized' };
  }

  const filePath = path.join(__dirname, '../../data/posts.json');

  let posts = [];
  try {
    posts = JSON.parse(fs.readFileSync(filePath));
  } catch (err) {
    return { statusCode: 500, body: 'Failed to read posts' };
  }

  const filteredPosts = posts.filter(post => post.date !== date);

  try {
    fs.writeFileSync(filePath, JSON.stringify(filteredPosts, null, 2));
    return { statusCode: 200, body: 'Post deleted' };
  } catch (err) {
    return { statusCode: 500, body: 'Failed to write posts' };
  }
};
