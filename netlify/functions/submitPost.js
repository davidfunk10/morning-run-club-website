const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  const post = JSON.parse(event.body);
  const filePath = path.join(__dirname, '../../data/posts.json');

  let posts = [];
  try {
    posts = JSON.parse(fs.readFileSync(filePath));
  } catch (err) {
    console.error('Failed to read posts.json:', err);
  }

  posts.push(post);

  try {
    fs.writeFileSync(filePath, JSON.stringify(posts, null, 2));
  } catch (err) {
    console.error('Failed to write posts.json:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to save post' }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true }),
  };
};
