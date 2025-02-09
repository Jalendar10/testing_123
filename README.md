<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="css/fdl-bootstrap.css" />
  <link rel="stylesheet" href="css/material-icons.css" />
  <link rel="stylesheet" href="css/fdl-style.css" />
  <link rel="stylesheet" href="css/datepicker.css" />
  <link rel="stylesheet" href="css/site.css" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CreditPRO Relationship Summary</title>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <style>
    /* Chatbot container */
    .chatbot-container {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 350px;
      max-height: 1500px;
      border: 1px solid #ccc;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      background-color: #fff;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      resize: both;
    }

    /* Chatbot header */
    .chatbot-header {
      background-color: #ea550f;
      color: white;
      padding: 15px;
      text-align: center;
      font-size: 18px;
      font-weight: bold;
    }

    /* Chatbot messages area */
    .chatbot-messages {
      flex: 1;
      padding: 10px;
      overflow-y: auto;
      background-color: #f9f9f9;
    }

    /* Message styling */
    .message {
      margin: 10px 0;
      display: flex;
      align-items: flex-start;
    }

    .message.bot {
      justify-content: flex-start;
    }

    .message.user {
      justify-content: flex-end;
    }

    .message .bubble {
      max-width: 70%;
      padding: 10px 15px;
      border-radius: 15px;
      font-size: 14px;
      line-height: 1.5;
      box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
    }

    .message.bot .bubble {
      background-color: #ea550f;
      color: white;
      border-bottom-left-radius: 0;
    }

    .message.user .bubble {
      background-color: #e0e0e0;
      color: #333;
      border-bottom-right-radius: 0;
    }

    /* Chatbot input area */
    .chatbot-input {
      display: flex;
      border-top: 1px solid #ccc;
      background-color: #f9f9f9;
    }

    .chatbot-input input {
      flex: 1;
      padding: 10px;
      border: none;
      outline: none;
      font-size: 14px;
      background-color: white;
    }

    .chatbot-input button {
      padding: 10px 15px;
      background-color: #ea550f;
      color: white;
      border: none;
      cursor: pointer;
      font-size: 14px;
      font-weight: bold;
    }

    .chatbot-input button:hover {
      background-color: #ea550f;
    }

    /* Table styling for suggestions */
    .suggestions-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }

    .suggestions-table th, .suggestions-table td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }

    .suggestions-table th {
      background-color: #f2f2f2;
    }
  </style>
