document.addEventListener("DOMContentLoaded", () => {
  const searchTermInput = document.getElementById("inputsearch");
  const categorySelect = document.getElementById("input-name");
  const contactList = document.getElementById("contact-list");
  const editForm = document.getElementById("editForm");
  const editModal = document.getElementById("editModal");
  const cancelBtn = document.getElementById("cancelBtn");

  let isEditing = false;
  let editedContact = { id: null, name: "", email: "", category: "" };
  let contacts = [
    { id: 2, name: "Jane Smith", email: "jane@example.com", category: "friends" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", category: "colleagues" },
    { id: 4, name: "Ed Shareen", email: "edshareen@example.com", category: "family" },
    { id: 5, name: "Alfa Tred", email: "alfatred@example.com", category: "friends" },
    // Add more contacts as needed
  ];

  function renderContacts() {
    contactList.innerHTML = "";
    contacts.forEach((contact) => {
      const listItem = document.createElement("li");
      listItem.className = "contact";
      listItem.innerHTML = `
        <div>
          <strong>${contact.name}</strong><br />
          <span>Email: ${contact.email}</span>
        </div>
        <div class="contact-actions">
          <button class="btn" data-id="${contact.id}">Edit</button>
          <button class="btn" data-id="${contact.id}">Delete</button>
        </div>
      `;
      contactList.appendChild(listItem);
    });

    const editButtons = document.querySelectorAll(".contact-actions button[data-id]");
    editButtons.forEach((button) => {
      button.addEventListener("click", handleEdit);
    });
  }

  function handleEdit(event) {
    const contactId = parseInt(event.target.dataset.id);
    const contactToEdit = contacts.find((contact) => contact.id === contactId);
    editedContact = { ...contactToEdit };
    isEditing = true;

    editModal.style.display = "block";
    document.getElementById("editName").value = editedContact.name;
    document.getElementById("editEmail").value = editedContact.email;
    document.getElementById("editCategory").value = editedContact.category;

    editForm.onsubmit = (e) => {
      e.preventDefault();
      const editedName = document.getElementById("editName").value;
      const editedEmail = document.getElementById("editEmail").value;
      const editedCategory = document.getElementById("editCategory").value;
      updateContact(contactId, editedName, editedEmail, editedCategory);
    };

    cancelBtn.onclick = () => {
      editModal.style.display = "none";
      isEditing = false;
      editedContact = { id: null, name: "", email: "", category: "" };
      editForm.reset();
    };
  }

  function updateContact(id, name, email, category) {
    contacts = contacts.map((contact) =>
      contact.id === id ? { id, name, email, category } : contact
    );
    renderContacts();
    editModal.style.display = "none";
    isEditing = false;
    editedContact = { id: null, name: "", email: "", category: "" };
    editForm.reset();
  }

  searchTermInput.addEventListener("input", renderContacts);
  categorySelect.addEventListener("change", renderContacts);
  renderContacts();
});
