document.addEventListener('DOMContentLoaded', function () {
    const supportTicketsContainer = document.getElementById('supportTickets');
    const responseFormContainer = document.getElementById('responseForm');

    const supportTickets = [
        {
            id: 1,
            subject: 'Issue with Product Delivery',
            description: 'My order has not been delivered. Please help.'
        },
        {
            id: 2,
            subject: 'Account Access Problem',
            description: "I can't log in to my account. What should I do?"
        }
        // Add more support tickets as needed
    ];

    function renderSupportTickets() {
        supportTicketsContainer.innerHTML = '';
        supportTickets.forEach(ticket => {
            const ticketDiv = document.createElement('div');
            ticketDiv.className = 'ticket';
            ticketDiv.innerHTML = `
                <h2>${ticket.subject}</h2>
                <p>${ticket.description}</p>
                <button class="action-btns" data-ticket-id="${ticket.id}">Respond</button>
            `;
            ticketDiv.querySelector('button').addEventListener('click', () => {
                respondToTicket(ticket);
            });
            supportTicketsContainer.appendChild(ticketDiv);
        });
    }

    function respondToTicket(ticket) {
        const responseForm = document.createElement('div');
        responseForm.className = 'response-form';
        responseForm.innerHTML = `
            <h3>Respond to Ticket</h3>
            <textarea id="responseText" placeholder="Enter your response"></textarea>
            <button class="action-btns" id="sendResponse">Send Response</button>
        `;

        responseForm.querySelector('#sendResponse').addEventListener('click', () => {
            const responseText = document.getElementById('responseText').value;
            if (responseText) {
                // Implement your response handling code here
                console.log(`Responding to Ticket ${ticket.id}: ${responseText}`);

                // Clear the response form and selected ticket
                responseFormContainer.innerHTML = '';
            }
        });

        responseFormContainer.innerHTML = '';
        responseFormContainer.appendChild(responseForm);
    }

    // Initial rendering of support tickets
    renderSupportTickets();
});