</head>
<body class="fdl-2" style="line-height: 1.6; color: #333;">
  <main style="margin-left: 20px;">
    <section class="collect">
      <h2>Merchant Background</h2>
      <ul style="margin-left: 25px;">
        <li>Established in Year <b>1929</b>.</li>
        <li>Company Registration No: <b>00241882</b>.</li>
        <li>Onboarded in <b>2014</b>.</li>
        <li>Website: <a>www.fullers.co.uk</a></li>
        <li>There are <b>11</b> directors:
          <ol>
            <li>Ms Dawn Browne, Director</li>
            <li>Mr Neil Reynolds Smith, Director</li>
            <li>Ms Rachel Louise Spencer, Company Secretary</li>
            <li>Mr Robin James Leslie Rowland, Director</li>
            <li>Mr Frederick James Mortimer Turner, Director</li>
            <li>Mrs Helen Victoria Jones, Director</li>
            <li>Ms Juliette Natasha Stacey, Director</li>
            <li>Sir James Henry Fleetwood Fuller, Director</li>
            <li>Mr Richard Hamilton Fleetwood Fuller, Director</li>
            <li>Mr Simon Emeny, Director</li>
            <li>Mr Michael John Turner, Director</li>
          </ol>
        </li>
        <li>Total <b>1</b> Shareholders:
          <ol>
            <li>UNDISCLOSED (99.99%)</li>
          </ol>
        </li>
        <li>CreditSafe Score: <b>68 (Low Risk)</b></li>
        <li>CreditSafe Additional Commentry:
          <ul style="margin-left: 35px;">
            <li>This company has been treated as a PLC company in terms of the score/limit that has been generated.</li>
            <li>This company's Asset Ratio shows a high amount of cover on outstanding obligations.</li>
            <li>The latest Balance Sheet indicates a negative net Working Capital position.</li>
            <li>This company's Return on Total Assets Employed ratio shows a relatively low return on Assets.</li>
            <li>The latest accounts show a reduction in Equity in comparison to the previous year.</li>
            <li>The latest accounts show an increase in Revenue in comparison to the previous year.</li>
            <li>This company has made late payments on a low percentage of invoices.</li>
            <li>This company's auditors have reported no adverse information.</li>
          </ul>
        </li>
      </ul>
      <div style="margin-left: 25px;">
        <h5>Additional Comments</h5>
        <textarea rows="4" cols="100" placeholder="Enter your comments here..."></textarea>
      </div>
    </section>
    <section class="collect">
      <h2>Processing</h2>
      <ul style="margin-left: 25px;">
        <li><a>ATQ Processing</a></li>
        <li>30 days Sales: <b>€ 361,566</b>.</li>
        <li>The annual CTO for 12 months <b>decreased</b> over PY and stood at 69.00M(220.44M). An ATV of €30.12.</li>
        <li>The current refunds stood at <b>0.5%</b>. PY ratio: <b>0.23%</b>. 30 Days Ratio: <b>1.76%.</b> </li>
        <li>The current chargebacks (amount) stood at <b>0.03%</b>. PY ratio: <b>0.02%</b>. 30 Days Ratio: <b>0%.</b> </li>
        <li>The current chargebacks (count) stood at <b>0%</b>. PY ratio: <b>0.0%</b>. 30 Days Ratio: <b>0.0%.</b> </li>
        <li>Ratio keyed vs. chip percentage: <b>12.52%.</b> </li>
        <li>Ratio keyed vs. ECOM percentage: <b>98%.</b> </li>
      </ul>
      <div style="margin-left: 25px;">
        <h5>Additional Comments</h5>
        <textarea rows="4" cols="100" placeholder="Enter your comments here..."></textarea>
      </div>
    </section>
    <section class="collect">
      <h2>Exposure</h2>
      <ul style="margin-left: 25px;">
        <li>NDX % : <b>89</b></li>
        <li>NDX days : <b>15</b></li>
      </ul>
      <table class="table table-hover table-bordered" style="margin-left: 25px; width: 30%;">
        <thead class="thead-dark">
          <tr>
            <th style="width: 30%; background-color:white; border: none;"></th>
            <th role="columnheader" scope="col">Current Risk</th>
            <th>Peak Risk</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Relationship Exposure</td>
            <td style="text-align: right;">€2,900</td>
            <td style="text-align: right;">€3,201,439</td>
          </tr>
          <tr>
            <td>NDX Exposure</td>
            <td style="text-align: right;">€0</td>
            <td style="text-align: right;">€3,071,334</td>
          </tr>
          <tr>
            <td>Operating Exposure</td>
            <td style="text-align: right;">€2,900</td>
            <td style="text-align: right;">€130,105</td>
          </tr>
          <tr>
            <td>Gift Card Exposure</td>
            <td style="text-align: right;">€0</td>
            <td style="text-align: right;">€0</td>
          </tr>
          <tr>
            <td>Other Exposure</td>
            <td style="text-align: right;">€0</td>
            <td style="text-align: right;">€0</td>
          </tr>
          <tr>
            <td>Receivables Exposure</td>
            <td style="text-align: right;">€0</td>
            <td style="text-align: right;">€0</td>
          </tr>
          <tr>
            <td>Chargeback Exposure</td>
            <td style="text-align: right;">€86</td>
            <td style="text-align: right;">€6,858</td>
          </tr>
          <tr>
            <td>Refund Exposure</td>
            <td style="text-align: right;">€2,814</td>
            <td style="text-align: right;">€123,247</td>
          </tr>
        </tbody>
      </table>
      <div style="margin-left: 25px;">
        <h5>Additional Comments</h5>
        <textarea rows="4" cols="100" placeholder="Enter your comments here..."></textarea>
      </div>
    </section>
    <section class="collect">
      <h2>Financial Summary</h2>
      <table class="table table-hover table-bordered" style="margin-left: 25px; width: 30%;">
        <thead class="thead-dark">
          <tr>
            <th style="width: 30%; background-color:white; border: none;"></th>
            <th>FYE 2023-12-31</th>
            <th>FYE 2022-12-31</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Operating Profit</td>
            <td style="text-align: right;">€27,700,000 <span class="material-icons" style="color: green;">arrow_upward</span> (154.13%)</td>
            <td style="text-align: right;">€10,900,000</td>
          </tr>
          <tr>
            <td>Depreciation</td>
            <td style="text-align: right;">€26,100,000 <span class="material-icons" style="color: red;">arrow_downward</span> (-19.69%)</td>
            <td style="text-align: right;">€32,500,000</td>
          </tr>
          <tr>
            <td>Retained Profit</td>
            <td style="text-align: right;">€-900,000 <span class="material-icons" style="color: red;">arrow_downward</span> (-280.00%)</td>
            <td style="text-align: right;">€500,000</td>
          </tr>
          <tr>
            <td>Total Fixed Assets</td>
            <td style="text-align: right;">€689,500,000 <span class="material-icons" style="color: red;">arrow_downward</span> (-0.99%)</td>
            <td style="text-align: right;">€696,400,000</td>
          </tr>
          <tr>
            <td>Cash</td>
            <td style="text-align: right;">€12,200,000 <span class="material-icons" style="color: red;">arrow_downward</span> (-13.48%)</td>
            <td style="text-align: right;">€14,100,000</td>
          </tr>
          <tr>
            <td>Current Liabilities</td>
            <td style="text-align: right;">€64,900,000 <span class="material-icons" style="color: red;">arrow_downward</span> (-1.52%)</td>
            <td style="text-align: right;">€65,900,000</td>
          </tr>
          <tr>
            <td>Long-term Liabilities</td>
            <td style="text-align: right;">€226,400,000 <span class="material-icons" style="color: green;">arrow_upward</span> (1.03%)</td>
            <td style="text-align: right;">€224,100,000</td>
          </tr>
          <tr>
            <td>Tangible Net Worth</td>
            <td style="text-align: right;">€-31,800,000 <span class="material-icons" style="color: red;">arrow_downward</span> (7.07%)</td>
            <td style="text-align: right;">€-29,700,000</td>
          </tr>
          <tr>
            <td>Cash Flow</td>
            <td style="text-align: right;">€20,700,000 <span class="material-icons" style="color: green;">arrow_upward</span> (23.95%)</td>
            <td style="text-align: right;">€16,700,000</td>
          </tr>
        </tbody>
      </table>
      <div style="margin-left: 25px;">
        <h5>Additional Comments</h5>
        <textarea rows="4" cols="100" placeholder="Enter your comments here..."></textarea>
      </div>
    </section>
    <section>
      <h2>Other</h2>
      <div style="margin-left: 25px;">
        <textarea rows="4" cols="100" placeholder="Enter your comments here..."></textarea>
      </div>
    </section>
    <section id="auto_generated">
      <h2>Recommendation</h2>
      <ul style="margin-left: 25px;">
        <li>Model Calculated Credit Rating: <b>D+</b></li>
      </ul>
      <div style="margin-left: 25px;">
        <h5>Additional Comments</h5>
        <textarea rows="4" cols="100" placeholder="Enter your comments here..."></textarea>
      </div>
      <div style="margin-left: 25px;" id="suggest_comments">
        <h5>Suggest Comments</h5>
        <table class="suggestions-table" id="suggestions-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody id="suggestions-body">
            <!-- Suggestions will be populated here -->
          </tbody>
        </table>
      </div>
    </section>
    <section>
      <h2>Previous Review Comments</h2>
      <main>
        <section>
          <div style="margin-left: 25px;">
            <h3 style="color: rgb(46, 139, 201);">Previous 3 Trigger Alerts</h3>
            <h4>Alert Date: 15-APR-2024</h4>
            <p><b>Rules Triggered</b></p>
            <ul style="margin-left: 25px;">
              <li>Change In Collateral Balance</li>
              <li>High Equity Leverage (Financial)</li>
            </ul>
            <p><b>Analyst Name:</b> DHIRAJ RAJ SRIWASTAVA</p>
            <p><b>Decision:</b> Maintain As Is</p>
            <p><b>Decision Date:</b> 17-Apr-2024</p>
            <p><b>Comments:</b>
              Alert on Change In Collateral Balance: Validated on ICE, security balance as on 17th April 2024 is €30k. Processing trend inline with previous trend. Refund ratio is 1.43% vs IA 2.14% and nil CB. MAI.</p>
            <hr>
            <p><b>Analyst Name:</b> Nikhil Kanabar</p>
            <p><b>Decision:</b> Maintain As Is</p>
            <p><b>Decision Date:</b> 17-Apr-2024</p>
            <p><b>Comments:</b> False Positive Trigger Alert for Change in Collateral Balance. Validated on ICE, security balance as on 17th April 2024 is €30k. Refund ratio is 1.43% vs IA 2.14% and nil CB. MAI</p>
            <hr>
            <p><b>Analyst Name:</b> Anthony Wood</p>
            <p><b>Decision:</b> Maintain As Is</p>
            <p><b>Decision Date:</b> 30-Apr-2024</p>
            <p><b>Comments:</b></p>
            <hr>
            <h4>Alert Date: 31-Dec-2023</h4>
            <p><b>Rules Triggered:</b></p>
            <ul style="margin-left: 25px;">
              <li>Ownership Change (Reputational)</li>
              <li>High Equity Leverage (Financial)</li>
              <li>Safety Net- Latest Financial Information greater than 2 years (Financial)</li>
            </ul>
            <p><b>Analyst Name:</b> Reema Dalimbe</p>
            <p><b>Decision:</b> Maintain As Is</p>
            <p><b>Decision Date:</b> 22-Jan-2024</p>
            <p><b>Comments:</b> Rule generated for Ownership change: Rectified on CS. MAI</p>
            <hr>
            <p><b>Analyst Name:</b> SYSTEM</p>
            <p><b>Decision:</b> Maintain As Is</p>
            <p><b>Decision Date:</b> 25-Jan-2024</p>
            <p><b>Comments:</b> Closing this alert as this is a false positive alert INC -INC015070894</p>
            <hr>
            <h4>Alert Date: 03-Oct-2023</h4>
            <p><b>Rules Triggered:</b></p>
            <ul style="margin-left: 25px;">
              <li>High Refunds (Operational)</li>
            </ul>
            <p><b>Analyst Name:</b> DHIRAJ RAJ SRIWASTAVA</p>
            <p><b>Decision:</b> Maintain As Is</p>
            <p><b>Decision Date:</b> 06-Oct-2023</p>
            <p><b>Comments:</b> Alert on high refunds: Processing in line, however no processing seen in Oct 23 till date. Current CR is 1.86% vs IA 2.14% & nil CB. Need to confirm whether merchant has migrated. Deferring till Nov 23 till then MAI.</p>
            <hr>
            <p><b>Analyst Name:</b> Oumar Oumar Sheriff</p>
            <p><b>Decision:</b> Maintain As Is</p>
            <p><b>Decision Date:</b> 10-Oct-2023</p>
            <p><b>Comments:</b> I have contacted the merchant to confirm if migration is the case.</p>
          </div>
        </section>
        <br/>
        <div style="margin-left: 25px;">
          <h5>Additional Comments</h5>
          <textarea rows="4" cols="100" placeholder="Enter your comments here..."></textarea>
        </div>
      </main>
      <div class="chatbot-container">
        <div class="chatbot-header">HRM Review Personal Assistant.</div>
        <div class="chatbot-messages" id="chatbot-messages"></div>
        <div class="chatbot-input">
          <input type="text" id="chatbot-input" placeholder="Type a message...">
          <button onclick="sendMessage()">Send</button>
        </div>
      </div>
    </section>
  </main>
  <script>
    // Function to send a message
    function sendMessage() {
      const input = document.getElementById('chatbot-input');
      const message = input.value.trim();
      if (message) {
        addMessage('You', message);
        input.value = '';
        fetch('/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message })
        })
        .then(response => response.json())
        .then(data => {
          handleChatbotResponse(data.response);
        })
        .catch(error => {
          console.error('Error:', error);
          addMessage('Chatbot', 'Sorry, something went wrong.');
        });
      } else {
        addMessage('Chatbot', 'Please enter a message to send.');
      }
    }

    // Function to handle the chatbot's response
    function handleChatbotResponse(response) {
      response = response.trim();
      console.log('Raw Response:', response);

      let jsonData = null;

      // Regular expression to capture text inside a ```json ... ``` code block
      const regex = /```json\s*([\s\S]*?)\s*```/;
      const match = response.match(regex);

      if (match && match[1]) {
        try {
          jsonData = JSON.parse(match[1]);
          console.log("Extracted JSON:", jsonData);
        } catch (error) {
          console.error("Error parsing JSON from code block:", error);
          addMessage('Chatbot', "Error parsing JSON response. Please check the data format.");
          return;
        }
      } else {
        try {
          jsonData = JSON.parse(response);
        } catch (error) {
          console.error("JSON parsing error without delimiters:", error);
          addMessage('Chatbot', response);
          return;
        }
      }

      if (jsonData && jsonData.chart && jsonData.data) {
        displayCharts(jsonData);
      } else {
        addMessage('Chatbot', response);
      }
    }

    // Function to display charts
    function displayCharts(data) {
      console.log("Displaying chart with data:", data);

      if (!data.chart || !data.data) {
        console.error("Invalid JSON format. Expected 'chart' and 'data' keys.");
        addMessage('Chatbot', "Invalid chart data format.");
        return;
      }

      let chartData = {
        labels: data.data.categories,
        datasets: [{
          label: data.data.label,
          data: data.data.values.map(Number), // Ensure values are numbers
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      };

      const canvasId = 'chartCanvas-' + Date.now();
      const chartContainer = document.createElement('div');
      chartContainer.classList.add('chart-container');

      const canvas = document.createElement('canvas');
      canvas.id = canvasId;
      chartContainer.appendChild(canvas);

      addCustomMessage('Chatbot', chartContainer);

      const ctx = canvas.getContext('2d');
      const chartType = data.chart.toLowerCase();

      const chartConfig = {
        type: chartType,
        data: chartData,
        options: {
          responsive: true,
          plugins: {
            legend: { position: 'top' },
            title: { display: true, text: `Chart Type: ${data.chart}` },
          },
          scales: {
            y: {
              beginAtZero: true, // Ensure the y-axis starts at zero
            },
          },
        },
      };

      new Chart(ctx, chartConfig);
    }

    // Function to add a message to the chatbot
    function addMessage(sender, message) {
      const messagesContainer = document.getElementById('chatbot-messages');
      const messageElement = document.createElement('div');
      messageElement.classList.add('message', sender === 'Chatbot' ? 'bot' : 'user');

      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      bubble.textContent = message;

      messageElement.appendChild(bubble);
      messagesContainer.appendChild(messageElement);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Function to add custom content (like charts) to the chatbot
    function addCustomMessage(sender, contentElement) {
      const messagesContainer = document.getElementById('chatbot-messages');
      const messageElement = document.createElement('div');
      messageElement.classList.add('message', sender === 'Chatbot' ? 'bot' : 'user');

      messageElement.appendChild(contentElement);
      messagesContainer.appendChild(messageElement);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Function to handle Enter key press
    function handleEnterKey(event) {
      if (event.key === 'Enter') {
        sendMessage();
        event.preventDefault();
      }
    }

    document.getElementById('chatbot-input')
      .addEventListener('keydown', handleEnterKey);

    // Function to collect headers and data
    function collectHeadersAndData() {
      const sections = document.querySelectorAll('section.collect');
      const collectedData = [];
      sections.forEach(section => {
        const headers = section.querySelectorAll('h1, h2, h3, h4, h5');
        const sectionData = {};
        headers.forEach(header => {
          const headerText = header.textContent;
          const childData = [];
          let sibling = header.nextElementSibling;
          while (sibling && !sibling.matches('h1, h2, h3, h4, h5')) {
            childData.push(sibling.textContent);
            sibling = sibling.nextElementSibling;
          }
          sectionData[headerText] = childData;
        });
        collectedData.push(sectionData);
      });
      collectedData.push({
        "visual Words": "anything related to visual or chart words in the input then I need data in the json format {chart,data} and data should be fit for line, bar, graph, pie. I don't want any comments in the data such as // I want plain json with proper json format {chart:bar/line/graph,data{we have categories,values,label..}}, validate json format before generating."
      });

      fetch('/initialize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: collectedData })
      })
      .then(response => response.json())
      .then(data => {
        console.log('Initialization response:', data);
      })
      .catch(error => console.error('Error during initialization:', error));
    }

    // Function to get recommendations
    function getRecommendations() {
      const sections = document.querySelectorAll('section.collect');
      const collectedData = [];

      sections.forEach(section => {
        const headers = section.querySelectorAll('h1, h2, h3, h4, h5');
        const sectionData = {};
        headers.forEach(header => {
          const headerText = header.textContent;
          const childData = [];
          let sibling = header.nextElementSibling;
          while (sibling && !sibling.matches('h1, h2, h3, h4, h5')) {
            childData.push(sibling.textContent);
            sibling = sibling.nextElementSibling;
          }
          sectionData[headerText] = childData;
        });
        collectedData.push(sectionData);
      });

      fetch('/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: collectedData })
      })
      .then(response => response.json())
      .then(data => {
        const recommendationsContainer = document.getElementById('suggestions-body');
        console.log('Recommendations response:', data);
        if (recommendationsContainer) {
          recommendationsContainer.innerHTML = '';

          const regex = /```json\s*([\s\S]*?)\s*```/;
          const match = data.response.match(regex);
          console.log("Recommendations response:", data.response);
          if (match) {
            try {
              const jsonData = JSON.parse(match[1]);
              consol.log("Recommendations JSON:", jsonData);
              for (const category in jsonData) {
                const row = document.createElement('tr');
                const categoryCell = document.createElement('td');
                categoryCell.textContent = category;
                row.appendChild(categoryCell);

                const detailsCell = document.createElement('td');
                const detailsPre = document.createElement('pre');
                detailsPre.textContent = JSON.stringify(jsonData[category], null, 2);
                detailsCell.appendChild(detailsPre);
                row.appendChild(detailsCell);

                recommendationsContainer.appendChild(row);
              }
            } catch (error) {
              console.error("Error parsing JSON data:", error);
            }
          }
        }
      })
      .catch(err => console.error('Error fetching recommendations:', err));
    }

    // Initialize on window load
    window.onload = function () {
      collectHeadersAndData();
      getRecommendations();
      addMessage('Chatbot', 'This chatbot is designed by Fiserv.');
    };
  </script>
</body>
</html>
