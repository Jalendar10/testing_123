// recommendationAgent.js
const baseCode = require('./baseCode');

class RecommendationAgent {
  constructor() {
    // We'll keep a separate in-memory conversation if needed
    this.messages = [];
    // Default “agent behavior”
    this.agentBehavior = "Summary the content to identify the risk. I need Financial Health, Performance Metrics, Credit risk, exposure,Operational Metrics,Variable metrics";
  }

  async processUserInput(userInput) {
    // Add user’s message
    this.messages.push({ role: 'human', content: userInput });

    let response = "";
    try {
      // We call the same base code, but pass in a different “agent behavior”
      response = await baseCode.processRequest(this.messages, this.agentBehavior);
    } catch (error) {
      response = `Error processing request: ${error.message}`;
    }

    // Add AI response
    this.messages.push({ role: 'assistant', content: response });

    return response;
  }
}

module.exports = RecommendationAgent;
