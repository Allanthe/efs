const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;
app.use(express.json()); // To parse JSON bodies

let data = require('../src/data.json'); // Adjusted path

// Get all users
app.get('/api/users', (req, res) => {
  res.json(data.users);
});

// Add a user
app.post('/api/users', (req, res) => {
  const newUser = req.body; // Expecting { id, name, age }
  data.users.push(newUser);
  fs.writeFileSync(path.join(__dirname, '../src/data.json'), JSON.stringify(data, null, 2));
  res.status(201).json(newUser);
});

// Edit a user
app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body; // Expecting { name, age }
  const index = data.users.findIndex(user => user.id === parseInt(id));
  
  if (index !== -1) {
    data.users[index] = { id: parseInt(id), ...updatedUser };
    fs.writeFileSync(path.join(__dirname, '../src/data.json'), JSON.stringify(data, null, 2));
    res.json(data.users[index]);
  } else {
    res.status(404).send('User not found');
  }
});

// Delete a user
app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  data.users = data.users.filter(user => user.id !== parseInt(id));
  fs.writeFileSync(path.join(__dirname, '../src/data.json'), JSON.stringify(data, null, 2));
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
