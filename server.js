const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const AgentSystem = require('./agentSystem');
const RecommendationAgent = require('./recommendationAgent');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const agentSystem = new AgentSystem();
const recommendationAgent = new RecommendationAgent();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'cp.html'));
});

app.get('/history_data_file.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'history_data_file.json'));
});

app.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;
    const response = await agentSystem.processUserInput(message);
    return res.json({ response });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

app.post('/initialize', (req, res) => {
  const { data } = req.body;
  const collectedDataText = JSON.stringify(data);
  agentSystem.setBehavior(collectedDataText);
  console.log("Collected Data:", collectedDataText);
  return res.json({ status: 'success', data: collectedDataText });
});

app.post('/recommend', async (req, res) => {
  try {
    const { data } = req.body;
    const collectedDataText = JSON.stringify(data);

    const recommendations = await recommendationAgent.processUserInput(collectedDataText);
    const lines = recommendations.split('\n').filter(l => l.trim().length > 0);

    return res.json({ recommendations: lines });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
