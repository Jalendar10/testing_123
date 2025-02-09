const baseCode = require('./baseCode');

class AgentSystem {
  constructor() {
    this.messages = [];
    this.agentBehavior = "";
  }

  setBehavior(behaviorData) {
    this.agentBehavior = behaviorData;
    console.log(`Agent behavior set to: ${this.agentBehavior}`);
  }

  async processUserInput(userInput) {
    this.messages.push({ role: 'human', content: userInput });

    let responseText = "";
    try {
      responseText = await baseCode.processRequest(this.messages, this.agentBehavior);
    } catch (error) {
      responseText = `Error processing request: ${error.message}`;
    }

    this.messages.push({ role: 'assistant', content: responseText });

    return responseText;
  }
}

module.exports = AgentSystem;
