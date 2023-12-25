import { mount } from '@vue/test-utils';
import TodoList from '@/components/TodoList.vue';

describe('TodoList', () => {
  it('should add a todo to the list when addTodo is called', () => {
    // Arrange
    const wrapper = mount(TodoList);
    wrapper.setData({ todoInput: 'New Todo', todoDateInput: '2023-12-31' });

    // Act
    wrapper.vm.addTodo();

    // Assert
    expect(wrapper.vm.todoList.length).toBe(3); // Assuming the initial list has 2 items
    expect(wrapper.vm.todoList[2].title).toBe('New Todo');
    expect(wrapper.vm.todoList[2].dueDate).toBe('2023-12-31');
  });

  it('should delete a todo from the list when deleteTodo is called', () => {
    // Arrange
    const wrapper = mount(TodoList);

    // Act
    wrapper.vm.deleteTodo(0);

    // Assert
    expect(wrapper.vm.todoList.length).toBe(1);
    expect(wrapper.vm.todoList[0].title).toBe('To do list Example #2');
    expect(wrapper.vm.todoList[0].dueDate).toBe('2023-09-22');
  });

  // Add more test cases as needed, considering edge cases and potential issues.
});
