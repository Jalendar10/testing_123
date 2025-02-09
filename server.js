// server.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const AgentSystem = require('./agentSystem');
const RecommendationAgent = require('./recommendationAgent');


const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); 
// if you have css/js in a `public` folder

const agentSystem = new AgentSystem();
const recommendationAgent = new RecommendationAgent();

// Serve cp.html for the root endpoint
app.get('/', (req, res) => {
  // This assumes cp.html is in the same folder as server.js
  // or adjust if needed
  res.sendFile(path.join(__dirname, 'cp.html'));
});

// To get historical data
app.get('/history_data_file.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'history_data_file.json'));
});

// /chat -> receives { message } from front-end, returns JSON
app.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;
    const response = await agentSystem.processUserInput(message);
    return res.json({ response });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// /initialize -> receives { data }, calls agentSystem.setBehavior
app.post('/initialize', (req, res) => {
  const { data } = req.body;
  const collectedDataText = JSON.stringify(data);
  agentSystem.setBehavior(collectedDataText);
  console.log("Collected Data:", collectedDataText);
  return res.json({ status: 'success', data: collectedDataText });
});


// /recommend -> receives { data }, calls recommendationAgent.processUserInput
app.post('/recommend', async (req, res) => {
  try {
    const { data } = req.body;
    // Convert data to string and append extra instructions
    const collectedDataText = JSON.stringify(data)
      + " ";

    const recommendations = await recommendationAgent.processUserInput(collectedDataText);
    // The recommendations might be multi-line. Let's split on newlines
    const lines = recommendations.split('\n').filter(l => l.trim().length > 0);

    return res.json({ recommendations: lines });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
