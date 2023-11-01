import React, { useState } from 'react';
import './OpportunityList.css';

const OpportunityList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStage, setSelectedStage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const opportunities = [
    // Opportunity data
  ];

  const uniqueStages = [...new Set(opportunities.map((opportunity) => opportunity.stage))];

  const filteredOpportunities = opportunities.filter((opportunity) => {
    const nameMatch = opportunity.name.toLowerCase().includes(searchQuery.toLowerCase());
    const stageMatch = selectedStage === '' || opportunity.stage === selectedStage;
    return nameMatch && stageMatch;
  });

  const totalPages = Math.ceil(filteredOpportunities.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedOpportunities = filteredOpportunities.slice(start, end);

  const editOpportunity = (opportunity) => {
    // Implement edit functionality
    window.alert('Editing opportunity:', opportunity);
  };

  const deleteOpportunity = (opportunityId) => {
    // Implement delete functionality
    window.alert('Deleting opportunity with ID:', opportunityId);
  };

  const applyFilters = () => {
    setCurrentPage(1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section className="opportunity-list">
      {/* ... (Rest of the JSX structure) */}
    </section>
  );
};

export default OpportunityList;
