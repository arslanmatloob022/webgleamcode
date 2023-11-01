document.addEventListener('DOMContentLoaded', () => {
  const fileInput = document.getElementById('fileInput');
  const clearButton = document.getElementById('clearButton');
  const documentList = document.getElementById('documentList');

  clearButton.addEventListener('click', () => {
    fileInput.value = '';
  });

  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (file) {
      const documentId = Date.now();
      const documentItem = document.createElement('div');
      documentItem.className = 'document';
      documentItem.innerHTML = `
        <a href="#" target="_blank">${file.name}</a>
        <button class="deleteButton">Delete</button>
        <button class="shareButton">Share</button>
      `;

      const deleteButton = documentItem.querySelector('.deleteButton');
      deleteButton.addEventListener('click', () => {
        documentItem.remove();
      });

      documentList.appendChild(documentItem);
    }
  });
});
