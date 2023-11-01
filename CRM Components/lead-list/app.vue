<template>
  <section>
    <div class="lead-list">
      <h2>Lead List</h2>

      <!-- Search and Filter Options -->
      <div class="search-filter">
        <input v-model="searchQuery" placeholder="Search by name..." />
        <select v-model="filterStatus">
          <option value="">All</option>
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="converted">Converted</option>
        </select>
      </div>

      <!-- Lead List -->
      <div class="lead-item" v-for="lead in filteredLeads" :key="lead.id">
        <div class="lead-info">
          <p class="lead-name">{{ lead.name }}</p>
          <p class="lead-email">{{ lead.email }}</p>
          <p class="lead-status">{{ lead.status }}</p>
        </div>
        <div class="lead-actions">
          <button
            class="action-btn"
            @click="convertToOpportunity(lead)"
            v-if="lead.status === 'new'"
          >
            Convert
          </button>
          <button class="action-btn" @click="editLead(lead)">Edit</button>
          <button class="action-btn" @click="deleteLead(lead)">Delete</button>
        </div>
      </div>
    </div>
    <div class="show" v-if="editingLead">
      <div class="show-content">
        <h3>Edit Lead</h3>
        <div class="form-group">
          <label>Name:</label>
          <input v-model="editingLead.name" />
        </div>

        <div class="form-group">
          <label>Email:</label>
          <input v-model="editingLead.email" />
        </div>

        <div class="form-group">
          <label>Status:</label>
          <select v-model="editingLead.status">
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="converted">Converted</option>
          </select>
        </div>

        <div class="buttons">
          <button class="action-btn" @click="saveEdit">Save</button>
          <button class="action-btn" @click="cancelEdit">Cancel</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      editingLead: false,
      searchQuery: "",
      filterStatus: "",
      leads: [
        {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          phone: "123-456-7890",
          status: "new",
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane@example.com",
          phone: "987-654-3210",
          status: "contacted",
        },
        // Add more lead data as needed
      ],
    };
  },
  computed: {
    filteredLeads() {
      let filtered = [...this.leads];

      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(
          (lead) =>
            lead.name.toLowerCase().includes(query) ||
            lead.email.toLowerCase().includes(query)
        );
      }
      if (this.filterStatus) {
        filtered = filtered.filter((lead) => lead.status === this.filterStatus);
      }
      return filtered;
    },
  },
  methods: {
    qualifyLead(lead) {
      lead.status = "qualified";
    },
    convertToOpportunity(lead) {
      lead.status = "converted";
    },
    editLead(lead) {
      this.editingLead = Object.assign({}, lead);
    },
    saveEdit() {
      const index = this.leads.findIndex(
        (lead) => lead.id === this.editingLead.id
      );
      if (index !== -1) {
        this.leads[index] = Object.assign({}, this.editingLead);
        this.editingLead = null;
      }
    },

    deleteLead(lead) {
      const index = this.leads.findIndex((item) => item.id === lead.id);
      if (index !== -1) {
        this.leads.splice(index, 1);
      }
    },
    cancelEdit() {
      this.editingLead = false;
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
.lead-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.search-filter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

input {
  flex-grow: 1;
  margin-right: 10px;
  padding: 5px;
}

select {
  width: 150px;
  padding: 5px;
}

.lead-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}

.lead-info {
  flex-grow: 1;
}

.lead-name {
  font-weight: bold;
}

.lead-actions button {
  margin-left: 10px;
  cursor: pointer;
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

.show {
  background-color: #443f3fd8;
  border-radius: 6px;
  position: absolute;
  top: 10%;
  left: 10%;
  width: 80%;
  z-index: 1000;
  padding: 20px;
  color: white;
}
.show-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.form-group {
  width: 100%;
}
.show input {
  margin: 14px;
  width: 80%;
  padding: 5px;
  border-radius: 6px;
}

.show select {
  border-radius: 6px;
  width: 80%;
  margin: 14px;
  padding: 5px;
}
.show .btn {
  padding: 6px 8px;
  margin: 0px 10px;
}
.buttons {
  display: flex;
  gap: 16px;
}
</style>
