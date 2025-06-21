exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Only POST requests allowed" }),
    };
  }

  const { password, caption, imageData } = JSON.parse(event.body);

  if (password !== "run4God") {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: "Unauthorized" }),
    };
  }

  // Simulated database logic (for now just log it)
  console.log("Received new post:", { caption, imageData });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Post received!" }),
  };
};