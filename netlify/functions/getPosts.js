const fs = require('fs');
const path = require('path');

exports.handler = async () => {
  const filePath = path.join(__dirname, '../../data/posts.json');
  let posts = [];

  try {
    posts = JSON.parse(fs.readFileSync(filePath));
  } catch {}

  return {
    statusCode: 200,
    body: JSON.stringify(posts)
  };
};
