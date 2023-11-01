import React, { useState } from 'react';
import './App.css';

const SupportTicket = ({ ticket, onRespond }) => {
  return (
    <div className="ticket">
      <h2>{ticket.subject}</h2>
      <p>{ticket.description}</p>
      <button className="action-btns" onClick={() => onRespond(ticket)}>
        Respond
      </button>
    </div>
  );
};

const ResponseForm = ({ selectedTicket, onSendResponse, onResponseTextChange }) => {
  return (
    <div className="response-form">
      <h3>Respond to Ticket</h3>
      <textarea
        value={selectedTicket ? selectedTicket.responseText : ''}
        onChange={(e) => onResponseTextChange(e.target.value)}
        placeholder="Enter your response"
      ></textarea>
      <button className="action-btns" onClick={onSendResponse}>
        Send Response
      </button>
    </div>
  );
};

const CustomerSupport = () => {
  const [supportTickets, setSupportTickets] = useState([
    {
      id: 1,
      subject: 'Issue with Product Delivery',
      description: 'My order has not been delivered. Please help.',
    },
    {
      id: 2,
      subject: 'Account Access Problem',
      description: "I can't log in to my account. What should I do?",
    },
    // Add more support tickets as needed
  ]);

  const [selectedTicket, setSelectedTicket] = useState(null);
  const [responseText, setResponseText] = useState('');

  const respondToTicket = (ticket) => {
    setSelectedTicket({ ...ticket, responseText: '' });
  };

  const sendResponse = () => {
    if (selectedTicket && responseText) {
      // Implement your response handling code here
      console.log(`Responding to Ticket ${selectedTicket.id}: ${responseText}`);

      // Clear the response form
      setSelectedTicket(null);
      setResponseText('');
    }
  };

  return (
    <section className="main">
      <div className="container">
        <div className="customer-support">
          <h2>Customer Support Interface</h2>
          <div className="support-tickets">
            {supportTickets.map((ticket) => (
              <SupportTicket key={ticket.id} ticket={ticket} onRespond={respondToTicket} />
            ))}
          </div>
          {selectedTicket && (
            <ResponseForm
              selectedTicket={selectedTicket}
              onSendResponse={sendResponse}
              onResponseTextChange={setResponseText}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default CustomerSupport;
