"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const player_1 = require("./player");
const game_1 = require("./game");
const helpers = require("./utility");
let newGame;
document.getElementById('startGame').addEventListener('click', () => {
    const Player = new player_1.player();
    Player.name = helpers.getValue('playername');
    const problemCount = Number(helpers.getValue('problemCount'));
    const factor = Number(helpers.getValue('factor'));
    newGame = new game_1.Game(Player, problemCount, factor);
    newGame.displayGame();
});
document.getElementById('calculate').addEventListener('click', () => {
    newGame.calculateScore();
});
//# sourceMappingURL=app.js.map