const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3001;

app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the API!'); // Message for root URL
});

// Endpoint to get all users (clients)
app.get('/users', (req, res) => {
  fs.readFile(path.join(__dirname, 'data.json'), 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error reading file');
    const jsonData = JSON.parse(data);
    res.json(jsonData.clients); // Respond with the clients array
  });
});

// Endpoint to delete a user (client)
app.delete('/users/:id', (req, res) => {
  const clientId = parseInt(req.params.id); // Convert to integer

  fs.readFile(path.join(__dirname, 'data.json'), 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error reading file');

    const jsonData = JSON.parse(data);
    const updatedClients = jsonData.clients.filter(client => client.client_id !== clientId);

    // Update the JSON data
    jsonData.clients = updatedClients;

    fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(jsonData, null, 2), (err) => {
      if (err) return res.status(500).send('Error writing file');
      res.status(204).send(); // No content response
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
