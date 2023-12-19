<template>
  <PageSection type="small-projects" title="Small Projects" subtitle="To showcase my works and determination to learn">
    <div v-for="project in projects" :key="project.title" class="small-projects__content">
      <h3 class="small-projects__title">
        <i :class="project.icon"></i> {{ project.title }} <i :class="project.icon"></i>
      </h3>
      <component :is="project.component" />
    </div>
  </PageSection>
</template>

<script>
import PageSection from '../templates/PageSection.vue';
import WheelsOfFortune from '../WheelsOfFortune.vue';
import Calculator from '../Calculator.vue';
import Stopwatch from '../Stopwatch.vue';
import TicTacToe from '../TicTacToe.vue';
import TodoList from '../TodoList.vue';

export default {
  components: {
    PageSection,
    WheelsOfFortune,
    Calculator,
    Stopwatch,
    TicTacToe,
    TodoList
  },
  data() {
    return {
      projects: [
        { title: 'Wheels of Fortune', icon: 'ri-donut-chart-fill', component: 'wheels-of-fortune' },
        { title: 'Calculator', icon: 'ri-calculator-line', component: 'calculator' },
        { title: 'Stopwatch', icon: 'ri-timer-line', component: 'stopwatch' },
        { title: 'Tic-Tac-Toe', icon: 'ri-artboard-2-line', component: 'tic-tac-toe' },
        { title: 'Todo List', icon: 'ri-calendar-todo-fill', component: 'todo-list' },
      ],
    };
  },
};
</script>
