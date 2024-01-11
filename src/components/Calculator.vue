<template>
  <div class="calculator">
    <p>
      <p class="js-display number-display">{{ display }}</p>
      <button @click="updateCalculation('1')">1</button>
      <button @click="updateCalculation('2')">2</button>
      <button @click="updateCalculation('3')">3</button>
      <button @click="updateCalculation('+')" class="orange-button">+</button>
    </p>

    <p>
      <button @click="updateCalculation('4')">4</button>
      <button @click="updateCalculation('5')">5</button>
      <button @click="updateCalculation('6')">6</button>
      <button @click="updateCalculation('-')" class="orange-button">-</button>
    </p>

    <p>
      <button @click="updateCalculation('7')">7</button>
      <button @click="updateCalculation('8')">8</button>
      <button @click="updateCalculation('9')">9</button>
      <button @click="updateCalculation('*')" class="orange-button">*</button>
    </p>

    <p>
      <button @click="updateCalculation('0')">0</button>
      <button @click="updateCalculation('.')">.</button>
      <button @click="evaluate">=</button>
      <button class="orange-button" @click="updateCalculation('/')">/</button>
    </p>

    <p>
      <button @click="clearCalculation">Clear</button>
    </p>
</div>
</template>

<script>
export default {
  name: 'Calculator',
  data() {
    return {
      calculation: '',
      display: ''
    }
  },
  computed: {
  },
  methods: {
    updateCalculation(value) {
      this.calculation += value;
      this.displayCalculation();
      localStorage.setItem('savedCalc', this.calculation);
    },
    displayCalculation() {
      this.display = this.calculation;
    },
    saveCalculation() {
      this.displayCalculation();
      localStorage.setItem('savedCalc', this.calculation);
    },
    evaluate() {
      try {
        this.calculation = eval(this.calculation);
        if (isNaN(this.calculation) || !isFinite(this.calculation)) {
          throw new Error("Invalid calculation result");
        }
        this.saveCalculation();
      } catch (error) {
        this.clearCalculation();
        alert("Error evaluating calculation!");
      }
    },
    clearCalculation() {
      this.calculation = '';
      this.displayCalculation(); 
      this.saveCalculation();
    }
  },
  mounted() {
    this.calculation = localStorage.getItem('savedCalc') || '';
    this.displayCalculation();
  }
}
</script>

<style>
.calculator button {
  height: 50px;
  width: 50px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  background-color: rgb(51, 51, 51);
  color: white;
  margin: 2px;
}

.calculator .orange-button {
  background-color: rgb(254, 160, 10);
}

.calculator .number-display {
  color: black;
  font-size: 30px;
  font-weight: bold;
  text-align: left;
  padding-bottom: 10px;
}
</style>