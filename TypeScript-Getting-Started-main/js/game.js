"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const utility_1 = require("./utility");
const scoreBoard_1 = require("./scoreBoard");
class Game {
    constructor(player, problemCount, factor) {
        this.player = player;
        this.problemCount = problemCount;
        this.factor = factor;
        this.scoreboard = new scoreBoard_1.scoreBoard();
    }
    displayGame() {
        let gameForm = '';
        for (let i = 1; i <= this.problemCount; i++) {
            gameForm += '<div class="form-group">';
            gameForm += '<Label for="answer' + i + '"class="col-sm-2 control-label">';
            gameForm += String(this.factor) + 'X' + i + ' = </label>';
            gameForm += '<div class="col-sm-1"><input type="text" class="form-control" id="answer' + i + '"size="5" /></div>';
            gameForm += '</div>';
        }
        document.getElementById('game').innerHTML = gameForm;
        document.getElementById('calculate').removeAttribute('disabled');
    }
    calculateScore() {
        let score = 0;
        for (let i = 1; i <= this.problemCount; i++) {
            const answer = Number((0, utility_1.getValue)('answer' + i));
            if (i * this.factor === answer) {
                score++;
            }
        }
        const Result = {
            playerName: this.player.name,
            score: score,
            problemCount: this.problemCount,
            factor: this.factor
        };
        this.scoreboard.addResult(Result);
        this.scoreboard.updateScoreBoard();
        document.getElementById('calculate').setAttribute('disabled', 'true');
    }
}
exports.Game = Game;
//# sourceMappingURL=game.js.map