JSON parsing error with delimiters: SyntaxError: Expected ',' or ']' after array element in JSON at position 511 (line 21 column 6)
    at JSON.parse (<anonymous>)
    at handleChatbotResponse ((index):453:27)
    at (index):428:11

Raw Response: ```json
{
  "chart": "bar",
  "data": {
    "labels": ["FYE 2023", "FYE 2022"],
    "datasets": [
      {
        "label": "Operating Profit",
        "data": [27700000, 10900000],
        "backgroundColor": "rgba(75, 192, 192, 0.6)"
      },
      {
        "label": "Depreciation",
        "data": [26100000, 32500000],
 "backgroundColor": "rgba(255, 99, 132, 0.6)"
      },
      {
        "label": "Cash Flow",
        "data": [20700000, 16700000],
        "backgroundColor": "rgba(54, 162, 235, 0.6)"
      }
     }
}
```
