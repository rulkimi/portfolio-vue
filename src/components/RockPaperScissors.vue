<template>
  <div class="rock-paper-scissor">
    <button class="move-button" v-for="move in moves" @click="playGame(move.name)">
      <img :src="move.icon" :alt="move.name" class="move-icon">
    </button>

    <p class="result">{{ result }}</p>
    <p class="moves" v-html="movesResult"></p>
    <p class="score">{{ scoresResult }}</p>

    <button @click="resetScore" class="reset-score-button">Reset Score</button>
  </div>
</template>

<script>
export default {
  name: 'RockPaperScissors',
  data() {
    const storedScore = localStorage.getItem('score');
    const initialScore = storedScore ? JSON.parse(storedScore) : { wins: 0, losses: 0, ties: 0 };
    return {
      moves: [
        { name: 'rock', icon: require('@/assets/img/rock-emoji.png') },
        { name: 'paper', icon: require('@/assets/img/paper-emoji.png') },
        { name: 'scissors', icon: require('@/assets/img/scissors-emoji.png') },
      ],
      score: initialScore,

      result: '',
      movesResult: '',
      scoresResult: ''
    }
  },
  methods: {
    pickComputerMove() {
      const moves = ['rock', 'paper', 'scissors'];
      const randomNumber = Math.floor(Math.random() * moves.length);

      return moves[randomNumber];
    },
    playGame(playerMove) {
      const computerMove = this.pickComputerMove();
      const outcomes = {
        rock: { rock: 'Tie.', paper: 'You lose.', scissors: 'You win.' },
        paper: { rock: 'You win.', paper: 'Tie.', scissors: 'You lose.' },
        scissors: { rock: 'You lose.', paper: 'You win.', scissors: 'Tie.' },
      };

      const result = outcomes[playerMove][computerMove];

      this.handleResult(result, playerMove, computerMove);
    },
    handleResult(result, playerMove, computerMove) {
      const outcomeMapping = {
        'You win.': 'wins',
        'You lose.': 'losses',
        'Tie.': 'ties',
      };

      this.score[outcomeMapping[result]] += 1;
      localStorage.setItem('score', JSON.stringify(this.score));

      this.result = result;
      this.movesResult = `You <img class="move-icon" src="${require(`@/assets/img/${playerMove}-emoji.png`)}"> <img class="move-icon" src="${require(`@/assets/img/${computerMove}-emoji.png`)}"> Computer `;
      this.updateScoreElement();
    },
    updateScoreElement() {
      this.scoresResult = `Wins: ${this.score.wins}, Losses: ${this.score.losses}, Ties: ${this.score.ties}`;
    },
    resetScore() {
      this.score.wins = 0;
      this.score.losses = 0;
      this.score.ties = 0;

      this.result = '';
      this.movesResult = '';

      localStorage.removeItem('score');
      this.updateScoreElement();
    }
  },
  mounted() {
    this.updateScoreElement();
  }
}
</script>