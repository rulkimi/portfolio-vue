<template>
  <div class="todo__container">
    <div class="todo-input-grid">
      <input placeholder="Todo name" class="name-input" v-model="todoInput">
      <input type="date" class="due-date-input" v-model="todoDateInput">
      <button class="add-todo-button" @click="addTodo">Add</button>
    </div>
    <div class="todo-grid">
      <template v-for="(list, index) in todoList" :key="index">
        <div>{{ list.title }}</div>
        <div>{{ list.dueDate }}</div>
        <button class="delete-todo-button" @click="deleteTodo(index)">Delete</button>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data() {
    return {
      todoInput: null,
      todoDateInput: null,
      todoList: [
        { title: 'To do list Example #1', dueDate: '2023-12-22' },
        { title: 'To do list Example #2', dueDate: '2023-09-22' },
      ]
    }
  },
  methods: {
    addTodo() {
      this.todoList.push({
        title: this.todoInput,
        dueDate: this.todoDateInput
      });

      this.todoInput = null;
      this.todoDateInput = null;
    },
    deleteTodo(index) {
      this.todoList.splice(index, 1);
    }
  }
}
</script>

<style>
.todo-grid, .todo-input-grid {
  display: grid;
  grid-template-columns: 200px 150px 100px;
  column-gap: 10px;
  row-gap: 10px;
  align-items: center;
}

.todo-input-grid {
  margin-bottom: 10px;
  align-items: stretch;
}

.name-input, .due-date-input {
  font-size: 15px;
  padding: 6px;
}

.add-todo-button {
  background-color: green;
  color: white;
  border: none;
  font-size: 15px;
  cursor: pointer;
}

.delete-todo-button {
  background-color: darkred;
  color: white;
  border: none;
  font-size: 15px;
  cursor: pointer;
  padding: 10px;
}

@media screen and (max-width: 575px) {
  .todo-grid, .todo-input-grid {
    grid-template-columns: 150px 120px 50px;
    column-gap: 10px;
    row-gap: 10px;
    align-items: center;
    font-size: 12px;
  }
  .todo-input-grid {
    margin-bottom: 10px;
    align-items: stretch;
  }
  .name-input, .due-date-input {
    font-size: 10px;
    padding: 5px;
  }
  .add-todo-button {
    font-size: 10px;
  }
  .delete-todo-button {
    font-size: 10px;
    cursor: pointer;
    padding: 5px;
  }
}
</style>