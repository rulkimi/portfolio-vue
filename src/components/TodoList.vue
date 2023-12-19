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