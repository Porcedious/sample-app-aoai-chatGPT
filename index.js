const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Route handling GET request to root URL
app.get('/', (req, res) => {
  res.send('Hello, Node.js!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
