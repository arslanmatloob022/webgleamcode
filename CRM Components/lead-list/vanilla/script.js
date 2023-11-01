document.addEventListener('DOMContentLoaded', () => {
  // Lead data
  let leads = [
    // Lead data
  ];

  const renderLeads = (leads) => {
    const leadList = document.querySelector('.lead-list');
    leadList.innerHTML = '';

    leads.forEach((lead) => {
      const leadItem = document.createElement('div');
      leadItem.className = 'lead-item';
      leadItem.innerHTML = `
        <div class="lead-info">
          <p class="lead-name">${lead.name}</p>
          <p class="lead-email">${lead.email}</p>
          <p class="lead-status">${lead.status}</p>
        </div>
        <div class="lead-actions">
          ${lead.status === 'new' ? `<button class="action-btn" onclick="convertToOpportunity(${lead.id})">Convert</button>` : ''}
          <button class="action-btn" onclick="editLead(${lead.id})">Edit</button>
          <button class="action-btn" onclick="deleteLead(${lead.id})">Delete</button>
        </div>
      `;

      leadList.appendChild(leadItem);
    });
  };

  renderLeads(leads);

  // Event handlers
  window.convertToOpportunity = (id) => {
    const lead = leads.find((lead) => lead.id === id);
    if (lead) {
      lead.status = 'converted';
      renderLeads(leads);
    }
  };

  window.editLead = (id) => {
    const lead = leads.find((lead) => lead.id === id);
    if (lead) {
      // Implement edit functionality here
    }
  };

  window.deleteLead = (id) => {
    leads = leads.filter((lead) => lead.id !== id);
    renderLeads(leads);
  };
});
