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
import RockPaperScissors from '../RockPaperScissors.vue';
// import { sr } from '@/utils/scroll-reveal';

export default {
  components: {
    PageSection,
    WheelsOfFortune,
    Calculator,
    Stopwatch,
    TicTacToe,
    TodoList,
    RockPaperScissors
  },
  data() {
    return {
      projects: [
        { title: 'Wheels of Fortune', icon: 'ri-donut-chart-fill', component: 'wheels-of-fortune' },
        { title: 'Calculator', icon: 'ri-calculator-line', component: 'calculator' },
        { title: 'Stopwatch', icon: 'ri-timer-line', component: 'stopwatch' },
        { title: 'Tic-Tac-Toe', icon: 'ri-artboard-2-line', component: 'tic-tac-toe' },
        { title: 'Todo List', icon: 'ri-calendar-todo-fill', component: 'todo-list' },
        { title: 'Rock Paper Scissors', icon: 'ri-scissors-2-line', component: 'rock-paper-scissors' },
      ],
    };
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.projects.forEach((project, index) => {
    //     const projectItem = this.$refs.projectItems[index];
    //     sr.reveal(projectItem, { delay: 200 * index, origin: 'bottom', distance: '20px' });
    //   });
    // });
  },
};
</script>

<style>
.small-projects {
  position: relative;
}

.small-projects__container {
  /* display: grid; */
  row-gap: 3.5rem;
  column-gap: 3.5rem;
  /* grid-template-columns: 1fr 1fr ; */
}

.small-projects__content {
  display: flex;
  flex-direction: column; /* Stack content vertically */
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically */
  text-align: center; /* Center text within the container */
  background-color: none;
  border-radius: 20px;
  box-shadow: 0 4px 12px hsl(207, 24%, 35%, .15);
  padding: 30px;
}

.small-projects__title {
  font-size: 1.5rem;
  font-weight: initial;
  margin-bottom: 40px;
}

@media screen and (max-width: 575px) {
  .small-projects__container {
    display: flex;
    flex-direction: column; /* Stack content vertically */
    align-items: center; /* Center horizontally */
    justify-content: center; /* Center vertically */
    text-align: center; /* Center text within the container */
  }

  .small-projects__content {
    width: 450px;
  }
}

@media screen and (min-width: 1200px) {
  .small-projects__container {
    grid-template-columns: 1fr 1fr ;
  }
}
</style>
