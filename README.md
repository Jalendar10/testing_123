Raw Response: {
  "chart": "bar",
  "data": {
    "categories": ["FYE 2022", "FYE 2023"],
    "values": [10.9, 27.7],
    "label": "Operating Profit (€ Millions)"
  }
}


and in the recommendations
I want use the 
      const regex = /```json\s*([\s\S]*?)\s*```/;
      const match = response.match(regex);
and I want to display ythe tag elemnt
category is tag, comments are data

current display format

but I need Financial Health and total data to in details
Performance Metrics tota data in detils .........
Suggest Comments
Category	Details
```json	undefined
{	undefined
"Financial Health"	{
"Established Year"	1929,
"Company Registration No"	"00241882",
"Onboarded Year"	2014,
"CreditSafe Score 68,	undefined
"Net Working Capital"	"Negative",
"Revenue Change"	"Increased",
"Equity Change"	"Decreased",
"Late Payments"	"Low percentage of invoices late",
"Operational Metrics"	{
"Operating Profit"	"€27,700,000 (154.% increase)",
"Depreciation"	"€26,100, (-19.69% decrease)",
"Retained Profit"	"€-900,000 (-280.00 decrease)",
"Total Fixed Assets "€689,500000 (-0.99% decrease)",	undefined
"Cash"	"€12,200,000 (-13.48% decrease)",
"Current Liabilities "€64,900,000 (-1.52% decrease)",	undefined
"Long-term Liabilities"	"226,400,000 (+1.03% increase)",
"Tangible Net Worth"	"€-31,800,000 (-707% decrease)",
"Cash Flow"	€20,700, (+23.95% increase)"
}	undefined
},	undefined
"Performance Metrics"	{
"30 Days Sales"	"€361,566",
"Annual CTO"	"69M",
"ATV"	"€30.12",
"Refunds Rate"	"0.5%",
"Chargebacks Amount"	"0.03%",
"Chargebacks Count"	"0%"
},	undefined
"Credit Risk"	{
"CreditSafe Note"	"Low Risk with high asset cover",
"Negative Working Capital"	true,
"Late Payments"	"Minimal"
},	undefined
"Exposure"	{
"Current Relationship Exposure"	"€2,900",
"Peak Relationship Exposure"	"€3,,439",
"Current NDX Exposure"	"€0",
"Peak NDX Exposure"	"€3,071,334",
"Chargeback Exposure Current"	"€86",
"Chargeback Exposure Peak"	"€6,858",
"Refund Exposure Current"	"€2,814",
"Refund Exposure Peak"	"€123,247"
},	undefined
"Operational Metrics"	{
"NDX Percentage 89,	undefined
"NDX Days"	15
},	undefined
"Variable Metrics"	{
"Refunds Rate"	"Current 0.5%, PY 0.23%,30 Days 1.76%",
"Chargebacks Amount"	"Current 0.03%, PY 0.02%, 30 Days 0%",
"Chargebacks Count "Current 0.0%, PY 0.0%, 30 Days 0.0%"	undefined
}	undefined
}	undefined
```



