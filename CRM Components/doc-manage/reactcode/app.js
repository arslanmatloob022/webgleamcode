import React, { useState } from 'react';
import './DocumentManagement.css';

const DocumentManagement = () => {
  const [documents, setDocuments] = useState([]);

  const uploadFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const documentId = Date.now();
      setDocuments([...documents, { id: documentId, name: file.name, url: null }]);
      e.target.value = null;
    }
  };

  const deleteDocument = (documentId) => {
    const updatedDocuments = documents.filter((document) => document.id !== documentId);
    setDocuments(updatedDocuments);
  };

  return (
    <section>
      <div className="document-management">
        <h2>Document Management</h2>

        <div className="file-upload">
          <input type="file" id="fileinput" onChange={uploadFile} />
          <button onClick={() => document.getElementById('fileinput').value = ''}>Clear</button>
        </div>

        <div className="document-list">
          {documents.map((document) => (
            <div key={document.id} className="document">
              <a href={document.url} target="_blank" rel="noopener noreferrer">
                {document.name}
              </a>
              <button onClick={() => deleteDocument(document.id)}>Delete</button>
              <button>Share</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentManagement;
