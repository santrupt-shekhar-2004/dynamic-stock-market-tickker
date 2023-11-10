const express = require('express');
const app = express();
const port = 3000; // You can change this port as needed

// Define a route for the home button
app.get('/home', (req, res) => {
  // You can add logic here to handle the "home" action
  // For simplicity, we'll send a simple response
  res.send('You clicked the home button!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${300}`);
});
