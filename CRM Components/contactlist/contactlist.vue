<template>
  <section>
    <div class="container">
      <h2>Contacts</h2>
      <div class="search-filter">
        <input
          id="inputsearch"
          type="text"
          v-model="searchTerm"
          placeholder="Search..."
        />
        <select id="input-name" v-model="selectedCategory">
          <option value="all">All</option>
          <option value="family">Family</option>
          <option value="friends">Friends</option>
          <option value="colleagues">Colleagues</option>
        </select>
      </div>
      <ul id="contact-list">
        <li
          v-for="contact in filteredContacts"
          :key="contact.id"
          class="contact"
        >
          <div>
            <strong>{{ contact.name }}</strong
            ><br />
            <span>Email: {{ contact.email }}</span>
          </div>
          <div class="contact-actions">
            <button class="btn" @click="editContact(contact)">Edit</button>
            <button class="btn" @click="deleteContact(contact.id)">
              Delete
            </button>
          </div>
        </li>
      </ul>
      <div v-if="isEditing" class="show">
        <div class="modal-content">
          <h2>Edit Contact</h2>
          <form @submit.prevent="updateContact">
            <div class="form-group">
              <label for="editName">Name</label>
              <input
                type="text"
                id="editName"
                v-model="editedContact.name"
                required
              />
            </div>
            <div class="form-group">
              <label for="editEmail">Email</label>
              <input
                type="email"
                id="editEmail"
                v-model="editedContact.email"
                required
              />
            </div>
            <div class="form-group">
              <label for="editCategory">Category</label>
              <select
                id="editCategory"
                v-model="editedContact.category"
                required
              >
                <option value="family">Family</option>
                <option value="friends">Friends</option>
                <option value="colleagues">Colleagues</option>
              </select>
            </div>
            <button class="btn" type="submit">Save Changes</button>
            <button class="btn" @click="cancelEdit()">Cancel</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: "",
      selectedCategory: "all",
      isEditing: false,
      editedContact: { id: null, name: "", email: "", category: "" },
      contacts: [
        {
          id: 2,
          name: "Jane Smith",
          email: "jane@example.com",
          category: "friends",
        },
        {
          id: 3,
          name: "Bob Johnson",
          email: "bob@example.com",
          category: "colleagues",
        },
        {
          id: 4,
          name: "Ed Shareen",
          email: "edshareen@example.com",
          category: "family",
        },
        {
          id: 5,
          name: "Alfa Tred",
          email: "alfatred@example.com",
          category: "friends",
        },
        // Add more contacts as needed
      ],
    };
  },
  computed: {
    filteredContacts() {
      const searchTerm = this.searchTerm.toLowerCase();
      const selectedCategory = this.selectedCategory;

      return this.contacts.filter((contact) => {
        if (
          selectedCategory === "all" ||
          contact.category === selectedCategory
        ) {
          return contact.name.toLowerCase().includes(searchTerm);
        }
        return false;
      });
    },
  },
  methods: {
    editContact(contact) {
      this.isEditing = true;
      console.log("preser");
      this.editedContact = { ...contact };
    },
    updateContact() {
      // Update the contact in the contacts array
      const index = this.contacts.findIndex(
        (contact) => contact.id === this.editedContact.id
      );
      if (index !== -1) {
        this.contacts[index] = { ...this.editedContact };
      }
      this.cancelEdit();
    },
    cancelEdit() {
      this.isEditing = false;
      this.editedContact = { id: null, name: "", email: "", category: "" };
    },
    deleteContact(contactId) {
      // Delete the contact from the contacts array
      const index = this.contacts.findIndex(
        (contact) => contact.id === contactId
      );
      if (index !== -1) {
        this.contacts.splice(index, 1);
      }
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  padding: 10px;
}

#contact-list {
  margin-top: 20px;
}

.contact {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.contact:last-child {
  border-bottom: none;
}

.contact-actions {
  display: flex;
  gap: 10px;
}

.btn {
  padding: 5px 10px;
  background-color: rgb(233, 86, 33);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

input[type="text"] {
  width: 100%;
  padding: 5px;
}

select {
  padding: 5px;
}

.search-filter {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.show {
  position: absolute;
  z-index: 1000;
  width: 80%;
  top: 15%;
  left: 10%;
}
.show .modal-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  width: 100%;
  position: absolute;
  background-color: #f2f2f2;
}
.modal-content form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.form-group {
  width: 80%;
  display: flex;
  justify-content: space-between;
}
.form-group input {
  width: 80%;
}
.form-group select {
  width: 80%;
}
</style>
