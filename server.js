const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let updates = []; // Temporary in-memory storage

// Endpoint to get all updates
app.get('/api/updates1', (req, res) => {
    res.json(updates);
});

// Endpoint to add a new update
app.post('/api/updates1', (req, res) => {
    const newUpdate = req.body;
    updates.push(newUpdate);
    res.status(201).json(newUpdate);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));