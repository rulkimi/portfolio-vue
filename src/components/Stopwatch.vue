<template>
  <div class="stop-watch-body">
    <div class="stop-watch-time">
      <span id="minutes">{{ minutes }}</span>
      <span id="seconds">{{ seconds }}</span>
      <span id="milliseconds">{{ milliseconds }}</span>
    </div>

    <div>
      <button id="startStopButton" @click="startStopTimer">{{ startPause }}</button>
      <button id="resetButton" @click="resetTimer">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stopwatch',
  data() {
    return {
      startPause: 'Start',

      minutes: '00 :',
      seconds: '00 :',
      milliseconds: '00',

      startTime: null,
      pausedTime: 0,
      intervalId: null
    }
  },
  methods: {
    formatTime(time) {
      return time.toString().padStart(2, "0");
    },
    updateTimer() {
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - this.startTime + this.pausedTime;

      const minutes = Math.floor(elapsedTime / (60 * 1000));
      const seconds = Math.floor((elapsedTime % (60 * 1000)) / 1000);
      const milliseconds = Math.floor((elapsedTime % 1000) / 10);

      this.minutes = this.formatTime(`${minutes.toString().padStart(2, "0")} :`);
      this.seconds = this.formatTime(`${seconds.toString().padStart(2, "0")} :`);
      this.milliseconds = this.formatTime(milliseconds);
    },
    startStopTimer() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.pausedTime += new Date().getTime() - this.startTime;
        this.startPause = 'Start';
      } else {
        this.startTime = new Date().getTime();
        this.intervalId = setInterval(this.updateTimer, 10);
        this.startPause = 'Pause';
      }
    },
    resetTimer() {
      clearInterval(this.intervalId);
      this.intervalId = null;
      this.pausedTime = 0;
      this.startPause = 'Start';
      this.minutes = '00 :';
      this.seconds = '00 :';
      this.milliseconds = '00';
    }
  }
}
</script>

<style>
.stop-watch-body {
  background-image: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(33,33,219,1) 0%, rgba(0,212,255,1) 100%);
  display: grid;
  place-items: center;
  width: 80%;
  height: 50%;
  border-radius: 30px;
  padding: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.stop-watch-time {
  font-family: 'Orbitron', sans-serif;
  font-size: 45px;
  margin-bottom: 20px;
}

.stop-watch-body .button {
  padding: 5px 15px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
}

@media screen and (max-width: 575px) {
  .stop-watch-time {
    font-family: 'Orbitron', sans-serif;
    font-size: 30px;
    margin-bottom: 20px;
  }
}
</style>