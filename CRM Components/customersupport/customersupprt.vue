<template>
  <section>
    <div class="customer-support">
      <h2>Customer Support Interface</h2>

      <!-- List of Support Tickets -->
      <div class="support-tickets">
        <div v-for="ticket in supportTickets" :key="ticket.id" class="ticket">
          <h2>{{ ticket.subject }}</h2>
          <p>{{ ticket.description }}</p>
          <button class="action-btns" @click="respondToTicket(ticket)">
            Respond
          </button>
        </div>
      </div>

      <!-- Ticket Response Form -->
      <div v-if="selectedTicket" class="response-form">
        <h3>Respond to Ticket</h3>
        <textarea
          v-model="responseText"
          placeholder="Enter your response"
        ></textarea>
        <button class="action-btns" @click="sendResponse">Send Response</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      supportTickets: [
        {
          id: 1,
          subject: "Issue with Product Delivery",
          description: "My order has not been delivered. Please help.",
        },
        {
          id: 2,
          subject: "Account Access Problem",
          description: "I can't log in to my account. What should I do?",
        },
        // Add more support tickets as needed
      ],
      selectedTicket: null,
      responseText: "",
    };
  },
  methods: {
    respondToTicket(ticket) {
      // Set the selected ticket for response
      this.selectedTicket = ticket;
    },
    sendResponse() {
      // Logic to send a response to the selected ticket
      if (this.selectedTicket && this.responseText) {
        // Implement your response handling code here
        console.log(
          `Responding to Ticket ${this.selectedTicket.id}: ${this.responseText}`
        );

        // Clear the response form
        this.selectedTicket = null;
        this.responseText = "";
      }
    },
  },
};
</script>

<style scoped>
.customer-support {
  margin: 20px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  text-align: center;
}

.support-tickets {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.ticket {
  margin: 10px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: left;
}

.response-form {
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: left;
}

textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  resize: vertical;
}

.action-btns {
  margin-top: 6px;
  padding: 6px 8px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.action-btns:hover {
  background-color: #0056b3;
}
.main {
  margin: 0;
  display: flex;
  padding: 20px 10px;
  width: 100%;
  gap: 10px;
  box-shadow: 0px 0px 10px #333;
}
.container {
  width: 100%;
  z-index: 0;
  margin: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  padding: 10px;
}
.action-btn {
  background-color: rgb(233, 86, 33);
  padding: 4px 6px;
  border-radius: 4px;
  border: none;
  color: #fff;
  cursor: pointer;
}
.code-container {
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  padding: 10px;
  width: 50%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  margin: 10px;
  background-color: #ffffff;
}
h2 {
  font-size: 24px;
  margin: 10px;
}
textarea {
  font-family: monospace;
  padding: 10px;
  border-radius: 6px;
  width: 95%;
}
#copycode {
  margin: 10px;
  padding: 6px 4px;
  width: 80px;
  height: 40px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  box-shadow: 0px 0px 3px #afafaf;
}
#copycode:hover {
  transform: scale(1.07);
  box-shadow: 0px 0px 5px #afafaf;
}
@media screen and (max-width: 760px) {
  .main {
    display: flex;
    flex-wrap: wrap;
  }
  .container {
    width: 100%;
  }
  .code-container {
    width: 100%;
  }
}
* {
  margin: 0;
}
</style>
