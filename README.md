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
      handleChatbotResponse(data);
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
  if (response.chart && response.data) {
    displayCharts(response);
  } else {
    addMessage('Chatbot', response.message || 'Invalid response format.');
  }
}

// Function to display charts
function displayCharts(data) {
  const chartData = {
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
    if (recommendationsContainer) {
      recommendationsContainer.innerHTML = '';

      if (data.recommendations && data.recommendations.length > 0) {
        const jsonData = data.recommendations;
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


after this code
it was displaying like this
Suggest Comments
Category	Details
0	
"```json"
1	
"{"
2	
"  \"Financial Health\": {"
3	
"    \" Year\": 1929,"
4	
"    \"Company Registration No\": \"00241882\","
5	
"    \"Oned Year\": 2014,"
6	
"    \"Website\": \"www.full.co.uk\","
7	
"    \"Directors\": ["
8	
"      \"Ms Dawn Browne\","
9	
"      \"Mr Neil Reynolds Smith\","
10	
"      \"Ms Rachel Louise Spencer\","
11	
"      \"Mr Robin James Leslie Rowland\","
12	
"      \"Mr Frederick James Mortimer Turner\","
13	
"      \"Mrs Helen Victoria Jones\","
14	
"      \"Msiette Natasha Stacey\","
15	
"      \"Sir James Henry Fleetwood Fuller\","
16	
"      \"Mr Richard Hamilton Fleetwood Fuller\","
17	
"      \"Mr Simon Emeny\","
18	
"      \"Mr Michael John Turner\""
19	
"    ],"
20	
"    \"Total Shareholders\": \"UNDISCLOSED (99.99%)\","
21	
" \"CreditSafe Score\": 68,"
22	
"    \"CreditSafe Commentary\": {"
23	
"      \"Company Type\": \"Treated as PLC for scoring/limit\","
24	
"      \"Asset Ratio\": \"High on obligations\","
25	
"      \"Net Working Capital\": \"Negative\","
26	
"      \"Return on Assets \": \"Low\","
27	
"      \"Equity\": \"Decreased previous year\","
28	
"      \"\": \"Increased from previous year\","
29	
"      \"Late Payment\": \"Low percentage of invoices late\","
30	
"      \"Auditor Status\": \"No adverse information reported\""
31	
"    }"
32	
" },"
33	
"  \"Processing\": {"
34	
"   30 Days Sales\": \"€361,566\","
35	
"    \"Annual CTO\": {"
36	
"      \"Current Year\": \"€69.00M\","
37	
"      \"Previous Year\": \"€220.44M\""
38	
"    },"
39	
"    \"Average Transaction Value\": \"€30.12\","
40	
"    \"Refund Percentage\": {"
41	
"      \"Current\": \"0.5%\","
42	
"      \"Previous Year\": \"0.23%\","
43	
"     30 Days Ratio\": \"1.76%\""
44	
"    },"
45	
"    \"Chargebacks\": {"
46	
"      \"Amount\": {"
47	
"        \"Current\": \"0.%\","
48	
"        \"Previous Year\": \"0.02%\","
49	
"        \"30 Days\": \"0%\""
50	
"      },"
51	
"      \"Count\": {"
52	
"        \"Current\": \"0%\","
53	
"        \"Previous Year\": \"0.0%\","
54	
"        \"30 Days\": \"0.0%\""
55	
"      }"
56	
"    },"
57	
"    \"Keyed vs. Chip Percentage\": \"12.52%\","
58	
"    \"Keyed vs. ECOM Percentage\": \"98%\""
59	
"  },"
60	
"  \"Exposure {"
61	
"    \"NDX Percentage\": 89,"
62	
"    \"NDX Days\": 15,"
63	
"    \"Current Risk\": {"
64	
"      \"Relationship Exposure\": \"€2,900\","
65	
"      \"Peak Risk\":€3,201,439\""
66	
"    },"
67	
"    \"NDX Exposure\": {"
68	
"      \"Current\": \"€0\","
69	
"      \"Peak\": \"€3,071,334\""
70	
"    },"
71	
"    \"Operating Exposure\": {"
72	
"      \"Current\": \"€2,900\","
73	
"      \"Peak\": \"€130,105\""
74	
"    },"
75	
"    \"Chargeback Exposure\": {"
76	
"      \"Current\": \"€86\","
77	
" \"Peak\": \"€6,858\""
78	
"    },"
79	
"    \"Refund Exposure\": {"
80	
"      \"Current\": \"€2,814\","
81	
"      \"Peak\": \"€123,247\""
82	
"    }"
83	
"  },"
84	
"  \"Financial Summary\": {"
85	
"    \"FYE 2023\": {"
86	
"      \"Operating Profit\": {"
87	
" \"Amount\": \"€27,700000\","
88	
"        \"Change\": \"154.13%\""
89	
"      },"
90	
"      \"Depreciation\": {"
91	
"        \"Amount\": \"€26,100,000\","
92	
"        \"Change\": \"-19.69%\""
93	
" },"
94	
"      \"Retained Profit\": {"
95	
"        \"Amount\": \"€-900,000\","
96	
"       Change\": \"-280.00%\""
97	
"      },"
98	
"      \"Total Fixed Assets\": {"
99	
"        \"Amount\": \"689,500,000\","
100	
"        \"Change\": \"-0.99%\""
101	
"      },"
102	
"      \"Cash\": {"
103	
"        \"Amount\": \"€12,200,000\","
104	
"        \"Change\": \"-13.48%\""
105	
"      },"
106	
"      \"Current Liabilities\": {"
107	
" \"Amount\": \"€64,900,000\","
108	
"        \"Change\": \"-1.52%\""
109	
"      },"
110	
"      \"Long-term Liabilities\": {"
111	
"        \"Amount\": \"226,400,000\","
112	
"       Change\": \"+1.03%\""
113	
"      },"
114	
"      \"Tangible Net Worth\": {"
115	
"        \"Amount\": \"€-31,800,000\","
116	
"        \"Change\": \"-7.07%\""
117	
"      },"
118	
"      \"Cash Flow\": {"
119	
"        \"Amount\": \"€20,700,000\","
120	
" \"Change\": \"+23.95%\""
121	
"      }"
122	
"    },"
123	
"    \"F 2022\": {"
124	
"      \"Operating Profit\": \"€10,900,000\""
125	
"    }"
126	
"  }"
127	
"}"
128	
"```"


which is not correct fromat
