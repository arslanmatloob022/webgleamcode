import React, { useState } from 'react';
import './LeadList.css';

const LeadList = () => {
  const [editingLead, setEditingLead] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [leads, setLeads] = useState([
    // Lead data
  ]);

  const filteredLeads = leads.filter((lead) => {
    const nameMatch = lead.name.toLowerCase().includes(searchQuery.toLowerCase());
    const emailMatch = lead.email.toLowerCase().includes(searchQuery.toLowerCase());
    const statusMatch = filterStatus === '' || lead.status === filterStatus;
    return nameMatch || emailMatch;
  });

  const convertToOpportunity = (lead) => {
    const updatedLeads = [...leads];
    const index = updatedLeads.findIndex((item) => item.id === lead.id);
    if (index !== -1) {
      updatedLeads[index] = { ...lead, status: 'converted' };
      setLeads(updatedLeads);
    }
  };

  const editLead = (lead) => {
    setEditingLead({ ...lead });
  };

  const saveEdit = () => {
    if (!editingLead) return;
    const updatedLeads = leads.map((lead) => (lead.id === editingLead.id ? { ...editingLead } : lead));
    setLeads(updatedLeads);
    setEditingLead(null);
  };

  const deleteLead = (lead) => {
    const updatedLeads = leads.filter((item) => item.id !== lead.id);
    setLeads(updatedLeads);
  };

  const cancelEdit = () => {
    setEditingLead(null);
  };

  return (
    <section className="lead-list">
      {/* ... (Rest of the JSX structure) */}
    </section>
  );
};

export default LeadList;
