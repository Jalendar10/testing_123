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
