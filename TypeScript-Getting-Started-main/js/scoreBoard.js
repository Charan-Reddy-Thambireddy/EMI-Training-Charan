"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scoreBoard = void 0;
class scoreBoard {
    constructor() {
        this.Results = [];
    }
    addResult(newResult) {
        this.Results.push(newResult);
    }
    updateScoreBoard() {
        let output = '<h2>Scoreboard</h2>';
        for (let index = 0; index < this.Results.length; index++) {
            const Result = this.Results[index];
            output += '<h4>';
            output += Result.playerName + ' : ' + Result.score + ' / ' + Result.problemCount + ' for factor ' + Result.factor;
            output += '</h4>';
        }
        document.getElementById('scores').innerHTML = output;
    }
}
exports.scoreBoard = scoreBoard;
//# sourceMappingURL=scoreBoard.js.map