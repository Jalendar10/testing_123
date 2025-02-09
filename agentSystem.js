// agentSystem.js
const baseCode = require('./baseCode');

class AgentSystem {
  constructor() {
    // This mimics the Python ConversationBufferMemory
    // We'll store messages as an array of {role: 'human'|'assistant', content: string}
    this.messages = [];
    this.agentBehavior = "";
  }

  setBehavior(behaviorData) {
    // Store the "behavior" (whatever text was collected by the front-end)
    this.agentBehavior = behaviorData;
    console.log(`Agent behavior set to: ${this.agentBehavior}`);
  }

  async processUserInput(userInput) {
    // Add the user message
    this.messages.push({ role: 'human', content: userInput });

    let responseText = "";
    try {
      responseText = await baseCode.processRequest(this.messages, this.agentBehavior);
    } catch (error) {
      responseText = `Error processing request: ${error.message}`;
    }

    // Add AI's reply to memory
    this.messages.push({ role: 'assistant', content: responseText });

    return responseText;
  }
}

module.exports = AgentSystem;
