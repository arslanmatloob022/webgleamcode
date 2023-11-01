import React, { useState } from "react";
import "./ContactManagement.css";

const ContactManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isEditing, setIsEditing] = useState(false);
  const [editedContact, setEditedContact] = useState({
    id: null,
    name: "",
    email: "",
    category: "",
  });

  const contactsData = [
    { id: 2, name: "Jane Smith", email: "jane@example.com", category: "friends" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", category: "colleagues" },
    { id: 4, name: "Ed Shareen", email: "edshareen@example.com", category: "family" },
    { id: 5, name: "Alfa Tred", email: "alfatred@example.com", category: "friends" },
    // Add more contacts as needed
  ];

  const [contacts, setContacts] = useState(contactsData);

  const filteredContacts = contacts.filter((contact) => {
    if (selectedCategory === "all" || contact.category === selectedCategory) {
      return contact.name.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return false;
  });

  const editContact = (contact) => {
    setIsEditing(true);
    setEditedContact({ ...contact });
  };

  const updateContact = () => {
    // Update the contact in the contacts array
    const updatedContacts = contacts.map((contact) =>
      contact.id === editedContact.id ? { ...editedContact } : contact
    );
    setContacts(updatedContacts);
    cancelEdit();
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setEditedContact({ id: null, name: "", email: "", category: "" });
  };

  const deleteContact = (contactId) => {
    // Delete the contact from the contacts array
    const updatedContacts = contacts.filter((contact) => contact.id !== contactId);
    setContacts(updatedContacts);
  };

  return (
    <section>
      <div className="container">
        <h2>Contacts</h2>
        <div className="search-filter">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
          />
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="all">All</option>
            <option value="family">Family</option>
            <option value="friends">Friends</option>
            <option value="colleagues">Colleagues</option>
          </select>
        </div>
        <ul id="contact-list">
          {filteredContacts.map((contact) => (
            <li key={contact.id} className="contact">
              <div>
                <strong>{contact.name}</strong>
                <br />
                <span>Email: {contact.email}</span>
              </div>
              <div className="contact-actions">
                <button className="btn" onClick={() => editContact(contact)}>
                  Edit
                </button>
                <button className="btn" onClick={() => deleteContact(contact.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
        {isEditing && (
          <div className="show">
            <div className="modal-content">
              <h2>Edit Contact</h2>
              <form onSubmit={updateContact}>
                <div className="form-group">
                  <label htmlFor="editName">Name</label>
                  <input
                    type="text"
                    id="editName"
                    value={editedContact.name}
                    onChange={(e) => setEditedContact({ ...editedContact, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="editEmail">Email</label>
                  <input
                    type="email"
                    id="editEmail"
                    value={editedContact.email}
                    onChange={(e) => setEditedContact({ ...editedContact, email: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="editCategory">Category</label>
                  <select
                    id="editCategory"
                    value={editedContact.category}
                    onChange={(e) => setEditedContact({ ...editedContact, category: e.target.value })}
                    required
                  >
                    <option value="family">Family</option>
                    <option value="friends">Friends</option>
                    <option value="colleagues">Colleagues</option>
                  </select>
                </div>
                <button className="btn" type="submit">Save Changes</button>
                <button className="btn" onClick={cancelEdit}>Cancel</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactManagement;
