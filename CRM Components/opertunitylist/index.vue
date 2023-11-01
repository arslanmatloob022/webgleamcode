<template>
  <section>
    <div class="opportunity-list">
      <h2>Opportunity List</h2>

      <!-- Filters -->
      <div class="filters">
        <label for="search">Search:</label>
        <input
          type="text"
          id="search"
          v-model="searchQuery"
          @input="applyFilters"
        />

        <label for="stage">Stage:</label>
        <select id="stage" v-model="selectedStage" @change="applyFilters">
          <option value="">All</option>
          <option v-for="stage in uniqueStages" :key="stage" :value="stage">
            {{ stage }}
          </option>
        </select>
      </div>

      <!-- Opportunity Table -->
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Stage</th>
            <th>Value</th>
            <th>Expected Close Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="opportunity in paginatedOpportunities"
            :key="opportunity.id"
          >
            <td>{{ opportunity.name }}</td>
            <td>{{ opportunity.stage }}</td>
            <td>{{ opportunity.value }}</td>
            <td>{{ opportunity.expectedCloseDate }}</td>
            <td>
              <button class="action-btn" @click="editOpportunity(opportunity)">
                Edit
              </button>
              <button
                class="action-btn"
                @click="deleteOpportunity(opportunity.id)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Pagination -->
      <div class="pagination">
        <button
          class="action-btn"
          @click="prevPage"
          :disabled="currentPage === 1"
        >
          Previous
        </button>
        <button
          class="action-btn"
          @click="nextPage"
          :disabled="currentPage === totalPages"
        >
          Next
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "OpertunityList",
  data() {
    return {
      opportunities: [
        {
          id: 1,
          name: "Opportunity 1",
          stage: "Prospecting",
          value: 10000,
          expectedCloseDate: "2023-10-15",
        },
        {
          id: 2,
          name: "Opportunity 2",
          stage: "Qualification",
          value: 5000,
          expectedCloseDate: "2023-11-20",
        },
        {
          id: 3,
          name: "Opportunity 3",
          stage: "Qualification",
          value: 5000,
          expectedCloseDate: "2023-11-20",
        },
        {
          id: 4,
          name: "Opportunity 4",
          stage: "Qualification",
          value: 5000,
          expectedCloseDate: "2023-11-20",
        },
        {
          id: 5,
          name: "Opportunity 5",
          stage: "Qualification",
          value: 5000,
          expectedCloseDate: "2023-11-20",
        },
        {
          id: 6,
          name: "Opportunity 6",
          stage: "Qualification",
          value: 5000,
          expectedCloseDate: "2023-11-20",
        },
        // Add more opportunities
      ],
      searchQuery: "",
      selectedStage: "",
      itemsPerPage: 3,
      currentPage: 1,
    };
  },
  computed: {
    filteredOpportunities() {
      let filtered = [...this.opportunities];

      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(
          (opportunity) =>
            opportunity.name.toLowerCase().includes(query) ||
            opportunity.stage.toLowerCase().includes(query)
        );
      }

      if (this.selectedStage) {
        filtered = filtered.filter(
          (opportunity) => opportunity.stage === this.selectedStage
        );
      }

      return filtered;
    },
    paginatedOpportunities() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredOpportunities.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredOpportunities.length / this.itemsPerPage);
    },
    uniqueStages() {
      const stages = new Set(
        this.opportunities.map((opportunity) => opportunity.stage)
      );
      return Array.from(stages);
    },
  },
  methods: {
    editOpportunity(opportunity) {
      // Implement edit functionality
      window.alert("Editing opportunity:", opportunity);
    },
    deleteOpportunity(opportunityId) {
      // Implement delete functionality
      window.alert("Deleting opportunity with ID:", opportunityId);
    },
    applyFilters() {
      this.currentPage = 1;
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
  },
};
</script>

<style scoped>
.opportunity-list {
  padding: 20px;
}

.filters {
  margin-bottom: 20px;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.table th {
  background-color: #f2f2f2;
}

.pagination {
  margin-top: 20px;
  text-align: center;
}

.pagination button {
  margin: 0 5px;
}

.main {
  margin: 0;
  display: flex;
  width: 100%;
  padding: 20px 10px;
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
.search-filter {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.modal {
  background-color: #443f3fd8;
  border-radius: 6px;
  position: absolute;
  z-index: 1000;
  padding: 20px;
  width: 60%;
  top: 10%;
  left: 20%;
  color: white;
}
.modal input {
  margin: 14px;
  width: 60%;
  padding: 5px;
  border-radius: 6px;
}

.modal select {
  border-radius: 6px;
  width: 57%;
  margin: 14px;
  padding: 5px;
}
.modal .btn {
  padding: 6px 8px;
  margin: 0px 10px;
}
.action-btn {
  background-color: rgb(233, 86, 33);
  padding: 4px 6px;
  border-radius: 4px;
  border: none;
  color: #fff;
  cursor: pointer;
}
* {
  margin: 0;
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

@media screen and (max-width: 670px) {
  .opportunity-list {
    padding: 20px;
  }

  .table {
    margin: 0;
    width: 100%;
    border-collapse: collapse;
  }

  .table th,
  .table td {
    font-size: 10px;
    border: 1px solid #ddd;
    padding: 2px;
    text-align: left;
  }

  .main {
    margin: 0;
    width: 100%;
  }
  .container {
    width: 100%;
    z-index: 0;
    margin: 0;
    padding: 0;
  }
  .code-container {
    width: 100%;
  }
  h2 {
    margin: 10px;
    font-size: 20px;
  }
  textarea {
    width: 100%;
  }
  #copycode {
    margin: 0;
    padding: 2px 4px;
  }
  .modal {
    padding: 00px;
    width: 100%;
  }
  .modal input {
    width: 100%;
  }

  .modal select {
    width: 100%;
  }
  .modal .btn {
    padding: 4px 6px;
  }
  .action-btn {
    padding: 2px 4px;
  }
}
</style>
