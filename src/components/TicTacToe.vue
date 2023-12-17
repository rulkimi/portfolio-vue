<template>
  <div class="tic-tac-toe">
    <div class="message">{{ message }}</div>
    <div class="board">
      <div v-for="(cell, index) in cells" :key="index" class="cell" :data-cell="index" @click="handleCellClick(index)">{{ cell }}</div>
    </div>
    <button id="restart-button" @click="restartGame">Restart Game</button>
  </div>
</template>

<script>
export default {
  name: 'TicTacToe',
  data() {
    return {
      cells: Array(9).fill(''),
      currentPlayer: 'X',
      gameActive: true,
      message: '',
    };
  },
  methods: {
    checkGameStatus() {
      const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
      ];

      for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (this.cells[a] && this.cells[a] === this.cells[b] && this.cells[a] === this.cells[c]) {
          this.gameActive = false;
          this.message = `${this.currentPlayer} Wins!`;
          break;
        }
      }
    },
    checkTie() {
      return this.cells.every(cell => cell !== '');
    },
    handleCellClick(index) {
      if (this.cells[index] === '' && this.gameActive) {
        this.cells[index] = this.currentPlayer;
        this.checkGameStatus();

        if (!this.gameActive) {
          return; // Don't allow further moves after the game is won
        }

        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';

        if (this.checkTie()) {
          this.gameActive = false;
          this.message = "It's a Tie!";
        }
      }
    },
    restartGame() {
      this.cells = Array(9).fill('');
      this.message = '';
      this.currentPlayer = 'X';
      this.gameActive = true;
    },
  },
};
</script>