// baseCode.js
require('dotenv').config();
const https = require('https');
const { createHmac } = require('crypto');
const { v4: uuidv4 } = require('uuid');

/**
 * Load environment variables like in Python's load_dotenv.
 */
function loadEnvironment() {
  const apiKey = process.env.API_KEY;
  const apiSecret = process.env.API_SECRET;
  const baseUrl = process.env.BASE_URL; // e.g. https://YOUR_ENDPOINT/ai-gateway/v1/chat/completions

  if (!apiKey || !apiSecret || !baseUrl) {
    throw new Error("Missing one of the environment variables: API_KEY, API_SECRET, BASE_URL");
  }
  return { apiKey, apiSecret, baseUrl };
}

/**
 * Create the request body, including a system message for `agent_behavior`.
 * Then append the user/assistant messages.
 */
function createRequestBody(messages, agentBehavior) {
  // Convert them to the format the endpoint expects
  const systemMessage = { role: 'system', content: agentBehavior || '' };

  const serializedMessages = [systemMessage].concat(
    messages.map(msg => ({
      role: msg.role === 'human' ? 'user' : 'assistant',
      content: msg.content
    }))
  );

  return {
    model: 'azure-openai-4o-mini-east', // or whatever your model is
    messages: serializedMessages,
    frequency_penalty: 0,
    max_tokens: 1000,
    n: 1,
    presence_penalty: 0,
    response_format: { type: 'text' },
    stream: true, // streaming
    temperature: 1,
    top_p: 1
  };
}

/**
 * Create HMAC signature:
 *  hmac_source_data = apiKey + requestId + timestamp + JSON(body)
 */
function createHmacSignature(body, apiKey, apiSecret, timestamp, requestId) {
  const bodyString = JSON.stringify(body);
  const hmacSource = apiKey + requestId + timestamp + bodyString;
  return createHmac('sha256', apiSecret).update(hmacSource).digest('base64');
}

/**
 * Send SSE streaming request to the AI gateway.
 */
function sendRequest(requestBody, hmacSignature, baseUrl, apiKey, timestamp, requestId) {
  return new Promise((resolve, reject) => {
    const bodyString = JSON.stringify(requestBody);
    const urlObj = new URL(baseUrl);

    const headers = {
      'Content-Type': 'application/json',
      Accept: 'text/event-stream',
      'api-key': apiKey,
      'Client-Request-Id': requestId,
      Timestamp: String(timestamp),
      Authorization: hmacSignature
    };

    const options = {
      method: 'POST',
      hostname: urlObj.hostname,
      path: urlObj.pathname,
      headers
    };
    if (urlObj.port) options.port = urlObj.port;

    let fullResponse = '';

    const req = https.request(options, (res) => {
      if (res.statusCode !== 200) {
        let errorData = '';
        res.on('data', chunk => { errorData += chunk; });
        res.on('end', () => {
          reject(new Error(`Error: ${res.statusCode}\n${errorData}`));
        });
        return;
      }

      res.on('data', (chunk) => {
        const lines = chunk.toString().split('\n');
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const dataPart = line.slice('data: '.length);
            if (dataPart === '[DONE]') {
              // streaming finished
              continue;
            }
            try {
              const parsed = JSON.parse(dataPart);
              const choices = parsed.choices || [];
              if (choices.length > 0 && choices[0].delta) {
                fullResponse += choices[0].delta.content || '';
              }
            } catch (err) {
              // ignore parse errors on lines that aren't valid JSON
            }
          }
        }
      });

      res.on('end', () => {
        resolve(fullResponse);
      });
    });

    req.on('error', (err) => {
      reject(err);
    });

    req.write(bodyString);
    req.end();
  });
}

/**
 * Exposed function to unify creation of request + sending.
 */
async function processRequest(messages, agentBehavior) {
  const { apiKey, apiSecret, baseUrl } = loadEnvironment();
  const requestBody = createRequestBody(messages, agentBehavior);
  const timestamp = Date.now();
  const requestId = uuidv4();

  const hmacSignature = createHmacSignature(requestBody, apiKey, apiSecret, timestamp, requestId);
  const response = await sendRequest(requestBody, hmacSignature, baseUrl, apiKey, timestamp, requestId);
  return response;
}

module.exports = {
  processRequest
};
