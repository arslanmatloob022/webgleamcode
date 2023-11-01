document.addEventListener('DOMContentLoaded', () => {
  const opportunities = [
    // Opportunity data
  ];

  const app = document.getElementById('app');
  const itemsPerPage = 3;
  let currentPage = 1;

  function renderOpportunities() {
    const filteredOpportunities = opportunities.filter((opportunity) => {
      const nameMatch = opportunity.name.toLowerCase().includes(searchQuery.toLowerCase());
      const stageMatch = selectedStage === '' || opportunity.stage === selectedStage;
      return nameMatch && stageMatch;
    });

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedOpportunities = filteredOpportunities.slice(start, end);

    const opportunityList = document.createElement('div');
    opportunityList.className = 'opportunity-list';

    paginatedOpportunities.forEach((opportunity) => {
      const opportunityItem = document.createElement('div');
      opportunityItem.className = 'opportunity-item';

      opportunityItem.innerHTML = `
        <div>${opportunity.name}</div>
        <div>${opportunity.stage}</div>
        <div>${opportunity.value}</div>
        <div>${opportunity.expectedCloseDate}</div>
        <div>
          <button class="action-btn" onclick="editOpportunity(${opportunity.id})">Edit</button>
          <button class="action-btn" onclick="deleteOpportunity(${opportunity.id})">Delete</button>
        </div>
      `;

      opportunityList.appendChild(opportunityItem);
    });

    const paginationDiv = document.createElement('div');
    paginationDiv.className = 'pagination';

    const prevButton = document.createElement('button');
    prevButton.className = 'action-btn';
    prevButton.textContent = 'Previous';
    prevButton.disabled = currentPage === 1;
    prevButton.onclick = () => {
      if (currentPage > 1) {
        currentPage--;
        renderOpportunities();
      }
    };

    const nextButton = document.createElement('button');
    nextButton.className = 'action-btn';
    nextButton.textContent = 'Next';
    nextButton.disabled = currentPage === Math.ceil(filteredOpportunities.length / itemsPerPage);
    nextButton.onclick = () => {
      if (currentPage < Math.ceil(filteredOpportunities.length / itemsPerPage)) {
        currentPage++;
        renderOpportunities();
      }
    };

    paginationDiv.appendChild(prevButton);
    paginationDiv.appendChild(nextButton);

    app.innerHTML = '';
    app.appendChild(opportunityList);
    app.appendChild(paginationDiv);
  }

  function editOpportunity(id) {
    // Implement edit functionality
    window.alert('Editing opportunity with ID: ' + id);
  }

  function deleteOpportunity(id) {
    // Implement delete functionality
    window.alert('Deleting opportunity with ID: ' + id);
  }

  renderOpportunities();
});
