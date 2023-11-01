<template>
  <section>
    <div class="container">
      <div class="task-management">
        <h2>Task and Activity Management</h2>

        <!-- Task Creation -->
        <div class="task-creation">
          <h3>Create New Task</h3>
          <input
            type="text"
            v-model="newTask"
            @keyup.enter="addTask"
            placeholder="Enter a new task"
          />
        </div>

        <!-- Task List -->
        <div class="task-list">
          <h3>Task List</h3>
          <ul>
            <li v-for="task in tasks" :key="task.id">
              {{ task.text }}
              <button @click="deleteTask(task.id)">Delete</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TaskManagement",

  data() {
    return {
      tasks: [
        {
          id: 1,
          text: "Tasks will display here",
        },
      ],
      newTask: "",
      taskId: 1,
    };
  },
  methods: {
    addTask() {
      if (this.newTask) {
        this.tasks.push({ id: this.taskId++, text: this.newTask });
        this.newTask = "";
      }
    },
    deleteTask(taskId) {
      const index = this.tasks.findIndex((task) => task.id === taskId);
      if (index !== -1) {
        this.tasks.splice(index, 1);
      }
    },
  },
};
</script>
<style scoped>
.task-management {
  padding: 20px;
}

.task-creation input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
}

.task-list ul {
  list-style: none;
  padding: 0;
}

.task-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #ddd;
}

.task-list button {
  background-color: rgb(233, 86, 33);
  padding: 4px 6px;
  border-radius: 4px;
  border: none;
  color: #fff;
  cursor: pointer;
}
.main {
  margin: 0;
  display: flex;
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
* {
  margin: 0;
}
@media screen and (max-width: 768px) {
  .main {
    display: flex;
    flex-wrap: wrap;
  }
  .container {
    width: 100%;
  }
}
</style>