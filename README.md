{
    "recommendations": [
        "```json",
        "{",
        "  \"Financial Health\": {",
        "    \"Established Year\": 1929,",
        "    \"Company Registration No\": \"00241882\",",
        "    \"Onboarded Year\": 201,",
        "    \"Website\": \"www.fullers.co.uk\",",
        "    \"CreditSafe Score\": 68,",
        "    \"CreditSafe Commentary\": {",
        "      \" Coverage\": \"High\",",
        "      \"Net Working Capital Position\": \"Negative\",",
        "      \"Return on Assets\": \"Low\",",
        "      \"Equity Change \"Decreased\",",
        "      \"Revenue Change\": \"Increased\",",
        "      \"Late Payment Ratio\": \"Low percentage      \"Auditor Comments\":No adverse information reported\"",
        "    }",
        "  },",
        "  \"Performance Metrics\": {",
        "    \"Operating Profit\": {",
        "      \"FYE 2023\": \"€27700,000\",",
        "      \"Growth\": \"154.13%\"",
        "    },",
        "    \"Depreciation\": {",
        "      \"FYE 2023 \"€26,100000\",",
        "      \"Change\": \"-19.69%\"",
        "    },",
        "    \"Retained Profit\": {",
        "      \"FYE 2023\": \"€-900,000\",",
        "      \"Change\": \"-280.00%\"",
        "       \"Total Fixed Assets\":      \"FYE 2023\": \"€689,500,000\",",
        "      \"Change\": \"-099%\"",
        "    },",
        "    \"\": {",
        "      \"FYE2023\": \"€12,200,000\",",
        "      \"Change\": \"-13.48%\"",
        "    },",
        "    \"Current Liabilities\": {",
        "      \"FYE 2023\": \"64,900,000\",",
        "     Change\": \"-1.52%\"",
        "    },",
        "    \"Long-term Liabilities\": {",
        "      \"FYE 2023\": \"€226,400,000\",",
        "      \"Change\": \"+1.03%\"",
        "    },",
        "    \"T Net Worth\": {",
        "      \"FYE 2023\": \"€31,800,000\",",
        "      \"Change\": \"-7.07%\"",
        "    },",
        "    \"Cash Flow\": {",
        "      \"FYE 2023\": \"€20,700,000      \"Growth\": \"+23.95%\"",
        "    },",
        "    \"Sales Metrics {",
        "      \"30-Days Sales\": \"€361,566\",",
        "      \"Annual CTO\": \"6900M\",",
        "      \"Average Transaction\": \"€30.12\"",
        "    }",
        "  },",
        "  \"Credit Risk\": {",
        "    \"Assessment\": \"Low Risk\",",
        "    \"Negative Working Capital\": true,",
        "    \"Late Payments\": \"Minimal\"",
        "   \"Exposure\": {",
        "    \"Current Relationship Exposure\": \"€2,900\",",
        "    \"Peak Relationship Exposure\": \"€3,201,439\",",
        "    \"Current NDX Exposure\": \"€0\",",
        "    \"Peak NDX Exposure\": \"€3,071,334\",",
        "    \"Operating Exposure\": \"€2,900\",",
        "   Chargeback Exposure\": {",
        "     Current\": \"€86\",",
        "      \"Peak\": \"€6,858\"",
        "    },",
        "    \"Refund Exposure\": {",
        "      \"Current\": \"€2,814\",",
        "      \"Peak\": \"€123,247\"",
        "    }",
        "  },",
        "  \"Operational Metrics\": {",
        "    \"NDX Percentage\": 89,",
        "    \"NDX Days\": 15",
        "  },",
        " \"Variable Metrics\": {",
        "    \"Refund Rate\": {",
        "      \"Current\": \"0.5%\",",
        "      \"Previous Year\": \"0.23%\",",
        "      \"30 Days Ratio\": \"1.%\"",
        "    },",
        "    \"Chargebacks\": {",
        "      \"Amount Current\":0.03%\",",
        "      \"Previous Year\": \"0.02%\",",
        "      \"Count Current\": \"0%\",",
        "      \"Previous Year\": \"0.0%\"",
        "    },",
        "    \" Ratios\": {",
        "      \"ed vs. Chip Percentage\": \"12.52%\",",
        "      \"Keyed vs. ECOM Percentage\": \"98%\"",
        "    }",
        "  }",
        "}",
        "```"
    ]
}




I am getting response likethis




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

error:
(index):679 
 Error fetching recommendations: TypeError: Cannot read properties of undefined (reading 'match')
    at (index):653:39
