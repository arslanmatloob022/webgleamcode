<template>
  <section>
    <div class="document-management">
      <h2>Document Management</h2>

      <!-- File Upload -->
      <div class="file-upload">
        <input
          id="fileinput"
          type="file"
          ref="fileInput"
          @change="uploadFile"
        />
        <button @click="clearFileInput">Clear</button>
      </div>

      <!-- List of Uploaded Documents -->
      <div class="document-list">
        <div v-for="document in documents" :key="document.id" class="document">
          <a :href="document.url" target="_blank">{{ document.name }}</a>
          <button @click="deleteDocument(document.id)">Delete</button>
          <button>Share</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      documents: [],
    };
  },
  methods: {
    uploadFile() {
      // get seleted file from input
      const file = this.$refs.fileInput.files[0];

      if (file) {
        // create unique id
        const documentId = Date.now();

        this.documents.push({
          id: documentId,
          name: file.name,
          url: null,
        });
        this.clearFileInput();
      }
    },

    clearFileInput() {
      this.$refs.fileInput.value = "";
    },
    deleteDocument(documentId) {
      this.document = this.documents.splice(
        (document) => document.id === documentId,
        1
      );
    },
  },
};
</script>
<style scoped>
.document-management {
  margin: 20px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  text-align: center;
}

.file-upload {
  margin: 20px;
  gap: 10px;
}

.file-upload input[type="file"] {
  background-color: #007bff;
  padding: 7px 4px;
  border-radius: 6px;
}

.file-upload button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.document-list {
  margin: 20px;
}

.document {
  margin: 10px;
}

.document a {
  text-decoration: none;
  color: #007bff;
}

.document button {
  margin-left: 10px;
  padding: 5px 10px;
  background-color: #ff0000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.document button:hover {
  background-color: #cc0000;
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
  .document-management {
    margin: 0;
    padding: 20px;
  }

  .file-upload {
    margin: 0;
    gap: 10px;
  }

  .file-upload input[type="file"] {
    padding: 2px 4px;
  }

  .file-upload button {
    padding: 4px 8px;
    background-color: #007bff;
  }

  .document-list {
    margin-top: 10px;
  }

  .document button {
    margin-left: 10px;
    padding: 4px 6px;
  }

  .main {
    margin: 0;
    width: 100%;
    padding: 20px 10px;
  }

  .container {
    width: 100%;
    z-index: 0;
    margin: 0;
  }
  .code-container {
    width: 100%;
    margin: 0;
  }
  h2 {
    font-size: 16px;
    margin: 10px;
  }
  textarea {
    width: 100%;
  }
  #copycode {
    margin: 10px;
    padding: 2px 4px;
  }
  #copycode:hover {
    transform: scale(1.07);
    box-shadow: 0px 0px 5px #afafaf;
  }
}
</style>
