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

      if (data.recommendations && data.recommendations.length > 0) {
        const jsonString = data.recommendations.join('\n');
        try {
          const jsonData = JSON.parse(jsonString);
          console.log("Recommendations JSON:", jsonData);
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
