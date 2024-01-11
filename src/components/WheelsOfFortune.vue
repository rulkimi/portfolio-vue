<template>
  <div class="wheels">
    <div class="spin-button" @click="spinTheWheel" :disabled="isSpinning">Spin</div>
    <div class="wheel" ref="wheel">
      <div v-for="(segment, index) in wheelSegments" :key="index" class="number" :style="{ '--i': index + 1, '--clr': segment.color }">
        <span>{{ segment.value }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WheelsOfFortune',
  data() {
    return {
      isSpinning: false,
      wheelSegments: [
        { value: "100", color: "#c7738f" },
        { value: "1", color: "#4e74f1" },
        { value: "50", color: "#60e64c" },
        { value: "0", color: "#e0e727" },
        { value: "1000", color: "#f81e1e" },
        { value: "10", color: "#15e78f" },
        { value: "5", color: "#2c3df5" },
        { value: "20", color: "#7af02c" },
      ],
      winningSegments: [
        { i: 1, prize: "100" },
        { i: 2, prize: "1" },
        { i: 3, prize: "50" },
        { i: 4, prize: "0"},
        { i: 5, prize: "1000"},
        { i: 6, prize: "10"},
        { i: 7, prize: "5"},
        { i: 8, prize: "20"},
      ]
    }
  },
  methods: {
    spinTheWheel() {
      if (this.isSpinning) return;

      this.isSpinning = true;
      const wheel = this.$refs.wheel;

      // Calculate the final rotation angle
      const finalRotation = 360 * 10 + Math.ceil(Math.random() * 3600); // Assuming 10 full rotations

      // Apply the rotation to the wheel
      wheel.style.transition = 'transform 5s ease-in-out';
      wheel.style.transform = `rotate(${finalRotation}deg)`;

      // After the wheel stops spinning (5 seconds), check the winning segment
      setTimeout(() => {
        // Normalize the angle to a value between 0 and 360
        const normalizedAngle = finalRotation % 360;

        // Check if the wheel landed on a winning segment
        const winningSegment = this.winningSegments.find(segment => {
          const segmentAngle = (segment.i - 1) * 45;
          return normalizedAngle >= segmentAngle && normalizedAngle < segmentAngle + 45;
        });

        // Show an alert with the result
        // if (winningSegment) {
        //   alert("Congrats, you won " + winningSegment.prize + "!");
        // } else {
        //   alert("Sorry, try again!");
        // }

        // Re-enable the spin button
        this.isSpinning = false;
      }, 5000);
    }
  }
}
</script>

<style>
.wheels {
  position: relative;
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wheels .spin-button {
  position: absolute;
  width: 60px;
  height: 60px;
  background: #fff;
  border-radius: 50%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: 600;
  color: #333;
  letter-spacing: 0.1em;
  border: 4px solid rgba(0, 0, 0, 0.75);
  cursor: pointer;
  user-select: none;
}

.wheels .spin-button::before {
  content: '';
  position: absolute;
  top: -28px;
  width: 20px;
  height: 30px;
  background: #fff;
  clip-path: polygon(50% 0%, 15% 100%, 85% 100%);
}

.wheels .wheel {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #333;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 0 0 5px #333,
  0 0 0 15px #fff,
  0 0 0 18px #111;
  transition: transform 5s ease-in-out;
}

.wheels .wheel .number {
  position: absolute;
  width: 50%;
  height: 50%;
  background: var(--clr);
  transform-origin: bottom right;
  transform: rotate(calc(45deg * var(--i)));
  clip-path: polygon(0 0, 56% 0, 100% 100%, 0 56%);
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
}

.wheels .wheel .number span {
  position: relative;
  transform: rotate(45deg);
  font-size: 2em;
  font-weight: 700;
  color: #fff;
  text-shadow: 3px 5px 2px rgba(0, 0, 0, 0.15);
}

.wheels .wheel .number span::after {
  content: '$';
  position: absolute;
  font-size: 0.75em;
  font-weight: 500;
}

@media screen and (max-width: 575px) {
  .wheels {
    width: 300px;
    height: 300px;
  }
}
</style>