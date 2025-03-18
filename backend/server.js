import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './connection.js';
import Agent from './models/agent.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
dbConnect()
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB Connection Error:', err));

// API Routes

// Get all agents
app.get('/api/agents', async (req, res) => {
  try {
    const agents = await Agent.find();
    res.status(200).json(agents);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch agents' });
  }
});

// Create a new agent
app.post('/api/agents', async (req, res) => {
  try {
    const { name, ticket, description, voiceType, imageUrl, modelUrl } = req.body;
    const newAgent = new Agent({ name, ticket, description, voiceType, imageUrl, modelUrl });
    await newAgent.save();
    res.status(201).json(newAgent);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create agent', details: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
