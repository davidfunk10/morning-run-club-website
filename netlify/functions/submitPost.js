const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  let post;
  try {
    post = JSON.parse(event.body);
  } catch (err) {
    console.error('Error parsing request body:', err);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid JSON format' }),
    };
  }

  const filePath = path.join(__dirname, '../../data/posts.json');
  let posts = [];

  try {
    const rawData = fs.readFileSync(filePath);
    posts = JSON.parse(rawData);
  } catch (err) {
    console.error('Failed to read posts.json:', err);
    // If file is missing or invalid, start with empty array
    posts = [];
  }

  posts.push(post);

  try {
    fs.writeFileSync(filePath, JSON.stringify(posts, null, 2));
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error('Failed to write posts.json:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to save post' }),
    };
  }
};
