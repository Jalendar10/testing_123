const baseCode = require('./baseCode');

class RecommendationAgent {
  constructor() {
    this.messages = [];
    this.agentBehavior = "Summarize the content to identify the risk. I need Financial Health, Performance Metrics, Credit risk, exposure, Operational Metrics, Variable metrics and give me in JSON format, I need like {Financial Health, Performance Metrics, Credit risk, exposure, Operational Metrics, Variable metrics}";
  }

  async processUserInput(userInput) {
    this.messages.push({ role: 'human', content: userInput });

    let response = "";
    try {
      response = await baseCode.processRequest(this.messages, this.agentBehavior);
    } catch (error) {
      response = `Error processing request: ${error.message}`;
    }

    this.messages.push({ role: 'assistant', content: response });
    console.log("raw RecommendationAgent :", response);
    return response;
  }
}

module.exports = RecommendationAgent;
